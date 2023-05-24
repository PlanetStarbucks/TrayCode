//What to do when the page initially load.  If there's a value, keep that value.
//If not, then wait for an auth and then get the folders
tray.on(
  "CONFIG_SLOT_MOUNT",
  async ({ event, previousWizardState, previousSlotState }) => {
    if (event.data.externalId !== "external_uploadfolder") {
      return;
    } else {
      if (
        previousWizardState.values.external_uploadfolder === false ||
        previousWizardState.values.external_uploadfolder === undefined ||
        previousWizardState.values.external_uploadfolder === ""
      ) {
        console.log("No auth. Add a valid auth for Webdam");
        return {
          ...event.data,
          status: "LOADING",
        };
      } else {
        return await folderState({
          event,
          previousWizardState,
          previousSlotState,
        });
      }
    }
  }
);

//When an auth is submitted to the Webdam Auth slot, or is changed, get the folders
tray.on(
  "AUTH_SLOT_VALUE_CHANGED",
  async ({ event, previousWizardState, previousSlotState }) => {
    if (
      previousWizardState.values.external_uploadfolder === false ||
      previousWizardState.values.external_uploadfolder === undefined ||
      previousWizardState.values.external_uploadfolder === ""
    ) {
      return {
        ...event.data,
        status: "VISIBLE",
        jsonSchema: await getJsonSchema({ previousWizardState }),
      };
    } else {
      return await folderState({
        event,
        previousWizardState,
        previousSlotState,
      });
    }
  }
);

async function getJsonSchema({ previousWizardState }, uploadFolder) {
  // use the Webdam connector to call the top level folder in account

  const response = await tray.callConnector({
    connector: "webdam",
    version: "1.0",
    operation: "list_folders",
    authId: previousWizardState.values.external_webdam_authentication,
    input: {},
  });

  // parse response into a proper object
  const folderArray = JSON.parse(response);
  //return JSON object to generate dropdown in Tray config
  return {
    // output the list of fields to pick from in the data mapping component
    enum: await enumerator(
      folderArray.results,
      previousWizardState,
      uploadFolder
    ),
  };
}

//function to create an array for Tray to render.  The first value is the root folder value, which should prompt the workflow to create a new folder.
const enumerator = async function (input, previousWizardState, uploadFolder) {
  let newArray = [
    /* commentting this out for now...need to figure out how to handle the different scenarios when a user updates the config
			  {
				  "text": "Create New Folder",
				  "value": 0
			  }
					*/
  ];
  input.forEach((element) => {
    newArray.push({
      text: element.name,
      value: element.id,
    });
  });
  if (uploadFolder !== undefined) {
    const folderDetail = await folderRes(previousWizardState);
    newArray.push({
      text: folderDetail.name,
      value: folderDetail.id,
    });
  }
  return newArray;
};

//function to call the Webdam folder status
const folderRes = async function (previousWizardState) {
  let res = "";
  if (previousWizardState.values.external_uploadfolder === undefined) {
    return {
      message: "Not Found",
    };
  } else {
    try {
      res = await tray.callConnector({
        connector: "webdam",
        version: "1.2",
        operation: "get_folder",
        authId: previousWizardState.values.external_webdam_authentication,
        input: {
          folder_id: Number(previousWizardState.values.external_uploadfolder),
        },
      });
    } catch (err) {
      console.log("folder deleted, getting new folder list");
      res = {
        message: "Not Found",
      };
      return res;
    }
    const response = JSON.parse(res);
    return response;
  }
};

const folderState = async function ({
  event,
  previousWizardState,
  previousSlotState,
}) {
  console.log("getting folder state");
  const folderState = await folderRes(previousWizardState);
  if (folderState.message === "Not Found") {
    console.log("folder not found");
    {
      return {
        ...event.data,
        status: "VISIBLE",
        jsonSchema: await getJsonSchema({ previousWizardState }),
      };
    }
  } else {
    console.log("folder found, returning previous value");
    return {
      ...previousSlotState,
      status: "VISIBLE",
      jsonSchema: await getJsonSchema(
        { previousWizardState },
        previousSlotState.value
      ),
    };
  }
};

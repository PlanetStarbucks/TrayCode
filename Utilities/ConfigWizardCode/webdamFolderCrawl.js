// *****************
// When the page loads, check if there's an auth for Webdam.  If not, set hidden with no value.
// If there is a value, call the Webdam folders and return schema to the wizard.  Whenever a folder is selected
// check that folder and display any subfolders as options.  Give the option to go back to parent or root.
// Note that use of this script may require renaming the auth slod ID name to the correct name
// in the config wizard for the Webdam auth slot.
// *****************

tray.on("CONFIG_SLOT_MOUNT", async ({ event, previousWizardState }) => {
	// if the auth has not been set, loaded un in unset state, return a loading state.
	if (previousWizardState.values.external_webdam_authentication === undefined) {
		return {
			...event,
			status: "LOADING",
		};
	} else {
		// if the page loads, but a user has already set a value at an earlier time, get the folder data and return it to the wizard.
		let folder = parseNumber(event.data.value);
		return {
			...(await getFolder(event, previousWizardState.values.external_webdam_authentication, folder)),
		};
	}
});

// If an auth slot changes, check that it's the Webdam auth slot.  If so, call the folders and return
// schema back to the wizard.  If not, do nothing.
tray.on("AUTH_SLOT_VALUE_CHANGED", async ({ event, previousWizardState }) => {
	if (event.data.externalId === `external_webdam_authentication` || event.data.value === undefined) {
		return {
			...(await getFolder(event, event.data.value, "0")),
		};
	} else {
		return;
	}
});

// Whenever a user selects a folder from the list, query the data for that folder and return the appropriate array back to the wizard.
// This should include the options to return to the root folder, or return to the parent folder (crawl back up)
tray.on("CONFIG_SLOT_VALUE_CHANGED", async ({ event, previousWizardState }) => {
	if (event.data.externalId === `external_uploadfolder` || event.data.value === undefined) {
		let folder = parseNumber(event.data.value);
		return {
			...(await getFolder(event, previousWizardState.values.external_webdam_authentication, folder)),
		};
	} else {
		return;
	}
});

// function to get the folder data from the trigger events.  Returns the folders in an array.  If it is a subfolder, it will
// include the options to return back to the parent or root folders.
const getFolder = async function (event, authId, folderId) {
	console.log(`Getting folders for ID ${folderId}`);

	try {
		// using the Tray connector, call the folder for the given Webdam folderID.  Ensure the folder_id is a number
		const res = await tray.callConnector({
			connector: "webdam",
			version: "1.2",
			operation: "get_folder",
			authId: authId,
			input: {
				folder_id: Number(folderId),
			},
		});

		// parse the response into an object and find the results.  The structure is different for the root or a subfolder,
		// so if the root use the results object, and if a subfolder use the folders array from the response.
		parsedRes = JSON.parse(res);
		const folders = folderId == 0 ? parsedRes.results : parsedRes.folders;

		// create an array for the folders.
		// Push each folder into the array in the text/value pairing for config wizard enum.
		let folderEnum = [];

		// when the folder has no subfolders, the folders obj will be undefined (there are no subfolders).  If it's undefined,
		// return back the selected folder value and the list of options to return to root or parent.
		if (folders === undefined) {
			return {
				...event.data,
				status: "VISIBLE",
				value: folderId == 0 ? undefined : folderId,
				jsonSchema: {
					enum: [
						{
							text: "Return to root folder...",
							value: "0",
						},
						{
							text: "Return to parent folder...",
							value: `parent${parsedRes.parent}`,
						},
						{
							text: parsedRes.name,
							value: parsedRes.id,
						},
					],
				},
			};
		} else {
			// if the folder is a subfolder (the parent is not 0), then add the options for returning to the root, parent, current selected value
			if (folders[0].parent != 0) {
				console.log(parsedRes);
				folderEnum.push(
					{
						text: "Return to root folder...",
						value: "0",
					},
					{
						text: "Return to parent folder...",
						value: `parent${parsedRes.parent}`,
					},
					{
						text: parsedRes.name,
						value: parsedRes.id,
					}
				);
			}
			// and then add all the subfolders in the folders object as options to the enum.
			for (let i = 0; i < folders.length; i++) {
				folderEnum.push({
					text: folders[i].name,
					value: folders[i].id,
				});
			}

			// return the final folderEnum, and if the input value was 0, set undefined (a user can't select the root to upload).
			return {
				...event.data,
				status: "VISIBLE",
				value: folderId == 0 ? undefined : folderId,
				jsonSchema: {
					enum: folderEnum,
				},
			};
		}
	} catch (error) {
		// send any errors to the console.  Return a generic failure to the slot.
		// Errors will probably only be bad auths or deleted folders (probably)
		message = JSON.parse(error);
		console.log("An error occcured:", message);
		if (message.response.body.message === "Not Found") {
			console.log("Returning to root folder...");
			return {
				...(await getFolder(event, authId, "0")),
			};
		} else {
			return;
		}
	}
};

// This function sanitizes any folder inputs.  The Webdam connector requires a number, but the wizard stores it as a string.
// Whether the input is a number or string, return only numbers as as a number.  If undefined, returned undefined.
const parseNumber = function (str) {
	if (typeof str === "undefined") {
		return 0;
	} else if (typeof str === "number") {
		return str;
	} else {
		let res = str.replace(/[^0-9 ]/g, "");
		return res;
	}
};

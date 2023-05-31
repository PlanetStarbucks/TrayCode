//The CONFIG_SLOT_MOUNT event is fired when a config slot has loaded onto the screen.//
//this call updates the previousWizardState to include the jsonSchema from the getJsonSchema function
tray.on("CONFIG_SLOT_MOUNT", async ({ event, previousWizardState, previousSlotState }) => {
	// generate the schema needed to create the data mapper
	return await generateSchema({ event, previousWizardState, previousSlotState });
});

const generateSchema = async ({ event, previousWizardState, previousSlotState }) => {
	// get the first list of options
	const boardID = previousWizardState.values.external_boardid;
	const list1 = await getFirstList({ event, previousWizardState, boardID });
	// get the second list of options
	const list2 = await getSecondList({ event, previousWizardState });

	// the returned value needs to be formatted as such. The jsonSchema type will need to be an
	// array with one item of type OBJECT that holds the properties of each list. The KEY of this
	// object will be the first list of options and the VALUE of the object
	return {
		...previousSlotState,
		status: "VISIBLE",
		jsonSchema: {
			title: "Metadata Mapping",
			default: [],
			type: "array",
			table: {
				key: "Monday Column",
				value: "Bynder Metaproperty",
			},
			items: {
				title: "Column Mappings",
				type: "object",
				default: {},
				properties: {
					key: {
						type: list1.type,
						title: "First Fields",
						enum: list1.enum,
					},
					value: {
						type: list2.type,
						title: "Second Fields",
						enum: list2.enum,
					},
				},
				customValues: false,
				additionalItems: true,
				additionalProperties: false,
			},
		},
	};
};

// Use the Monday GraphQL API to get the column list from the board.  Return back the object for generateSchema
const getFirstList = async ({ event, previousWizardState, boardID }) => {
	//query Monday for column values
	const response = await tray.callConnector({
		connector: "graphql-client",
		version: "1.1",
		operation: "raw_query",
		authId: previousWizardState.values.external_monday_authentication,
		input: {
			query: "query getColumns($boardID: [Int]!) {\n  boards (ids: $boardID) {\n\t\tcolumns {\n      id\n      title\n    }\n  }\n}",
			graphql_endpoint: "https://api.monday.com/v2",
			headers: [
				{
					key: "Authorization",
					value: "{$.auth.api_key}",
				},
			],
			variables: [
				{
					key: "boardID",
					value: Number(boardID),
				},
			],
		},
	});

	//parse response form monday, the map the boards.columns to an object
	const mondayRes = JSON.parse(response);
	const columns = Object.entries(mondayRes.data.boards[0].columns).map((x) => {
		return {
			name: x[1].title,
			value: x[1].id,
		};
	});

	//return jsonSchema in { text, value } to render in dropdown.  Maps the column object in the correct format
	result = {
		type: "string",
		enum: columns.map(({ name, value }) => ({ text: name, value: value })),
	};
	console.log(result);
	return result;
};

// this function gets the list from Bynder and formats it into an array or objects with text and value to display in the UI
const getSecondList = async ({ event, previousWizardState }) => {
	// Using the Bynder Connector with the Bynder auth provided by the config wizard, get the metaproperties for the account
	const response = await tray.callConnector({
		connector: "bynder",
		version: "2.0",
		operation: "list_metaproperties",
		authId: previousWizardState.values.external_bynder_authentication,
		input: {
			include_options: false,
			include_count: false,
			ids: [],
		},
	});

	// parse response into a proper object
	const metapropArray = JSON.parse(response);
	// convert that object to only what's needed.  Map the label and id only.
	const properties = Object.entries(metapropArray).map((x) => {
		return {
			name: metapropArray[x[0]].label,
			value: metapropArray[x[0]].id,
		};
	});

	//return the jsonSchema in the proper format
	result = {
		type: "string",
		enum: properties.map(({ name, value }) => ({ text: name, value: value })),
	};
	return result;
};

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
				key: "Board Data",
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

// Hard coded list of options to map into the table
const getFirstList = async () => {
	const hardList = [
		{
			text: "Link to Board",
			value: "https://{{slug}}.monday.com/boards/{{boardID}}/",
		},
		{
			text: "Link to Item",
			value: "https://{{slug}}.monday.com/boards/{{boardID}}/pulses/{{pulseID}}",
		},
		{
			text: "Link to Asset",
			value: "https://{{slug}}.monday.com/boards/{{boardID}}/pulses/{{pulseID}}?asset_id={{assetID}}",
		},
	];
	return {
		type: "string",
		enum: hardList,
	};
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

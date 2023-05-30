//This is for use with any static metaproperty map with Bynder.
//The only thing that should need updated is the name of the authId
//in the call connector operation.

//Note that the config slot in the Workflow should be set to an empty array as default

tray.on("CONFIG_SLOT_MOUNT", async ({ event, previousWizardState }) => {
	if (event.data.externalId !== tray.env.slotExternalId) return;

	// use the Http Client connector to call the Bynder API
	const response = await tray.callConnector({
		connector: "bynder",
		version: "2.0",
		operation: "list_metaproperties",
		authId: previousWizardState.values.external_bynder_authentication_1,
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
	console.log(properties);

	return {
		...event.data,
		// hide the slot from view in the wizard
		status: "HIDDEN",
		// output the list of fields to pick from in the data mapping component
		value: properties.map(({ name, value }) => ({ text: name, value: value })),
	};
});

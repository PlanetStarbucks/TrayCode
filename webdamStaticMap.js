tray.on("CONFIG_SLOT_MOUNT", async ({ event, previousWizardState }) => {
	if (event.data.externalId !== tray.env.slotExternalId) return;

	// use the Http Client connector to call the Webdam API
	const response = await tray.callConnector({
		connector: "webdam",
		version: "1.0",
		operation: "list_xmp_metadata_schemas",
		authId: previousWizardState.values.external_webdam_authentication,
		input: {},
	});

	// parse response into a proper object
	const metapropArray = JSON.parse(response);
	for (let i = 0; i < metapropArray.xmpschema.length; i++) {
		if (metapropArray.xmpschema[i].status === "inactive") {
			metapropArray.xmpschema.splice(i, 1);
			i--;
		}
	}
	// convert that object to only what's needed.  Map the label and id only.
	const properties = Object.entries(metapropArray.xmpschema).map((x) => {
		return {
			name: metapropArray.xmpschema[x[0]].label,
			value: metapropArray.xmpschema[x[0]].field,
		};
	});

	return {
		...event.data,
		// hide the slot from view in the wizard
		status: "HIDDEN",
		// output the list of fields to pick from in the data mapping component
		value: properties.map(({ name, value }) => ({ text: name, value: value })),
	};
});

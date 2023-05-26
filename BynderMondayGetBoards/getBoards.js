tray.on("CONFIG_SLOT_MOUNT", async ({ event, previousWizardState }) => {
	if (event.data.externalId !== tray.env.slotExternalId) return;

	// use the GraphQL connector to call the Monday Boards
	const response = await tray.callConnector({
		connector: "graphql-client",
		version: "1.1",
		operation: "raw_query",
		authId: previousWizardState.values.external_monday_authentication,
		input: {
			query: "query getBoardList () {\n\tboards (state: active, limit: 100) {\n    name\n    id\n  }\n}",
			graphql_endpoint: "https://api.monday.com/v2",
			headers: [
				{
					key: "Authorization",
					value: "{$.auth.api_key}",
				},
			],
			variables: [],
		},
	});

	//Parse the response into object, then restructure as { name, value }
	const mondayRes = JSON.parse(response);
	const boards = Object.entries(mondayRes.data.boards).map((x) => {
		return {
			name: mondayRes.data.boards[x[0]].name,
			value: mondayRes.data.boards[x[0]].id,
		};
	});

	//return jsonSchema in { text, value } to render in dropdown.
	return {
		...event.data,
		type: "string",
		status: "VISIBLE",
		jsonSchema: {
			enum: boards.map(({ name, value }) => ({ text: name, value: value })),
		},
	};
});

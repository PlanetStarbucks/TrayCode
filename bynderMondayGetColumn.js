tray.on("CONFIG_SLOT_MOUNT", async ({ event, previousWizardState, previousSlotState }) => {
	if (event.data.externalId === "external_columnid") {
		if (
			previousWizardState.values.external_boardid === false ||
			previousWizardState.values.external_boardid === null ||
			previousWizardState.values.external_boardid === undefined
		) {
			return {
				...event.data,
				status: "LOADING",
			};
		} else {
			const boardID = previousWizardState.values.external_boardid;
			return await getJsonSchema({ event, previousWizardState, boardID });
		}
	} else {
		return;
	}
});

tray.on("CONFIG_SLOT_VALUE_CHANGED", async ({ event, previousWizardState }) => {
	if (event.data.externalId === "external_boardid") {
		const boardID = event.data.value;
		return await getJsonSchema({ event, previousWizardState, boardID });
	} else {
		return;
	}
});

async function getJsonSchema({ event, previousWizardState, boardID }) {
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

	const mondayRes = JSON.parse(response);
	const columns = Object.entries(mondayRes.data.boards[0].columns).map((x) => {
		return {
			name: x[1].title,
			value: x[1].id,
		};
	});

	//return jsonSchema in { text, value } to render in dropdown.
	return {
		...event.data,
		type: "string",
		status: "VISIBLE",
		jsonSchema: {
			enum: columns.map(({ name, value }) => ({ text: name, value: value })),
		},
	};
}

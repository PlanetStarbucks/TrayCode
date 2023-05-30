tray.on("CONFIG_SLOT_MOUNT", async ({ event, previousWizardState }) => {
	if (event.data.externalId === "external_triggervalue") {
		if (
			previousWizardState.values.external_triggervalue === false ||
			previousWizardState.values.external_triggervalue === null ||
			previousWizardState.values.external_triggervalue === undefined
		) {
			return {
				...event.data,
				status: "LOADING",
			};
		} else {
			const columnID = previousWizardState.values.external_columnid;
			return await getJsonSchema({ event, previousWizardState, columnID });
		}
	} else {
		return;
	}
});

tray.on("CONFIG_SLOT_VALUE_CHANGED", async ({ event, previousWizardState }) => {
	if (event.data.externalId === "external_columnid") {
		const columnID = event.data.value;
		return await getJsonSchema({ event, previousWizardState, columnID });
	} else if (event.data.externalId === "external_boardid") {
		return {
			...event.data,
			type: "string",
			status: "LOADING",
			value: null,
		};
	} else {
		return;
	}
});

async function getJsonSchema({ event, previousWizardState, columnID }) {
	const response = await tray.callConnector({
		connector: "graphql-client",
		version: "1.1",
		operation: "raw_query",
		authId: previousWizardState.values.external_monday_authentication,
		input: {
			query: "query getValues ($columnID: [String]!, $boardID: [Int]!) {\n  boards(ids: $boardID) {\n    columns (ids: $columnID) {\n      id\n      settings_str\n    }\n  }\n}",
			graphql_endpoint: "https://api.monday.com/v2",
			headers: [
				{
					key: "Authorization",
					value: "{$.auth.api_key}",
				},
			],
			variables: [
				{
					key: "columnID",
					value: columnID,
				},
				{
					key: "boardID",
					value: Number(previousWizardState.values.external_boardid),
				},
			],
		},
	});

	const res = JSON.parse(JSON.parse(response).data.boards[0].columns[0].settings_str);

	//return jsonSchema in { text, value } to render in dropdown.
	if (res.labels === undefined) {
		console.log("returning custom option");
		return {
			...event.data,
			jsonSchema: {
				type: "string",
			},
			status: "VISIBLE",
			value: "Enter Trigger Value",
		};
	} else {
		console.log("returning option list", res.labels);
		return {
			...event.data,
			type: "string",
			status: "VISIBLE",
			jsonSchema: {
				enum: Object.values(res.labels),
			},
		};
	}
}

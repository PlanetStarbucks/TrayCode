tray.on("CONFIG_SLOT_MOUNT", async ({ event, previousWizardState }) => {
	if (event.data.externalId !== tray.env.slotExternalId) return;

	// iterate through pages of boards from Monday's API
	// create a holding object for the data, so it can be formatted for the wizard
	let dataObj = {
		boards: [],
		page: 1,
		next: true,
	};

	// a while loop to go through all pages of boards until the end is found.
	// on each loop get the results for the given page, iterate the page, and test
	// if the result was empty.  If it was, set the 'next' value to false to end loop.

	while (dataObj.next === true) {
		let pageRes = await mondayBoard(dataObj.page, previousWizardState);
		dataObj.boards.push(pageRes);
		dataObj.page++;
		dataObj.next = pageRes.length === 0 ? false : true;
	}

	// Parse the response into object, then restructure as { text, value }
	// also, the response must be flattened, because the operation above creates
	// an array of arrays.
	const mondayRes = dataObj.boards.flat();
	const finalBoards = Object.entries(mondayRes).map((x) => {
		return {
			text: mondayRes[x[0]].name,
			value: mondayRes[x[0]].id,
		};
	});

	console.log("Total number of boards:", finalBoards.length);

	//return jsonSchema in { text, value } to render in dropdown.
	return {
		...event.data,
		type: "string",
		status: "VISIBLE",
		jsonSchema: {
			enum: finalBoards,
		},
	};
});

// callable async function for Monday boards.  It takes a page number and
// the wizard states, and returns the board data 100 at a time.  Monday doesn't state
// a maximum board number, but they have a max payload size.  100 seems an OK number.
const mondayBoard = async function (page, previousWizardState) {
	let res = await tray.callConnector({
		connector: "graphql-client",
		version: "1.1",
		operation: "raw_query",
		authId: previousWizardState.values.external_monday_authentication,
		input: {
			query: "query getBoardList ($page: Int!) {\n\tboards (state: active, limit: 100, page: $page) {\n    name\n    id\n  }\n}",
			graphql_endpoint: "https://api.monday.com/v2",
			headers: [
				{
					key: "Authorization",
					value: "{$.auth.api_key}",
				},
			],
			variables: [
				{
					key: "page",
					value: Number(page),
				},
			],
		},
	});
	return JSON.parse(res).data.boards;
};

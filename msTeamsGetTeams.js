tray.on("CONFIG_SLOT_MOUNT", async ({ event, previousWizardState }) => {
	if (event.data.externalId !== tray.env.slotExternalId) return;

	//call the MS Teams connector for a list of user's teams:
	const response = await tray.callConnector({
		connector: "microsoft-teams",
		version: "1.4",
		operation: "list_user_teams",
		authId: previousWizardState.values.external_microsoft_authentication,
		input: {
			user_id: "me",
		},
	});

	const teamsRes = JSON.parse(response);
	const teams = Object.entries(teamsRes.value).map((x) => {
		return {
			name: teamsRes.value[x[0]].displayName,
			value: teamsRes.value[x[0]].id,
		};
	});

	return {
		...event.data,
		type: "string",
		status: "VISIBLE",
		jsonSchema: {
			enum: teams.map(({ name, value }) => ({ text: name, value: value })),
		},
	};
});

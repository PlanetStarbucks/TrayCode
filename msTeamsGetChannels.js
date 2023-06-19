tray.on("CONFIG_SLOT_MOUNT", async ({ event, previousWizardState, previousSlotState }) => {
	if (event.data.externalId === "external_channel_id") {
		if (
			previousWizardState.values.external_channel_id === false ||
			previousWizardState.values.external_channel_id === null ||
			previousWizardState.values.external_channel_id === undefined
		) {
			return {
				...event.data,
				status: "LOADING",
			};
		} else {
			return await getJsonSchema({ event, previousWizardState });
		}
	} else {
		return;
	}
});

tray.on("CONFIG_SLOT_VALUE_CHANGED", async ({ event, previousWizardState }) => {
	if (event.data.externalId === "external_group_id") {
		return await getJsonSchema({ event, previousWizardState });
	} else {
		return;
	}
});

async function getJsonSchema({ event, previousWizardState }) {
	//call the MS Teams connector for a list of user's teams:
	const response = await tray.callConnector({
		connector: "microsoft-teams",
		version: "1.4",
		operation: "list_channels",
		authId: previousWizardState.values.external_microsoft_authentication,
		input: {
			group_id: event.data.value,
		},
	});

	const channelsRes = JSON.parse(response);
	const channels = Object.entries(channelsRes.value).map((x) => {
		return {
			name: channelsRes.value[x[0]].displayName,
			value: channelsRes.value[x[0]].id,
		};
	});

	return {
		...event.data,
		type: "string",
		status: "VISIBLE",
		jsonSchema: {
			enum: channels.map(({ name, value }) => ({ text: name, value: value })),
		},
	};
}

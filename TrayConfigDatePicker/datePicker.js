//this code forces the config slot to be a date picker.
tray.on("CONFIG_SLOT_MOUNT", async ({ previousSlotState }) => {
	return {
		...previousSlotState,
		status: "VISIBLE",
		jsonSchema: {
			type: "string",
			format: "date",
		},
	};
});

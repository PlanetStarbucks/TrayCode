// Arrays that define the options availabe in the table lookup.  These are global so that we can lookup the text field
// in the error validation check. Removed all the embed options from the table, as they are probably not required for this
// integration yet

const vimeoMetadata = [
	{ value: "Vimeo_Content_Rating", text: "Content Rating" },
	// { value: "embed.buttons.embed", text: "Embed Buttons" },
	// { value: "embed.buttons.fullscreen", text: "Embed Fullscreen" },
	// { value: "embed.buttons.hd", text: "Embed HD" },
	// { value: "embed.buttons.like", text: "Embed Like" },
	// { value: "embed.buttons.scaling", text: "Embed Scaling" },
	// { value: "embed.buttons.share", text: "Embed Sharing" },
	// { value: "embed.buttons.watchlater", text: "Embed Watch Later" },
	// { value: "embed.color", text: "Embed Color" },
	// { value: "embed.end_screen.type", text: "Embed Screen Type" },
	// { value: "embed.logos.custom.active", text: "" },
	// { value: "embed.logos.custom.link", text: "" },
	// { value: "embed.logos.custom.sticky", text: "" },
	// { value: "embed.logos.vimeo", text: "" },
	// { value: "embed.playbar", text: "" },
	// { value: "embed.title.name", text: "" },
	// { value: "embed.title.owner", text: "" },
	// { value: "embed.title.portrait", text: "" },
	// { value: "embed.volume", text: "" },
	// { value: "embed_domains", text: "" },
	{ value: "Vimeo_Hide_From_Vimeo", text: "Private" },
	{ value: "Vimeo_License", text: "License" },
	{ value: "Vimeo_Locale", text: "Language" },
	{ value: "Vimeo_Password", text: "Password" },
	{ value: "Vimeo_Privacy-Add", text: "Add to List" },
	{ value: "Vimeo_Privacy-Comments", text: "Comments" },
	{ value: "Vimeo_Privacy-Download", text: "Download" },
	{ value: "Vimeo_Privacy-Embed", text: "Embedabble" },
	{ value: "Vimeo_Privacy-View", text: "View Permissions" },
	{ value: "Vimeo_Review_Page-Active", text: "Review" },
];

const options = [
	{ value: "required", text: "Required" },
	{ value: "optional", text: "Optional" },
];

tray.on("CONFIG_SLOT_MOUNT", async ({ event, previousWizardState, previousSlotState }) => {
	// generate the schema needed to create the data mapper
	return await generateSchema({ event, previousWizardState, previousSlotState });
});

const generateSchema = async ({ event, previousWizardState, previousSlotState }) => {
	// return the two lists defined globally in a table for the user
	return {
		...previousSlotState,
		status: "VISIBLE",
		jsonSchema: {
			title: "Vimeo Upload Attributes",
			default: [],
			type: "array",
			table: {
				key: "Vimeo",
				value: "Option",
			},
			items: {
				title: "attribute",
				type: "object",
				default: {},
				properties: {
					key: {
						type: "string",
						title: "First Fields",
						enum: vimeoMetadata,
					},
					value: {
						type: "string",
						title: "Second Fields",
						enum: options,
					},
				},
				customValues: false,
				additionalItems: true,
				additionalProperties: false,
			},
		},
	};
};

// As the user is defining the data table, check the entries to ensure they are valid.
// The table must be in a valid state (no nulls or duplicate fields) before the user can continue.

tray.on("CONFIG_SLOT_VALUE_CHANGED", async ({ event, previousWizardState }) => {
	//only run if the slat value changing is the metadaproperties config
	if (event.data.externalId !== "external_metaproperties") {
		return;
	} else {
		//find any row that is different.  May return null if both the current and former state have the same data.
		let updateObject = await compare({ event, previousWizardState });
		console.log(updateObject);

		//if there is no difference, check if any vimeo fields are duplicated
		if (updateObject.key !== null && updateObject.value !== null) {
			if (findDuplicate(event.data.value) === true) {
				return {
					...event.data,
					validation: {
						status: "ERROR",
						message: `Check and remove duplicate Vimeo fields.`,
					},
				};
			} else {
				return {
					...event.data,
					validation: undefined,
				};
			}
		}

		// if the option is null, prompt user to update the option
		else if (updateObject.key !== null && updateObject.value === null) {
			//lookup the display name of the object returned by the compare function
			const valueName = vimeoMetadata.find((obj) => {
				return obj.value === updateObject.key;
			}).text;

			return {
				...event.data,
				validation: {
					status: "ERROR",
					message: `Define if ${valueName} should be required or optional for sync`,
				},
			};
		}
		// if the option is defined, but the vimeo filed isn't, prompt user to update field
		else if (updateObject.key === null && updateObject.value !== null) {
			return {
				...event.data,
				validation: {
					status: "ERROR",
					message: `Missing Vimeo field in table`,
				},
			};
		}
		// if both are undefined, it's a new row and the user needs to enter values
		else if (updateObject.key === null && updateObject.value === null) {
			return {
				...event.data,
				validation: {
					status: "ERROR",
					message: `Choose a Vimeo option in the empty row`,
				},
			};
		}
	}
});

//The compare function looks at each row from the metadata values table from both the current and prior state.
//If any of the objects are different, it returns that object.  That effectively is returning the value that was changed
//when this config slot was changed.

const compare = async function (input) {
	for (let i = 0; i < input.event.data.value.length; i++) {
		if (JSON.stringify(input.event.data.value[i]) !== JSON.stringify(input.previousWizardState.values.external_metaproperties[i])) {
			return input.event.data.value[i];
		}
	}
};

// Looks at the array of objects in the data, and if there's duplicates returns key names of the duplicates.
// Returns empty array if no duplicates

const findDuplicate = function (ary) {
	// take all keys in array of objects, and flatten into array
	let keys = [];
	ary.forEach((element) => {
		keys.push(element.key);
	});
	// use the Set() method to create a new set with unique values.
	// If that is smaller than the input array, there are duplicates
	const uniqueKeys = [...new Set(keys)];
	const res = keys.length > uniqueKeys.length ? true : false;
	return res;
};

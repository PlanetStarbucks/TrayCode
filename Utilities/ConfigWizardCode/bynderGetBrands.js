// *****************
// When the page loads, check if there's an auth for Bynder.  If not, set hidden with no value.
// If there is a value, call the Bynder Brands and return schema to the wizard.
// Note that use of this script may require renaming the auth slod ID name to the correct name
// in the config wizard for the Bynder auth slot.
// *****************

tray.on("CONFIG_SLOT_MOUNT", async ({ event, previousWizardState }) => {
	if (previousWizardState.values.external_webdam_authentication === undefined) {
		return {
			...event,
			status: "LOADING",
		};
	} else {
		return {
			...(await getFolder(event, previousWizardState.values.external_webdam_authentication)),
		};
	}
});

// If an auth slot changes, check that it's the Bynder auth slot.  If so, call the brands and return
// schema back to the wizard.  If not, do nothing.
tray.on("AUTH_SLOT_VALUE_CHANGED", async ({ event, previousWizardState }) => {
	if (event.data.externalId === `external_webdam_authentication`) {
		return {
			...(await getFolder(event, event.data.value)),
		};
	} else {
		return;
	}
});

const getBrands = async function (event, authId) {
	console.log("Getting brand IDs for account...");

	try {
		// using the Tray connector, call the brands for the given Bynder Account.
		const response = await tray.callConnector({
			connector: "bynder",
			version: "2.0",
			operation: "list_brands",
			authId: authId,
			input: {},
		});

		// parse the response into an object and find the results
		const brands = JSON.parse(response).results;

		// create an array for the brands.  Most accounts only have one, some have more than one.
		// Push each brand into the array in the text/value pairing for config wizard enum.
		let brandEnum = [];
		for (let i = 0; i < brands.length; i++) {
			brandEnum.push({
				text: brands[i].name,
				value: brands[i].id,
			});
		}

		// if no brands are found, throw an error.  If one is found, return the ID as the slot value
		// but keep the slot hidden.  If more than one brand is found, return a picklist
		if (brandEnum.length < 1) {
			throw new Error("No Brands Found");
		} else if (brandEnum.length === 1) {
			console.log(`Saving BrandID ${brandEnum[0].text}`);
			return {
				...event.data,
				status: "HIDDEN",
				value: brandEnum[0].value,
			};
		} else {
			return {
				...event.data,
				status: "VISIBLE",
				jsonSchema: {
					description: "Pick the Bynder brand from the list below:",
					enum: brandEnum,
				},
			};
		}
	} catch (error) {
		// send any errors to the console.  Return a generic failure to the slot.
		// Errors will probably only be bad auths (probably)
		console.log(error);
		return {
			...event.data,
			status: "VISIBLE",
			validation: {
				status: "ERROR",
				message: "Bynder Authentication Invalid",
			},
		};
	}
};

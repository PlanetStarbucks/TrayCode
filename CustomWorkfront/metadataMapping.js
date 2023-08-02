/**
 * Captures Workfront metadata to Bynder metaproperty mappings in the solution instance installer. User will be shown
 * a table with 2 columns, all containing dropdown lists in each cell. The options for the dropdown lists
 * are fetched via calls to the respective Workfront and Bynder Tray connectors. By passing the proper authentication in the config
 * slots, the calls will be performed against the services that were just authenticated in a previous step.
 *
 * @author Lynton devs
 * @modifier PlanetStarbucks
 */

/** The config slot where we'll put the table values into (and get them out of) */
const TABLE_VALUES_SLOT = tray.env.slotExternalId;

/** The base domain for the custom Workfront Account (everything before workfront.com) */
const BASE_WF_DOMAIN = "SUB_DOMAIN.my";

/** Array items corresponding to table rows will store the Workfront metadata under this key */
const CELL0_KEY = "workfrontMetadata";

/** Array items corresponding to table rows will store the Bynder metaproperties in this key */
const CELL1_KEY = "bynderMetaproperty";

/** An object for storing the HTTP call results */
const CACHE = {
	workfrontMetadata: null,
	bynderMetaproperty: null,
};

/** Function called whenever the configuration item is shown or changed */
const handleEvent = async ({ event, previousSlotState, previousWizardState }) => {
	/** Edit this for the appropriate auth name of the custom keys */
	const WORKFRONT_AUTH_SLOT = previousWizardState.values.external_workfront_AUTHNAME;

	/** The config slot for the Bynder authentication*/
	const BYNDER_AUTH_SLOT = previousWizardState.values.external_bynder_authentication;

	console.log({ event, previousSlotState, previousWizardState });
	/**
	 * Call this to get the value of a config slot
	 * @param externalId {string} e.g., "external_bynder_authentication"
	 * @returns {*}
	 */
	const slotValue = (externalId) => (event.data.externalId === externalId ? event.data.value : previousWizardState.values[externalId]);

	/**
	 * Fetches dropdown options for the Workfront Document (DOCU) and Task (TASK) object types
	 * Options are fetched by calling the service associated with WORKFRONT_AUTH_SLOT
	 */
	const fetchWorkfrontMetadata = async () => {
		// get/parse Workfront document metadata
		console.log("Fetching Workfront document metadata...");
		const documentMetadataCall = await tray.callConnector({
			connector: "http-client",
			version: "5.6",
			operation: "get_request",
			authId: WORKFRONT_AUTH_SLOT,
			input: {
				follow_redirect: false,
				follow_keep_method: false,
				reject_unauthorized: true,
				follow_authorization_header: false,
				parse_response: "true",
				status_code: {
					range: {
						from: 200,
						to: 299,
					},
				},
				case_sensitive_headers: false,
				url: `https://${BASE_WF_DOMAIN}.workfront.com/attask/api/v16.0/docu/metadata`,
				headers: [
					{
						key: "{$.auth.token_type}",
						value: "{$.auth.access_token}",
					},
				],
				queries: [],
			},
		});
		const docJSON = JSON.parse(documentMetadataCall).response.body;

		// pull the custom metadata from the JSON and parse out the info
		const parsedMetadata = [{ text: "--Document Custom--", value: "DO_NOT_USE_DC" }];

		// some account have no custom metadata, so implementing an escape if statement
		if (docJSON.data.custom !== undefined) {
			parsedMetadata.push(
				...Object.entries(docJSON.data.custom).map((x) => {
					return {
						text: x[0], // custom fields don't have a label
						value: JSON.stringify({
							name: x[0],
							objectType: "document_custom",
							propertyType: x[1].type,
						}),
					};
				})
			);
		}

		// pull the fields metadata from the JSON and parse out the info
		parsedMetadata.push({ text: "--Document Standard--", value: "DO_NOT_USE_DS" });
		parsedMetadata.push(
			...Object.entries(docJSON.data.fields)
				.filter(
					(n) =>
						n[0] === "checkOutTimestamp" ||
						n[0] === "checkedOutByID" ||
						n[0] === "currentVersionID" ||
						n[0] === "description" ||
						n[0] === "docObjCode" ||
						n[0] === "downloadURL" ||
						n[0] === "lastModDate" ||
						n[0] === "lastSyncDate" ||
						n[0] === "lastUpdateDate" ||
						n[0] === "lastUpdatedByID" ||
						n[0] === "name" ||
						n[0] === "referenceNumber" ||
						n[0] === "taskID"
				)
				.map((x) => {
					return {
						text: x[1].label,
						value: JSON.stringify({
							name: x[0],
							objectType: "document_standard",
							propertyType: x[1].fieldType,
						}),
					};
				})
		);
		console.log(parsedMetadata);

		// get/parse Workfront task metadata
		console.log("Fetching Workfront task metadata...");
		const taskMetadataCall = await tray.callConnector({
			connector: "http-client",
			version: "5.6",
			operation: "get_request",
			authId: WORKFRONT_AUTH_SLOT,
			input: {
				follow_redirect: false,
				follow_keep_method: false,
				reject_unauthorized: true,
				follow_authorization_header: false,
				parse_response: "true",
				status_code: {
					range: {
						from: 200,
						to: 299,
					},
				},
				case_sensitive_headers: false,
				url: `https://${BASE_WF_DOMAIN}.workfront.com/attask/api/v16.0/docu/metadata`,
				headers: [
					{
						key: "{$.auth.token_type}",
						value: "{$.auth.access_token}",
					},
				],
				queries: [],
			},
		});
		const taskJSON = JSON.parse(taskMetadataCall).response.body;
		console.log(taskJSON);

		// pull the custom metadata from the JSON and parse out the info
		parsedMetadata.push({ text: "--Task Custom--", value: "DO_NOT_USE_TC" });

		// some accounts do not have custom metadata, so escaping this with an if statement
		if (taskJSON.data.custom !== undefined) {
			parsedMetadata.push(
				...Object.entries(taskJSON.data.custom).map((x) => {
					return {
						text: x[0], // custom fields don't have a label
						value: JSON.stringify({
							name: x[0],
							objectType: "task_custom",
							propertyType: x[1].type,
						}),
					};
				})
			);
		}

		// pull the fields metadata from the JSON and parse out the info
		parsedMetadata.push({ text: "--Task Standard--", value: "DO_NOT_USE_TS" });
		parsedMetadata.push(
			...Object.entries(taskJSON.data.fields)
				.filter((n) => n[0] === "ID" || n[0] === "URL" || n[0] === "status" || n[0] === "version")
				.map((x) => {
					return {
						text: x[1].label,
						value: JSON.stringify({
							name: x[0],
							objectType: "task_standard",
							propertyType: x[1].fieldType,
						}),
					};
				})
		);

		//Set the CACHE
		CACHE.workfrontMetadata = parsedMetadata;
		return parsedMetadata;
	};

	/**
	 * Fetches dropdown options for the Bynder metaproperties.
	 * Options are fetched by calling the service associated with BYNDER_AUTH_SLOT
	 */
	const fetchBynderMetaproperties = async () => {
		console.log("Fetching metaproperties for Bynder...");
		const getBynderMetaproperties = await tray.callConnector({
			connector: "bynder",
			version: "2.0",
			operation: "list_metaproperties",
			authId: BYNDER_AUTH_SLOT,
			input: {
				include_options: true,
				include_count: true,
				ids: [],
			},
		});

		const metaprops = JSON.parse(getBynderMetaproperties);

		//Parse out the label and internalID of the Bynder Metaproperty
		const properties = Object.entries(metaprops)
			.filter((t) => t[1].type !== "linked_assets")
			.filter((n) => n[0] !== "Workfront_Document_ID" && n[0] !== "Workfront_Version_ID" && n[0] !== "Workfront_Document_URL" && n[0] !== "Workfront_Task_URL")
			.map((x) => {
				// x[0] is the same value as x[1].name
				return {
					text: x[1].label,
					value: JSON.stringify({
						id: x[1].id,
						name: x[1].name,
						type: Boolean(x[1].isMultiselect) ? "multiselect" : x[1].type,
						editable: Boolean(x[1].isEditable),
					}),
				};
			});

		//Set the CACHE
		CACHE.bynderMetaproperty = properties;
		return properties;
	};

	/** Gets options for the enum */
	const getWorkfrontMetadataOptions = async () => {
		const myOptions = CACHE.workfrontMetadata || (await fetchWorkfrontMetadata());

		return myOptions;
	};

	/** Gets options for the enum */
	const getBynderMetapropertyOptions = async () => {
		const myOptions = CACHE.bynderMetaproperty || (await fetchBynderMetaproperties());

		return myOptions;
	};

	/** Populate/repopulate the rows */
	const tableValues = async () => {
		console.log("Started tableValues...");
		const previousValues = slotValue(TABLE_VALUES_SLOT);
		console.log({ previousValues });

		if (!previousValues || previousValues.length == 0) {
			console.log("End tableValues; return undefined...");
			return undefined;
		} else {
			console.log("End tableValues; return previousValues...");
			return previousValues;
		}
	};

	/** Set the schema */
	const getTableJsonSchema = async () => {
		console.log("Started getTableJsonSchema...");

		const column0Options = await getWorkfrontMetadataOptions();
		const column1Options = await getBynderMetapropertyOptions();
		const myTable = {};
		myTable[CELL0_KEY] = "Workfront Metadata";
		myTable[CELL1_KEY] = "Bynder Metaproperties";

		const myItems = {
			type: "object",
			additionalProperties: false,
			properties: {
				workfrontMetadata: { type: "string", enum: column0Options },
				bynderMetaproperty: { type: "string", enum: column1Options },
			},
		};
		console.log({ myItems });

		return {
			title: "Configuration",
			table: myTable,
			items: myItems,
			additionalItems: true,
		};
	};

	/** Validates the mapper data */
	const validateConfigData = () => {
		console.log("Started validateConfigData...");
		// We should have an array with at least one item in it
		const newValues = event.data.value;
		console.log({ newValues });

		// newValues isn't set, good to exit early
		if (!newValues || newValues.length == 0) {
			console.log("End validateConfigData; newValues not set...");
			return undefined;
		}

		// check that the Workfront side doesn't have any of the section/spacer values selected
		const workfrontSpacerSelected = newValues.filter((row) => row[CELL0_KEY] && row[CELL0_KEY].includes("DO_NOT_USE_"));
		if (workfrontSpacerSelected.length > 0) {
			console.log("workfront DO_NOT_USE_ found");
			return {
				valid: false,
				message: "Please select a valid Workfront field instead of one of the section spacers.",
			};
		}

		// check that each row has selections made
		const incompleteConfigValues = newValues.filter((row) => !row[CELL0_KEY] || !row[CELL1_KEY]);
		let countRemoved = 0;
		newValues.forEach(function (r) {
			const workfrontFound = CACHE.workfrontMetadata.filter((w) => r[CELL0_KEY] === w.value);
			if (workfrontFound.length === 0) countRemoved++;

			const bynderFound = CACHE.bynderMetaproperty.filter((b) => r[CELL1_KEY] === b.value);
			if (bynderFound.length === 0) countRemoved++;
		});

		if (incompleteConfigValues.length > 0 || countRemoved > 0) {
			console.log("Row(s) missing a field, or it was deleted");
			return {
				valid: false,
				message: "Please choose a Workfront and Bynder field for each row; or remove the row.",
			};
		}

		// find duplicate Bynder properties
		const bynderSelections = newValues.filter((row) => row[CELL1_KEY]).map((x) => x[CELL1_KEY]);
		const bynderUniques = new Set(bynderSelections);
		if (bynderUniques.size < bynderSelections.length) {
			console.log("bynder duplicates found");
			return {
				valid: false,
				message: "Please do not use the same Bynder metaproperty more than once.",
			};
		}

		// Looks good!
		console.log("End validateConfigData; return undefined...");
		return undefined;
	};

	return {
		...previousSlotState,
		value: await tableValues(),
		status: "VISIBLE",
		jsonSchema: await getTableJsonSchema(),
		validation: validateConfigData(),
	};
};

tray.on("CONFIG_SLOT_MOUNT", handleEvent);
tray.on("CONFIG_SLOT_VALUE_CHANGED", handleEvent);

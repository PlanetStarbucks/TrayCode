/**
 * This is a special version of the WF connector for organizations using
 * SAML applications.  Because the Tray node isnt' compatible, all the endpoints
 * need to work with HTTP client nodes.
 *
 * Attempt to set the default Workfront task status to CPL for complete.
 * If the status is not there then select the first option for it to be set.
 *
 * @author Lynton devs
 * @modifier PlanetStarbucks
 */

/** The config slot where we'll put the selected Workfront task status */
const TASK_STATUS_SLOT = tray.env.slotExternalId;

/** The config slot for the Workfront authentication*/
const WORKFRONT_AUTH_SLOT = tray.env.slotWorkfrontAuthentication;

/** The config slot for the Bynder authentication*/
const BYNDER_AUTH_SLOT = tray.env.slotBynderAuthentication;

/** The base domain for the custom Workfront Account (everything before workfront.com) */
const BASE_WF_DOMAIN = "something.my";

/** An object for storing the HTTP call results */
const CACHE = {
	workfrontTaskStatus: null,
};

/** Function called whenever the configuration item is shown or changed */
const handleEvent = async ({ event, previousSlotState, previousWizardState }) => {
	// Check required to avoid triggering logic more than necessary
	if (event.data.externalId === "external_workfront_task_status") {
		console.log({ event, previousSlotState, previousWizardState });
		/**
		 * Call this to get the value of a config slot
		 * @param externalId {string} e.g., "external_workfront_authentication"
		 * @returns {*}
		 */
		const slotValue = (externalId) => (event.data.externalId === externalId ? event.data.value : previousWizardState.values[externalId]);

		/**
		 * Fetches options form the Workfront Custom Enum (CSTEM) for task status field
		 * Options are fetched by calling the service associated with WORKFRONT_AUTH_SLOT
		 */
		const fetchWorkfrontTaskStatus = async () => {
			console.log("Fetching Workfront task status metadata...");
			const taskStatuses = await tray.callConnector({
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
					url: `https://${BASE_WF_DOMAIN}.workfront.com/attask/api/v16.0/cstem/taskGroupStatuses`,
					headers: [
						{
							key: "{$.auth.token_type}",
							value: "{$.auth.access_token}",
						},
					],
					queries: [],
				},
			});
			const options = JSON.parse(taskStatuses).response.body.data;

			// pull the labels & values from the list of options
			const parsedStatus = [
				{
					text: "--Complete not found, please select another status--",
					value: "DO_NOT_USE",
				},
			];
			parsedStatus.push(
				...options.map((x) => {
					return {
						text: x.label,
						value: x.value,
					};
				})
			);

			//Set the CACHE
			CACHE.workfrontTaskStatus = parsedStatus;
			return parsedStatus;
		};

		/** Gets options for the enum */
		const getWorkfrontTaskStatusOptions = async () => {
			const myOptions = CACHE.workfrontTaskStatus || (await fetchWorkfrontTaskStatus());

			return myOptions;
		};

		/** Populate/repopulate the selected value */
		const listValues = async () => {
			console.log("Started listValues...");
			const previousValue = slotValue(TASK_STATUS_SLOT); // config default is CPL so shouldn't be NULL or blank
			console.log({ previousValue });

			const statusOptions = await getWorkfrontTaskStatusOptions();
			console.log({ statusOptions });

			if (previousValue === "CPL" && statusOptions.filter((s) => s.value === "CPL").length == 0) {
				return "DO_NOT_USE";
			} else {
				return previousValue;
			}
		};

		/** Set the schema */
		const getListJsonSchema = async () => {
			console.log("Started getListJsonSchema...");

			return {
				type: "string",
				enum: await getWorkfrontTaskStatusOptions(),
			};
		};

		/** Validate selection */
		const validateConfigData = () => {
			const newValue = event.data.value;
			console.log({ newValue });

			if (newValue === "DO_NOT_USE") {
				console.log("status DO_NOT_USE found");
				return {
					valid: false,
					message: "Please select a valid Workfront status instead of the first option.",
				};
			}

			// Looks good!
			return undefined;
		};

		return {
			...previousSlotState,
			value: await listValues(),
			status: "VISIBLE",
			jsonSchema: await getListJsonSchema(),
			validation: validateConfigData(),
		};
	} else {
		console.log({
			elseReturn: "script for external_workfront_task_status...",
			event,
			previousSlotState,
			previousWizardState,
		});
		return undefined;
	}
};

tray.on("CONFIG_SLOT_MOUNT", handleEvent);
tray.on("CONFIG_SLOT_VALUE_CHANGED", handleEvent);

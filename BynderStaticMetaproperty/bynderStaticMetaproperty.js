tray.on("CONFIG_SLOT_MOUNT", async ({ event, previousWizardState }) => {
  if (event.data.externalId !== tray.env.slotExternalId) return;

  // this call is dependent on the object selected on the previous screen of the wizard
  const acmeObject = "deals";

  // use the Http Client connector to call the Acme API
  const response = await tray.callConnector({
    connector: "bynder",
    version: "2.0",
    operation: "list_metaproperties",
    authId: previousWizardState.values.external_bynder_authentication_1,
    input: {
      include_options: false,
      include_count: false,
      ids: [],
    },
  });

  // parse response into a proper object
  const metapropArray = JSON.parse(response);
  // convert that object to only what's needed.  Map the label and id only.
  const properties = Object.entries(metapropArray).map((x) => {
    return {
      name: metapropArray[x[0]].label,
      value: metapropArray[x[0]].id,
    };
  });
  console.log(properties);

  return {
    ...event.data,
    // hide the slot from view in the wizard
    status: "HIDDEN",
    // output the list of fields to pick from in the data mapping component
    value: properties.map(({ name, value }) => ({ text: name, value: value })),
  };
});

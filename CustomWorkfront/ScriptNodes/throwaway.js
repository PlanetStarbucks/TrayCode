const _ = require('lodash');

const input = {
  workfront_documents: [
    {
      ID: "64358d4a001bea8013d94c57301413d8",
      name: "Client edits_Construction_Checklist_179326_B",
      objCode: "DOCU",
      categoryID: null,
      checkOutTimestamp: null,
      checkedOutByID: null,
      currentVersionID: "64358d4a001bea817199bbbda69a4393",
      customerID: "65a89d8351126fe2e0538365290a220a",
      description: null,
      docObjCode: "TASK",
      documentRequestID: null,
      extRefID: null,
      hasNotes: true,
      isPrivate: false,
      isPublic: false,
      iterationID: null,
      lastModDate: "2023-04-11T10:39:38:644-0600",
      lastNoteID: "64358d69001bf3e09f63ad04337d1240",
      lastSyncDate: null,
      lastUpdateDate: "2023-04-11T10:40:09:817-0600",
      lastUpdatedByID: "5abc29d60000eb9da789aa9ee776a7be",
      lastVersionNum: "1",
      objID: "64357ff8001853395afb34d7107a05ec",
      opTaskID: null,
      ownerID: "5abc29d60000eb9da789aa9ee776a7be",
      portfolioID: null,
      programID: null,
      projectID: "5e56d1cf03e5ae4aec7ac26b9de70b0c",
      publicToken: null,
      referenceNumber: 695800,
      releaseVersionID: null,
      securityRootID: "5e56d1cf03e5ae4aec7ac26b9de70b0c",
      securityRootObjCode: "PROJ",
      taskID: "64357ff8001853395afb34d7107a05ec",
      templateID: null,
      templateTaskID: null,
      topDocObjCode: "PROJ",
      topObjID: "5e56d1cf03e5ae4aec7ac26b9de70b0c",
      userID: null,
      downloadURL:
        "/internal/document/download?ID=64358d4a001bea8013d94c57301413d8",
      parameterValues: {},
      versions: [
        {
          ID: "64358d4a001bea817199bbbda69a4393",
          objCode: "DOCV",
          ext: "pdf",
          fileName:
            "1_64358d4a001bea8013d94c57301413d8_Client edits_Construction_Checklist_179326_B",
          externalIntegrationType: "ATTASK",
          version: "1",
          fileType: "file",
        },
      ],
      task: {
        ID: "64357ff8001853395afb34d7107a05ec",
        name: "Revisions",
        objCode: "TASK",
        URL: "",
        actualCompletionDate: "2023-04-11T11:10:56:825-0600",
        actualCost: 0,
        actualDuration: 0,
        actualDurationMinutes: 0,
        actualExpenseCost: 0,
        actualLaborCost: 0,
        actualRevenue: 0,
        actualStartDate: "2023-04-11T11:10:56:825-0600",
        actualWork: 0,
        actualWorkRequired: 0,
        approvalCompletionDate: null,
        approvalEstStartDate: null,
        approvalPlannedStartDate: null,
        approvalProcessID: null,
        approvalProjectedStartDate: null,
        approvalStartDate: null,
        assignedToID: "6262c71500643b450692a9afe06c25c3",
        auditTypes: [],
        backlogOrder: 0,
        bcwp: 0,
        bcws: 0,
        billingAmount: 0,
        billingRecordID: null,
        canStart: true,
        categoryID: null,
        color: null,
        commitDate: null,
        completionPendingDate: null,
        condition: null,
        constraintDate: "2023-04-11T09:00:00:000-0600",
        convertedOpTaskEntryDate: null,
        convertedOpTaskName: null,
        convertedOpTaskOriginatorID: null,
        costAmount: 0,
        costType: "RHC",
        cpi: 1,
        csi: 1,
        currentApprovalStepID: null,
        customerID: "65a89d8351126fe2e0538365290a220a",
        description: "",
        duration: 1,
        durationMinutes: 480,
        durationType: "A",
        durationUnit: "D",
        eac: 0,
        enteredByID: "5abc29d60000eb9da789aa9ee776a7be",
        entryDate: "2023-04-11T09:42:48:053-0600",
        estCompletionDate: "2023-04-11T11:10:56:825-0600",
        estStartDate: "2023-04-11T11:10:56:825-0600",
        extRefID: null,
        groupID: "65a89d8352536fe2e0538365290a220a",
        handoffDate: "2020-02-26T09:00:00:000-0600",
        hasCompletionConstraint: false,
        hasDocuments: true,
        hasExpenses: false,
        hasMessages: true,
        hasNotes: true,
        hasResolvables: false,
        hasStartConstraint: true,
        hasTimedNotifications: false,
        hoursPerPoint: 0,
        indent: 0,
        isAgile: false,
        isCritical: true,
        isDurationLocked: false,
        isLevelingExcluded: false,
        isReady: false,
        isStatusComplete: true,
        isWorkRequiredLocked: false,
        iterationID: null,
        kanbanBoardID: null,
        kanbanFlag: null,
        lastConditionNoteID: null,
        lastNoteID: "6435948e002652a6d2f5ecd912246651",
        lastUpdateDate: "2023-04-11T11:10:56:841-0600",
        lastUpdatedByID: "6262c71500643b450692a9afe06c25c3",
        levelingStartDelay: 0,
        levelingStartDelayMinutes: 0,
        milestoneID: null,
        numberOfChildren: 0,
        numberOpenOpTasks: 0,
        originalDuration: 0,
        originalWorkRequired: 0,
        parentID: null,
        parentLag: 0,
        parentLagType: "d",
        pendingCalculation: null,
        pendingUpdateMethods: [],
        percentComplete: 100,
        personal: false,
        plannedCompletionDate: "2023-04-11T17:00:00:000-0600",
        plannedCost: 0,
        plannedDuration: 1,
        plannedDurationMinutes: 480,
        plannedExpenseCost: 0,
        plannedLaborCost: 0,
        plannedRevenue: 0,
        plannedStartDate: "2023-04-11T09:00:00:000-0600",
        previousStatus: "NEW",
        priority: 2,
        progressStatus: "ON",
        projectID: "5e56d1cf03e5ae4aec7ac26b9de70b0c",
        projectedCompletionDate: "2023-04-11T11:10:56:825-0600",
        projectedDurationMinutes: 0,
        projectedStartDate: "2023-04-11T11:10:56:825-0600",
        recurrenceNumber: null,
        recurrenceRuleID: null,
        referenceNumber: 695600,
        rejectionIssueID: null,
        remainingDurationMinutes: 0,
        resourceScope: "NONE",
        revenueType: "RHR",
        roleID: null,
        securityRootID: "5e56d1cf03e5ae4aec7ac26b9de70b0c",
        securityRootObjCode: "PROJ",
        slackDate: "2023-04-11",
        spi: 1,
        status: "CPL",
        statusUpdate: null,
        storyPoints: 0,
        submittedByID: null,
        taskConstraint: "MSO",
        taskNumber: 15,
        teamID: null,
        templateTaskID: null,
        trackingMode: "USER",
        version: 2,
        wbs: "15",
        work: 0,
        workEffort: null,
        workRequired: 0,
        parameterValues: {},
      },
    },
    {
      ID: "6418b8d8000d143379e6108c3e88b4df",
      name: "SK_govt logo",
      objCode: "DOCU",
      categoryID: null,
      checkOutTimestamp: null,
      checkedOutByID: null,
      currentVersionID: "6418b8d8000d1434ae78cb1f447de7ff",
      customerID: "65a89d8351126fe2e0538365290a220a",
      description: null,
      docObjCode: "TASK",
      documentRequestID: null,
      extRefID: null,
      hasNotes: false,
      isPrivate: false,
      isPublic: false,
      iterationID: null,
      lastModDate: "2022-02-28T15:29:21:630-0600",
      lastNoteID: null,
      lastSyncDate: null,
      lastUpdateDate: "2023-03-20T13:49:43:773-0600",
      lastUpdatedByID: "61dcae140038a5dfb664403c37dafd82",
      lastVersionNum: "1",
      objID: "6418b8d7000d14316e1b5186ce98109e",
      opTaskID: null,
      ownerID: "5abc29850000d68e385a54698340763e",
      portfolioID: null,
      programID: null,
      projectID: "6418b8cb000d119244c49fc8bcc3d80a",
      publicToken: null,
      referenceNumber: 682108,
      releaseVersionID: null,
      securityRootID: "6418b8cb000d119244c49fc8bcc3d80a",
      securityRootObjCode: "PROJ",
      taskID: "6418b8d7000d14316e1b5186ce98109e",
      templateID: null,
      templateTaskID: null,
      topDocObjCode: "PROJ",
      topObjID: "6418b8cb000d119244c49fc8bcc3d80a",
      userID: null,
      downloadURL:
        "/internal/document/download?ID=6418b8d8000d143379e6108c3e88b4df",
      parameterValues: {},
      versions: [
        {
          ID: "6418b8d8000d1434ae78cb1f447de7ff",
          objCode: "DOCV",
          ext: "png",
          fileName: "1_6418b8d8000d143379e6108c3e88b4df_SK_govt logo",
          externalIntegrationType: "ATTASK",
          version: "1",
          fileType: "file",
        },
      ],
      task: {
        ID: "6418b8d7000d14316e1b5186ce98109e",
        name: "Layout and upload pdf",
        objCode: "TASK",
        URL: null,
        actualCompletionDate: "2023-04-19T16:04:58:889-0600",
        actualCost: 0,
        actualDuration: 0,
        actualDurationMinutes: 0,
        actualExpenseCost: 0,
        actualLaborCost: 0,
        actualRevenue: 0,
        actualStartDate: "2023-04-19T16:04:58:889-0600",
        actualWork: 0,
        actualWorkRequired: 0,
        approvalCompletionDate: null,
        approvalEstStartDate: null,
        approvalPlannedStartDate: null,
        approvalProcessID: null,
        approvalProjectedStartDate: null,
        approvalStartDate: null,
        assignedToID: "5abc2c730001b5447bcd7b0690b4bfce",
        auditTypes: [],
        backlogOrder: 0,
        bcwp: 0,
        bcws: 0,
        billingAmount: 0,
        billingRecordID: null,
        canStart: true,
        categoryID: null,
        color: null,
        commitDate: "2023-04-21T17:00:00:000-0600",
        completionPendingDate: null,
        condition: 0,
        constraintDate: null,
        convertedOpTaskEntryDate: null,
        convertedOpTaskName: null,
        convertedOpTaskOriginatorID: null,
        costAmount: 0,
        costType: "NOC",
        cpi: 1,
        csi: 1,
        currentApprovalStepID: null,
        customerID: "65a89d8351126fe2e0538365290a220a",
        description: null,
        duration: 3,
        durationMinutes: 1440,
        durationType: "A",
        durationUnit: "D",
        eac: 0,
        enteredByID: "61dcae140038a5dfb664403c37dafd82",
        entryDate: "2023-03-20T13:49:43:995-0600",
        estCompletionDate: "2023-04-19T16:04:58:889-0600",
        estStartDate: "2023-04-19T16:04:58:889-0600",
        extRefID: null,
        groupID: "65a89d8352536fe2e0538365290a220a",
        handoffDate: "2023-04-18T08:15:53:287-0600",
        hasCompletionConstraint: false,
        hasDocuments: true,
        hasExpenses: false,
        hasMessages: false,
        hasNotes: false,
        hasResolvables: false,
        hasStartConstraint: false,
        hasTimedNotifications: false,
        hoursPerPoint: 0,
        indent: 0,
        isAgile: false,
        isCritical: true,
        isDurationLocked: true,
        isLevelingExcluded: false,
        isReady: false,
        isStatusComplete: true,
        isWorkRequiredLocked: false,
        iterationID: null,
        kanbanBoardID: null,
        kanbanFlag: null,
        lastConditionNoteID: null,
        lastNoteID: null,
        lastUpdateDate: "2023-04-20T11:38:05:886-0600",
        lastUpdatedByID: "5abc29d60000eb9da789aa9ee776a7be",
        levelingStartDelay: 0,
        levelingStartDelayMinutes: 0,
        milestoneID: null,
        numberOfChildren: 0,
        numberOpenOpTasks: 0,
        originalDuration: 0,
        originalWorkRequired: 0,
        parentID: null,
        parentLag: 0,
        parentLagType: "d",
        pendingCalculation: null,
        pendingUpdateMethods: [],
        percentComplete: 100,
        personal: false,
        plannedCompletionDate: "2023-04-21T17:00:00:000-0600",
        plannedCost: 0,
        plannedDuration: 3,
        plannedDurationMinutes: 1440,
        plannedExpenseCost: 0,
        plannedLaborCost: 0,
        plannedRevenue: 0,
        plannedStartDate: "2023-04-19T09:00:00:000-0600",
        previousStatus: "NEW",
        priority: 2,
        progressStatus: "ON",
        projectID: "6418b8cb000d119244c49fc8bcc3d80a",
        projectedCompletionDate: "2023-04-19T16:04:58:889-0600",
        projectedDurationMinutes: 0,
        projectedStartDate: "2023-04-19T16:04:58:889-0600",
        recurrenceNumber: null,
        recurrenceRuleID: null,
        referenceNumber: 682107,
        rejectionIssueID: null,
        remainingDurationMinutes: 0,
        resourceScope: "NONE",
        revenueType: "NOB",
        roleID: "65a89d8355356fe2e0538365290a220a",
        securityRootID: "6418b8cb000d119244c49fc8bcc3d80a",
        securityRootObjCode: "PROJ",
        slackDate: "2023-04-19",
        spi: 1,
        status: "CPL",
        statusUpdate: null,
        storyPoints: 0,
        submittedByID: null,
        taskConstraint: "ASAP",
        taskNumber: 8,
        teamID: null,
        templateTaskID: "5ac2fd28009e384bd12499371a8e988b",
        trackingMode: "USER",
        version: 0,
        wbs: "8",
        work: 0,
        workEffort: null,
        workRequired: 0,
        parameterValues: {},
      },
    },
  ],
  old_last_update: "2023-01-01T13:24:04.889Z",
  wf_sub_domain: "fccfac.my",
  config: {
    workfront_paging_limit: 100,
    initial_last_update: "2023-01-01T13:24:04.889Z",
    bynder_brand_id: "B4831B25-7103-4F9C-AB9980A17D98F040",
    workfront_task_status: "CPL",
    bynder_meta_id_workfront_doc_url: "74F390E6-918E-4ACE-8C0CA00005540A97",
    bynder_meta_id_workfront_task_url: "37709CEC-EBAD-42EF-9D5C68ACDB264389",
    bynder_meta_id_workfront_version_id: "567F67F3-A1C1-47EE-A73FEAEC37D96979",
    bynder_meta_id_workfront_doc_id: "7433D302-246D-45C8-80C58841FF0BF8D0",
    meta_mappings:
      '[{"workfrontMetadata":"{\\"name\\":\\"referenceNumber\\",\\"objectType\\":\\"document_standard\\",\\"propertyType\\":\\"int\\"}","bynderMetaproperty":"{\\"id\\":\\"57BCEF85-FDF3-46FC-B390F00CD416535F\\",\\"name\\":\\"Project_Number\\",\\"type\\":\\"multiselect\\",\\"editable\\":true}"}]',
    subDomain: "fccfac.my",
  },
};

const run = function (input, fileInput) {
  // function called to fix Workfront timestamps
  function fixWorkfontTimestamp(ts) {
    // if timestamp contains three ":" instead of two, replace the 3rd one with a "."
    if (ts && ts.match(/:/g).length == 3) {
      const index = ts.lastIndexOf(":");
      ts = `${ts.substring(0, index)}.${ts.substring(index + 1)}`;
    }

    return ts;
  }

  const config = input.config;
  let new_last_update = input.old_last_update;

  // no extra meta_mappings set, default to an empty array
  if (!config.meta_mappings) config.meta_mappings = [];

  const wf_to_bynder = [];
  // loop workfront documents
  _.forEach(input.workfront_documents, function (wf) {
    console.log(input.workfront_documents)
    // last document in the loop will be the value returned to then save to the tray storage key ..._wf_task_last_update
    new_last_update = fixWorkfontTimestamp(wf.task.lastUpdateDate);

    // get document latest version
    const latest_version = wf.versions.pop();

    // if the version is not hosted on Workfront ("ATTASK") then skip it
    if (latest_version.externalIntegrationType == "ATTASK") {
      // data will hold info used to upload Workfront documents to Bynder assets
      const data = {};
      data["workfront_doc_id"] = wf.ID;
      data["workfront_version_id"] = latest_version.ID; // could change to currentVersionID

      data["bynder_name"] = wf.name;
      data["bynder_description"] = wf.description;

      const metaproperty = [];
      // loop custom meta mappings to format Workfront metadata into a format Bynder metaproperties will accept
      _.forEach(config.meta_mappings, function (m) {
        const w = JSON.parse(m.workfrontMetadata);
        const b = JSON.parse(m.bynderMetaproperty);

        let value = "";
        switch (w.objectType) {
          case "document_custom":
            if (wf.parameterValues.hasOwnProperty(`DE:${w.name}`)) {
              value = wf.parameterValues[`DE:${w.name}`];
            }
            break;
          case "document_standard":
            value = wf[w.name];
            break;
          case "task_custom":
            if (wf.task.parameterValues.hasOwnProperty(`DE:${w.name}`)) {
              value = wf.task.parameterValues[`DE:${w.name}`];
            }
            break;
          case "task_standard":
            value = wf.task[w.name];
            break;
        }

        // dateTime values need their format fixed so Bynder will accept them
        if (w.propertyType == "dateTime") value = fixWorkfontTimestamp(value);

        // starting with a switch to support if we need to parse other types differently
        switch (b.type) {
          case "multiselect":
            // isArray check used to make sure the value is an array from workfront and if not set the value into an array for bynder
            value = value ? (Array.isArray(value) ? value : [value]) : [];
            break;
          default:
            // isArray check used to convert workfront array value into a comma-delimited string for bynder
            value = value
              ? [Array.isArray(value) ? value.join(", ") : value]
              : [];
            break;
        }

        // skip mapping if the value array doesn't have anything
        if (value.length > 0) metaproperty.push({ id: b.id, options: value });
      });

      // following 4 metaproperties are required by the integration so if there are no other custom mappings these will always be set
      // underscores added to the ID so it will add to the Bynder metaproperty options and can be used in a filter later
      metaproperty.push({
        id: config.bynder_meta_id_workfront_doc_id,
        options: [`_${wf.ID}_`],
      });
      // sending version id to a text field still since it is just a string match in the workflow later
      metaproperty.push({
        id: config.bynder_meta_id_workfront_version_id,
        options: [`_${latest_version.ID}_`],
      });

      const base_url = `https://${input.wf_sub_domain}.workfront.com`;
      // {workfront base url}/document/{workfront doc id}/{workfront version id}/details
      metaproperty.push({
        id: config.bynder_meta_id_workfront_doc_url,
        options: [`${base_url}/document/${wf.ID}/${latest_version.ID}/details`],
      });
      // {workfront base url}/task/{workfront task id}/overview
      metaproperty.push({
        id: config.bynder_meta_id_workfront_task_url,
        options: [`${base_url}/task/${wf.task.ID}/overview`],
      });

      data["bynder_metaproperty"] = metaproperty;

      wf_to_bynder.push(data);
    }
  });

  return { wf_to_bynder, new_last_update };
};

console.log(run(input));

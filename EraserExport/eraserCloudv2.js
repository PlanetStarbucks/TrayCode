// Load libraries to handle files and data with lodash.
const fs = require("fs");
const _ = require("lodash");
const { type } = require("os");

const icons = JSON.parse(fs.readFileSync("/Users/bill.keiffer/Desktop/Git/TrayCode/EraserExport/IconLookup/trayConnectors.json"));
const colors = JSON.parse(fs.readFileSync(`/Users/bill.keiffer/Desktop/Git/TrayCode/EraserExport/IconLookup/colorArray.json`));
const testFile = JSON.parse(fs.readFileSync("EraserExport/IconLookup/Workflows/workflow_Erasar-Export-Test.json", "utf8"));
const result = {
	groups: [],
};

const CACHE = {
	labels: [],
};

// Constructor function to hold a group of nodes
function NodeGroup(id, name, start, end, steps, parent) {
	this.id = name;
	this.label = CACHE.labels.includes(name) ? `${name} ${CACHE.labels.length}` : name;
	this.start = start;
	this.end = end;
	this.steps = steps;
	this.parent = parent;
	CACHE.labels.push(name);
}

// Function to lookup the step data needed from the steps part of the input object
const lookupStep = (stepID) => {
	const step = testFile.workflows[0].steps[stepID];
	return {
		title: step.title,
		type: step.connector.name,
		// add more properties as needed
	};
};

const parseSteps = (group) => {
	// get the step structure from the workflow and send it to the parseStep function
	const steps = group.map((step) => {
		if (step.type === "normal") {
			return {
				id: step.name,
				type: step.type,
				stepData: lookupStep(step.name),
			};
		} else {
			return {
				id: step.name,
				type: "subGroup",
				stepData: lookupStep(step.name),
			};
		}
	});

	return steps;
};

const parseGroup = (id, group, parent) => {
	// the first group will be the inital group that holds all the sub groups, push that to the result object
	// for readability, using a let with the initial structure to pass into the NodeGroup constructor
	let start = firstStep(group);
	let end = lastStep(group);
	let steps = parseSteps(group);

	// push the group to the result object
	// using the NodeGroup constructor to create a new group object
	result.groups.push(new NodeGroup(id, name, start, end, steps, parent));

	const subGroups = group.filter((step) => step.type !== "normal");
	for (let i = 0; i < subGroups.length; i++) {
		switch (subGroups[i].type) {
			case "loop":
				parseGroup(lookupStep(subGroups[i].name).title, subGroups[i].content._loop, id);
				break;
			case "branch":
				Object.keys(subGroups[i].content).forEach((key) => {
					const branchName = `${lookupStep(subGroups[i].name).title} - ${key}`;
					parseGroup(branchName, subGroups[i].content[key], id);
				});
				break;
			default:
				break;
		}
	}
};

const lastStep = (steps) => {
	// check if the last step is a normal step or a sub group
	// if it is a normal step, return the last step
	// if it is a sub group, return a new object with the type of sub group
	if (steps.length === 0) {
		return {
			type: "emptySubGroup",
		};
	} else if (_.last(steps).type === "normal") {
		return steps[steps.length - 1];
	} else {
		return {
			type: "subGroup",
		};
	}
};

const firstStep = (steps) => {
	// check if the first step is a normal step or a sub group
	// if it is a normal step, return the first step
	// if it is a sub group, return a new object with the type of sub group
	if (steps.length === 0) {
		return {
			type: "emptySubGroup",
		};
	} else if (_.first(steps).type === "normal") {
		return steps[0];
	} else {
		return {
			type: "subGroup",
		};
	}
};

const getIcon = function (str) {
	let res = `${icons.find((s) => s.connector === str).icon}`;
	return res;
};

const getColor = function (obj, key) {
	const icon = getIcon(importJSON.steps[obj.name].connector.name);
	switch (importJSON.steps[obj.name].connector.name) {
		case "boolean-condition":
			return `[icon: ${icon}, color: ${key === "true" ? "green" : "red"}]`;
		case "loop":
			colorCount++;
			return `[icon: ${icon}, color: ${colors[colorCount]}]`;
		case "branch":
			colorCount++;
			return `[icon: ${icon}, color: ${colors[colorCount]}]`;
	}
};

// function to parse a workflow structure and return the stringified structure for eraser.io
const parseWorkflow = (workflow) => {
	// the first group will be the inital group that holds all the sub groups, push that to the result object
	// for readability, using a let with the initial structure to pass into the NodeGroup constructor
	result.groups.push(parseGroup("Initial Group", workflow.workflows[0].steps_structure, null));

	console.log(JSON.stringify(result, 0, 2));
};

// function to parse a project and parse the workflows within it
// and return the stringified structure for eraser.io
const parseProject = (project) => {};

// function to test the testFile
const init = function () {
	parseWorkflow(testFile);
};

init();

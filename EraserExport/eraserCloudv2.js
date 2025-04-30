// Load libraries to handle files and data with lodash.
const fs = require("fs");
const _ = require("lodash");
const { type } = require("os");

const testFile = JSON.parse(fs.readFileSync("EraserExport/IconLookup/Workflows/workflow_Erasar-Export-Test.json", "utf8"));
const result = {
	workflows: [],
};

// Constructor function to hold a group of nodes
function NodeGroup(name, start, end, steps) {
	this.id = name;
	this.start = start;
	this.end = end;
	this.steps = steps;
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

// function to parse a workflow structure and return the stringified structure for eraser.io
const parseWorkflow = (workflow) => {
	// get the step structure from the workflow and send it to the parseStep function
	const steps = workflow.workflows[0].steps_structure.map((step) => {
		if (step.type === "normal") {
			return {
				id: step.name,
				type: step.type,
				stepData: lookupStep(step.name),
			};
		} else {
			return {
				subGroup: "placeholder",
			};
		}
	});

	result.workflows.push(new NodeGroup("Initial Group", workflow.workflows[0].steps_structure[0], workflow.workflows[0].steps_structure[workflow.workflows[0].steps_structure.length - 1], steps));

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

import fs from "fs";
import _ from "lodash";
import utils from "./utils.mjs";
const { lookupStep, parseSteps, parentStep, lastStep, firstStep, getIcon, getColor } = utils;

const testFile = JSON.parse(fs.readFileSync("EraserExport/IconLookup/Workflows/workflow_[Bynder-Dropbox]-Recursive-Folder-Crawler.json", "utf8"));
const result = {
	groups: [],
};

let CACHE = {
	labels: [],
	lastParent: {},
};

// Constructor function to hold a group of nodes
function NodeGroup(id, name, start, end, steps, parent) {
	this.id = id;
	this.label = CACHE.labels.includes(name) ? `${name} ${CACHE.labels.length}` : name;
	this.start = start;
	this.end = end;
	this.steps = steps;
	this.parent = parent;
	CACHE.labels.push(name);
}

const parseGroup = (id, name, group, parent) => {
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
		const thisStep = lookupStep(subGroups[i].name);
		const prior = lookupStep(parentStep(subGroups[i].name).name);
		switch (subGroups[i].type) {
			case "loop":
				parseGroup(thisStep.id, thisStep.title, subGroups[i].content._loop, prior);
				break;
			case "branch":
				Object.keys(subGroups[i].content).forEach((key) => {
					const branchName = `${thisStep.title} - ${key}`;
					parseGroup(thisStep.id, branchName, subGroups[i].content[key], prior);
				});
				break;
			default:
				break;
		}
	}
};

// function to parse a workflow structure and return the stringified structure for eraser.io
const parseWorkflow = (workflow) => {
	// the first group will be the inital group that holds all the sub groups, push that to the result object
	// for readability, using a let with the initial structure to pass into the NodeGroup constructor
	result.groups.push(parseGroup("trigger", "Initial Group", workflow.workflows[0].steps_structure, null));

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

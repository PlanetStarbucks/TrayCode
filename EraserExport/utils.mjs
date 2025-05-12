// Load libraries to handle files and data with lodash.
import fs from "fs";
import _ from "lodash";

const icons = JSON.parse(fs.readFileSync("EraserExport/IconLookup/trayConnectors.json"));
const colors = JSON.parse(fs.readFileSync(`EraserExport/IconLookup/colorArray.json`));
const testFile = JSON.parse(fs.readFileSync("EraserExport/IconLookup/Workflows/workflow_[Bynder-Dropbox]-Recursive-Folder-Crawler.json", "utf8"));

const CACHE = {
	lastSteps: [],
};

// Function to lookup the step data needed from the steps part of the input object
export function lookupStep(stepId) {
	const step = testFile.workflows[0].steps[stepId];
	return {
		title: step.title,
		type: step.connector.name,
		id: stepId,
		// add more properties as needed
	};
}

export function parseSteps(group) {
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
}

export function findLastNormalNode(stepsStructure, targetName) {
	let result = null;
	let targetFound = false;
	let currentPath = [];
	let lastNormalByLevel = new Map();

	function traverse(steps, level = 0) {
		for (let i = 0; i < steps.length && !targetFound; i++) {
			const step = steps[i];

			// Update the last normal node at this level
			if (step.type === "normal") {
				lastNormalByLevel.set(level, step);
			}

			// If we found our target
			if (step.name === targetName) {
				targetFound = true;
				// Get the last normal node from the current level
				result = lastNormalByLevel.get(level);
				return;
			}

			// Traverse nested structures
			if (step.type === "loop" && step.content._loop) {
				traverse(step.content._loop, level + 1);
			} else if (step.type === "branch") {
				Object.values(step.content).forEach((branch) => {
					if (Array.isArray(branch)) {
						traverse(branch, level + 1);
					}
				});
			}
		}
	}

	traverse(stepsStructure);
	return result;
}

export function parentStep(step) {
	// Get the initial workflow structure and set the first step as default parent
	let group = testFile.workflows[0].steps_structure;
	let parent = testFile.workflows[0].steps_structure[0];

	// Helper function to recursively check groups for the parent step
	const groupCheck = function (group, step) {
		// Filter out normal steps to get only subgroups (loops and branches)
		let subGroups = group.filter(({ type }) => type !== "normal");

		// If no subgroups exist, return the current parent
		if (subGroups.length === 0) {
			return parent;
		} else {
			// Iterate through each subgroup
			for (let i = 0; i < subGroups.length; i++) {
				// Find the index of the current subgroup in the original group
				let index = group.findIndex(({ name }) => name === subGroups[i].name);

				// Look backwards from the subgroup to find the nearest normal step
				for (let j = index - 1; j >= 0; j--) {
					if (group[j].type === "normal") {
						parent = group[j];
						break;
					}
				}

				// If we found the target step, return its parent
				if (subGroups[i].name === step) {
					return parent;
				} else {
					// Otherwise, recursively check each branch of the subgroup
					Object.keys(subGroups[i].content).forEach((key) => {
						groupCheck(subGroups[i].content[key], step);
					});
				}
			}
		}
		// Return the parent if no match is found
		return parent;
	};

	// Start the recursive search and return the result
	return groupCheck(group, step);
}

export function lastStep(steps) {
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
}

export function firstStep(steps) {
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
}

export function getIcon(str) {
	let res = `${icons.find((s) => s.connector === str).icon}`;
	return res;
}

export function getColor(obj, key) {
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
}

export default {
	lookupStep,
	parseSteps,
	parentStep,
	lastStep,
	firstStep,
	getIcon,
	getColor,
};

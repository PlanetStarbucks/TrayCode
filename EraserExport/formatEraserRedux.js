const fs = require("fs");
const _ = require("lodash");
const importJSON = JSON.parse(fs.readFileSync(`/Users/billkeiffer/Git/TrayCode/EraserExport/Workflows/workflow_Structurizr-Export-Test.json`));

/*
nodeAry holds the elements of the diagram globally.  Functions add to that array as they run,
and then it is joined to create the final format.

connectAry holds the elements on the connection in an array globally.  It is then joined for the 
final format 

flatAry holds the elements in a single flat array, so that the elements can be looked up easily
in the connection builder
*/

let nodeAry = [];
let connectAry = [];
let flatAry = [];

/*
groupBuilder is a recursive function that will call the workflow structure from Tray.io.
The workflow export inludes an array that lays out all the nodes and how they are nested within 
the build.  That array is crawled through to create a new array with the data needed to build 
connections and the eraser.io nodes.  When it reaches a node with a nested array of nodes, it calls 
itself to crawl that structure.  As the arrays are returned, they are pushed into a similarly nested
structure.

stepAry: the array of nodes to be crawled.  In tray.io exports, this is at importJSON.workflows[0].steps_structure
parent: the name of the node being crawled (the parent node).  In the first iteration,
	the parent can be the workflow name
lastNode: the name of the node coming before the node being called
nextNode: the name of the node after the node being called
endNode: the name of the node that would be at the end of the branch being crawled.  this is where the nodes
	need to connect to to complete a path.  if the parent node is the last node in the array, then 
	the endNode needs to be the endNode of the parent node.  This should started as an undefined value
	and only be invoked when there's a loop or branch that coallesces at a node.
*/

const groupBuilder = function (stepAry, parent, lastNode, nextNode, endNode) {
	let res = [];
	let resetNode = endNode;
	/*
	In the case where a branch is called, but that branch has no nodes (i.e. a false branch
	with no action needed) then we create a placeholder node so eraser can draw a path through it.
	*/

	if (stepAry.length === 0) {
		res.push({
			name: `emptyPath-${lastNode}`,
			type: "normal",
			description: `emptyPath-${lastNode}`,
			icon: `[icon: function]`,
			parent: parent,
			lastNode: lastNode,
			nextNode: [endNode],
		});
		return res;
	} else {
		/*
		Loop through the input array and based on the node type, decide how to add an object to the group object
		*/

		for (let i = 0; i < stepAry.length; i++) {
			if (stepAry[i].type === "normal" || stepAry[i].type === "break") {
				if (stepAry[i].name === "graphql-client-1") {
					console.log(nextNode, JSON.stringify(stepAry[i], null, 2));
				}
				/*
				if a node is the last one in the array, then the value for next node needs to be the
				next value from it's parent array.  This is brought into the function by the endNode parameter
				else, the next node is either the next node in the array, or all the first nodes of
				branches in the next node.  This logic is handled by the getNextNode function
				*/

				if (i === stepAry.length - 1) {
					nextNode = [endNode];
				} else {
					nextNode = getNextNode(stepAry[i + 1], parent);
				}

				//sets the name of the node before this one.  If its the first one in the nodeAry, then it
				//should be the parent node (the node that called this array)

				lastNode = stepAry[i - 1] === undefined ? parent : stepAry[i - 1].name;

				//creates an object in the array with the data we need

				res.push({
					...stepAry[i],
					description: importJSON.workflows[0].steps[stepAry[i].name].title,
					connector: importJSON.workflows[0].steps[stepAry[i].name].connector.name,
					operation: importJSON.workflows[0].steps[stepAry[i].name].operation,
					icon: `[icon: function]`,
					parent: parent,
					lastNode: lastNode,
					nextNode: nextNode,
					branch: [],
				});
			} else if (stepAry[i].type === "loop" || stepAry[i].type === "branch") {
				/*
				when recursing this function, we need to pass in the name of the node that follows this node
				so that the last node in the branch will know to connect to it.  If it's the last node in the
				array, then it should pass in the endNode of the parent for the last node to connect to
				*/

				endNode = stepAry[i + 1] === undefined ? endNode : stepAry[i + 1].name;

				//a for...in loop to go through any number of branches the node may have.
				//and create an object in the array containing the node data.

				for (const key in stepAry[i].content) {
					res.push({
						name: stepAry[i].name,
						type: stepAry[i].type,
						description: `${importJSON.workflows[0].steps[stepAry[i].name].title}-${key}`,
						connector: importJSON.workflows[0].steps[stepAry[i].name].connector.name,
						operation: importJSON.workflows[0].steps[stepAry[i].name].operation,
						icon: `[color: red]`,
						parent: parent,
						lastNode: lastNode,
						nextNode: nextNode,
						branch: groupBuilder(stepAry[i].content[key], parent, lastNode, nextNode, endNode),
					});
				}

				//because a branching node may not be the last node in the array, we need to reset the
				//endNode value back to the parent.  This was saved earlier

				endNode = resetNode;
			}
		}
	}
	return res;
};

/*
getNextNode if called from the main function.  It takes in the it takes in the next node in
the input array.  If this is a normal node, then it returns that node name.  If it is a branch
node, then it need to get the first nodes from all the branches under it, and return that back to 
the groupBuilder function.
*/

const getNextNode = function (obj, parent) {
	let res = [];
	//console.log(obj.name, parent);
	if (obj === undefined) {
		res.push("undefined");
	} else if (obj.type === "normal" || obj.type === "break") {
		res.push(obj.name);
	} else if (obj.type === "loop" || obj.type === "branch") {
		for (const key in obj.content) {
			res.push(getFirstNode(obj.content[key], parent));
		}
	}
	return res;
};

/*
getFirstNode is a recursive function called from getNextNode to get all the first nodes 
from an empty array, an array, or the first nodes of all branches in that first node.  
Branches can be arbitrarily deep, so it recurses to get all the first nodes.  
*/

const getFirstNode = function (stepAry, parent) {
	let res = "";
	if (stepAry.length === 0) {
		res = `emptyPath-${parent}`;
	} else if (_.head(stepAry).type === "loop" || _.head(stepAry).type === "branch") {
		let ary = [];
		Object.keys(_.head(stepAry).content).forEach((el) => {
			ary.push(getFirstNode(el));
		});
		res = ary;
	} else if (_.head(stepAry).type === "normal" || _.head(stepAry).type === "break") {
		res = _.head(stepAry).name;
	}
	return res;
};

/*
getLastNode is not currently in use.  it was designed to get the last node in the input array
*/

const getLastNode = function (stepAry, parent) {
	let res = "";
	if (stepAry === []) {
		res = "emptyPath";
	} else if (_.last(stepAry).type === "loop" || _.last(stepAry).type === "branch") {
		let ary = [];
		Object.keys(_.last(stepAry).content).forEach((el) => {
			ary.push(getFirstNode(el));
		});
		res = ary;
	} else if (_.last(stepAry).type === "normal" || _.last(stepAry).type === "break") {
		res = _.last(stepAry).name;
	}
	return res;
};

/*
nodeCrawler is a recurvise function that builds the nodeAry from the stucture built by 
groupBuiler.  It iterates over each element, and add it in the format eraser needs. Nested elements
are recursed into the function to be added.  
*/

const nodeCrawler = function (ary) {
	ary.forEach((element) => {
		if (element.type === "normal" || element.type === "break") {
			nodeAry.push(nodeFormat(element));
		} else if (element.type === "branch" || element.type === "loop") {
			nodeAry.push(`${element.description} ${element.icon} {`);
			nodeCrawler(element.branch);
			nodeAry.push(`}`);
		}
	});
	return nodeAry;
};

/*
creates the string format for the individual nodes.  
*/

const nodeFormat = function (obj) {
	let res = `${obj.description} ${obj.icon}`;
	return res;
};

/*
connectionBuilder takes all the nextNode information in the node objects from the stucture 
array and formats it for eraser.io to connect the nodes.  
*/

const connectionBuilder = function (ary) {
	ary.forEach((el) => {
		if (el.type === "normal" || el.type === "break") {
			next = [];
			el.nextNode.forEach((el) => {
				if (el === undefined) {
					// skip
				} else {
					next.push(flatStructure.find((item) => item.name === el).description);
				}
			});
			connectAry.push(`${el.description} > ${next.join(", ")}`);
		} else if (el.type === "branch" || el.type === "loop") {
			connectionBuilder(el.branch);
		}
	});
	//remove the last one because it has no where to connect with slice(0, -1)
	return connectAry.slice(0, -1);
};

/*
deepFlat is a function to flatten all the nodes into a single array.  This is used to
interpret the names of the nextNode array as their description instead.
*/

const deepFlat = function (ary) {
	ary.forEach((el) => {
		if (el.type === "normal" || el.type === "break") {
			flatAry.push(el);
		} else if (el.type === "branch" || el.type === "loop") {
			deepFlat(el.branch);
		}
	});
	return flatAry;
};

/*
These are various utility functions to extract specific formats from the nodes.
In some cases, we want to strip all special characters, or just get the number of the 
node so it can be identified
*/

const strReplace = function (str) {
	let res = str.replace(/[^a-zA-Z0-9 ]/g, "");
	return res;
};

const parseNumber = function (str) {
	let res = str.replace(/[^0-9 ]/g, "");
	return res;
};

const parsedText = function (str) {
	let res = str.replace(/[^a-zA-Z ]/g, "");
	return res;
};

const bracketeer = function (str) {
	let res = `{
		${str}
	}`;
	return res;
};

const nodeFind = function (obj, key) {
	let res = importJSON.workflows[0].steps.find((s) => s.name === obj.name)[key];
	return res;
};

const structure = groupBuilder(importJSON.workflows[0].steps_structure, importJSON.workflows[0].title);
//console.log(JSON.stringify(structure, null, 2));

const eraserNodes = `${importJSON.workflows[0].title} [color: purple] {
	${nodeCrawler(structure, importJSON.workflows[0].title).join("\n")}
}`;
const flatStructure = deepFlat(structure);
const connections = connectionBuilder(structure).join("\n");
console.log(eraserNodes);
console.log(connections);

//console.log(nodeAry);

//console.log(connectionBuilder(importJSON.workflows[0].steps_structure, strReplace(importJSON.workflows[0].steps_structure[0].name), 0));
//console.log(modelBuilder(importJSON.workflows[0].steps_structure))

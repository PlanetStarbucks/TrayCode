const fs = require("fs");
const importJSON = JSON.parse(fs.readFileSync(`/Users/billkeiffer/Git/TrayCode/EraserExport/Workflows/workflow_Structurizr-Export-Test.json`));

let emptyCount = 0;

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

const descFind = function (obj) {
	let res = strReplace(groups.find((s) => s.name === obj.name).desc);
	return res;
};

let lines = [`\t`];

const views = `
	views {
		container "workflow" {
				include *
				autolayout lr
		}
}`;

const modelBegin = `${importJSON.workflows[0].title} [color: purple]`;

const modelEnd = ``;

const groupBuilder = function (importJSON) {
	let res = [];
	Object.entries(importJSON.workflows[0].steps).forEach((element) => {
		res.push({
			name: element[0],
			type: element[1].connector.name,
			operation: element[1].operation,
			desc: element[1].title,
		});
	});
	return res;
};

const modelBuilder = function (importArray) {
	let res = modelBegin;
	res = `${res} ${nodeLogic(importArray)} ${modelEnd}`;
	return res;
};

const loopHandle = function (ary, parent) {
	//console.log("loopHandle:", ary, parent);
	let res = `\t${parent.name} [color: purple]`;
	res = `${res} ${nodeLogic(ary, parent)}`;
	return res;
};

const branchHandle = function (ary, parent, name) {
	//console.log("branchHanlde:", ary, parent, name);
	let res = `\t${name}${parseNumber(parent.name)} [color: green]`;
	res = `${res} ${nodeLogic(ary, parent)}`;
	return res;
};

const nodeLogic = function (ary, parent) {
	let res = ``;
	let nodeAry = [];
	if (ary.length === 0) {
		emptyCount++;
		res = `empty${parseNumber(parent.name)} [icon: function]`;
		return `${bracketeer(res)}`;
	} else {
		if (parent !== undefined) {
			console.log(ary, parent);
			nodeAry.push(nodeStructure(parent));
		}
		ary.forEach((element) => {
			if (element.type === "loop") {
				nodeAry.push(loopHandle(element.content._loop, element));
			} else if (element.type === "branch") {
				let branchAry = [];
				branchAry.push(`${element.name} [color: red] {`);
				Object.entries(element.content).forEach((el) => {
					//console.log(el);
					branchAry.push(branchHandle(el[1], element, el[0]));
				});
				branchAry.push(`}`);
				nodeAry.push(`${branchAry.join(`\n\t`)} \n\t}`);
				nodeAry.push(nodeStructure(element));
			} else {
				nodeAry.push(nodeStructure(element));
			}
		});
	}
	res = `${bracketeer(nodeAry.join(`\n\t`))}`;
	return res;
};

const nodeStructure = function (obj, name) {
	let res = ``;
	if (name !== undefined) {
		res = `${descFind(obj)}${name} [icon: ${parsedText(obj.name)}]`;
	} else {
		res = `${descFind(obj)} [icon: ${parsedText(obj.name)}]`;
	}
	return res;
};

const connectionBuilder = function (ary, lastNode, startPoint) {
	//console.log(ary, lastNode, startPoint);
	for (let i = startPoint; i < ary.length - 1; i++) {
		if (ary[i].type === "normal" && ary[i + 1].type === "normal") {
			lines.push(`${descFind(ary[i])} > ${descFind(ary[i + 1])}`);
			lastNode = strReplace(ary[i].name);
		} else if (ary[i].type === "normal" && ary[i + 1].type === "loop") {
			//console.log(ary[i]);
			lines.push(`${descFind(ary[i])} > firstNormal`);
			lastNode = strReplace(ary[i].name);
			connectionBuilder(ary[i + 1].content._loop, lastNode, 0);
		} else if (ary[i].type === "branch") {
			Object.keys(ary[i].content).forEach((element) => {
				loopBack(ary[i].content[element], lastNode);
				connectionBuilder(ary[i].content[element], lastNode, 0);
			});
		}
	}
	return lines.join(`\n\t`);
};

const firstNormal = function (ary) {
	//console.log(ary);
	if (ary[0].type === "normal") {
		return strReplace(ary[0].name);
	}
};

const loopBack = function (ary, lastNode) {
	let aryEnd = ary.length - 1;
	if (aryEnd === -1) {
		lines.push(`this was empty`);
	} else if (ary[aryEnd].type === "normal") {
		//console.log("normal shit");
		lines.push(`${strReplace(ary[aryEnd].name)} -> ${lastNode}`);
	} else if (ary[aryEnd].type === "_loop") {
		//console.log("loop shit");
		loopBack(ary[aryEnd].content._loop, lastNode);
	} else if (ary[aryEnd].type === "branch") {
		Object.keys(ary[aryEnd].content).forEach((element) => {
			loopBack(ary[aryEnd].content[element], lastNode);
		});
	}
};

const groups = groupBuilder(importJSON);

console.log(groups);

//console.log(connectionBuilder(importJSON.workflows[0].steps_structure, strReplace(importJSON.workflows[0].steps_structure[0].name), 0));
//console.log(modelBuilder(importJSON.workflows[0].steps_structure));

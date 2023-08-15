const importJSON = {
	tray_export_version: 4,
	export_type: "workflow",
	workflows: [
		{
			id: "9fe445d4-0353-4c4c-b1a3-0f3f254de9ec",
			created: "2023-08-10T22:47:58.774742Z",
			workspace_id: "3bcfad28-3db5-4d34-b562-0e2e4978be5c",
			creator: "c0fb1638-958b-4aa0-a664-c3effbe736a5",
			version: {
				id: "d3e08992-e0b5-48cd-9229-9d0f5927347b",
				created: "2023-08-10T22:53:09.530830Z",
			},
			title: "Structurizr Export Test",
			enabled: false,
			tags: [],
			settings: {
				config: {},
				input_schema: {},
				output_schema: {},
			},
			steps_structure: [
				{
					name: "trigger",
					type: "normal",
					content: {},
				},
				{
					name: "storage-1",
					type: "normal",
					content: {},
				},
				{
					name: "text-helpers-1",
					type: "normal",
					content: {},
				},
				{
					name: "http-client-1",
					type: "normal",
					content: {},
				},
				{
					name: "loop-1",
					type: "loop",
					content: {
						_loop: [
							{
								name: "storage-2",
								type: "normal",
								content: {},
							},
							{
								name: "json-transformer-1",
								type: "normal",
								content: {},
							},
							{
								name: "boolean-condition-1",
								type: "branch",
								content: {
									true: [
										{
											name: "script-1",
											type: "normal",
											content: {},
										},
										{
											name: "branch-1",
											type: "branch",
											content: {
												__default__: [
													{
														name: "delay-1",
														type: "normal",
														content: {},
													},
													{
														name: "logic-helpers-1",
														type: "normal",
														content: {},
													},
													{
														name: "random-helpers-1",
														type: "normal",
														content: {},
													},
												],
												branch1: [],
												branch2: [
													{
														name: "data-mapper-1",
														type: "normal",
														content: {},
													},
													{
														name: "csv-reader-1",
														type: "normal",
														content: {},
													},
												],
											},
										},
										{
											name: "file-helpers-1",
											type: "normal",
											content: {},
										},
									],
									false: [
										{
											name: "break-loop-1",
											type: "break",
											content: {},
										},
									],
								},
							},
						],
					},
				},
				{
					name: "csv-1",
					type: "normal",
					content: {},
				},
				{
					name: "slack-1",
					type: "normal",
					content: {},
				},
			],
			steps: {
				"script-1": {
					title: "do some scripts",
					connector: {
						name: "script",
						version: "3.3",
					},
					operation: "execute",
					output_schema: {},
					error_handling: {},
					properties: {
						variables: {
							type: "array",
							value: [
								{
									type: "object",
									value: {
										name: {
											type: "string",
											value: "foo",
										},
										value: {
											type: "string",
											value: "bar",
										},
									},
								},
							],
						},
						script: {
							type: "string",
							value: "// You can reference the input variables using input.NAME\n// Parsed JSON files could be referenced as fileInput\nexports.step = function(input, fileInput) {\n\treturn input.foo;\n};",
						},
						file_output: {
							type: "boolean",
							value: false,
						},
					},
				},
				"storage-2": {
					title: "Get solution data obj",
					connector: {
						name: "storage",
						version: "1.4",
					},
					operation: "set",
					output_schema: {},
					error_handling: {},
					properties: {
						scope: {
							type: "string",
							value: "Current Run",
						},
					},
				},
				"text-helpers-1": {
					title: "Parse Strings",
					connector: {
						name: "text-helpers",
						version: "3.0",
					},
					operation: "base64_encoderdecoder",
					output_schema: {},
					error_handling: {},
					properties: {
						operation: {
							type: "string",
							value: "encode",
						},
					},
				},
				"slack-1": {
					title: "Send a message that your ok",
					connector: {
						name: "slack",
						version: "9.1",
					},
					operation: "send_message",
					output_schema: {},
					error_handling: {},
					properties: {
						token: {
							type: "jsonpath",
							value: "$.auth.access_token",
						},
						username: {
							type: "string",
							value: "Tray.io",
						},
						as_user: {
							type: "boolean",
							value: false,
						},
						parse: {
							type: "string",
							value: "none",
						},
						link_names: {
							type: "boolean",
							value: false,
						},
						reply_broadcast: {
							type: "boolean",
							value: false,
						},
					},
				},
				"random-helpers-1": {
					title: "pick something at random",
					connector: {
						name: "random-helpers",
						version: "2.0",
					},
					operation: "random_hex",
					output_schema: {},
					error_handling: {},
					properties: {
						hex_length: {
							type: "integer",
							value: 16,
						},
					},
				},
				"loop-1": {
					title: "Loop records",
					connector: {
						name: "loop",
						version: "1.3",
					},
					operation: "loop_array",
					output_schema: {
						type: "object",
						$schema: "http://json-schema.org/draft-03/schema",
						id: "http://jsonschema.net",
						additionalProperties: false,
						properties: {
							value: {
								type: ["string", "number", "object", "array", "boolean", "null"],
								id: "http://jsonschema.net/item",
							},
							count: {
								type: "number",
								id: "http://jsonschema.net/total",
							},
							index: {
								type: "number",
								id: "http://jsonschema.net/index",
							},
							is_first: {
								type: "boolean",
								id: "http://jsonschema.net/is_first",
							},
							is_last: {
								type: "boolean",
								id: "http://jsonschema.net/is_last",
							},
						},
					},
					error_handling: {},
					properties: {
						array: {
							type: "array",
							value: [],
						},
					},
				},
				"boolean-condition-1": {
					title: "Boolean Condition",
					connector: {
						name: "boolean-condition",
						version: "2.3",
					},
					operation: "boolean_condition",
					output_schema: {},
					error_handling: {},
					properties: {
						conditions: {
							type: "array",
							value: [
								{
									type: "object",
									value: {
										value1: {
											type: "string",
											value: "",
										},
										comparison_type: {
											type: "string",
											value: "===",
										},
										value2: {
											type: "string",
											value: "",
										},
									},
								},
							],
						},
						strictness: {
							type: "string",
							value: "All",
						},
					},
				},
				"http-client-1": {
					title: "Call web service",
					connector: {
						name: "http-client",
						version: "5.6",
					},
					operation: "post_request",
					output_schema: {},
					error_handling: {},
					properties: {
						auth: {
							type: "object",
							value: {
								none: {
									type: "null",
									value: null,
								},
							},
						},
						follow_redirect: {
							type: "boolean",
							value: false,
						},
						follow_keep_method: {
							type: "boolean",
							value: false,
						},
						reject_unauthorized: {
							type: "boolean",
							value: true,
						},
						follow_authorization_header: {
							type: "boolean",
							value: false,
						},
						parse_response: {
							type: "string",
							value: "true",
						},
						status_code: {
							type: "object",
							value: {
								range: {
									type: "object",
									value: {
										from: {
											type: "integer",
											value: 200,
										},
										to: {
											type: "integer",
											value: 299,
										},
									},
								},
							},
						},
						case_sensitive_headers: {
							type: "boolean",
							value: false,
						},
					},
				},
				"logic-helpers-1": {
					title: "Do some philosophy",
					connector: {
						name: "logic-helpers",
						version: "2.1",
					},
					operation: "evaluation",
					output_schema: {},
					error_handling: {},
					properties: {
						initial_condition: {
							type: "object",
							value: {
								not: {
									type: "boolean",
									value: false,
								},
							},
						},
						initial_not: {
							type: "boolean",
							value: false,
						},
					},
				},
				"break-loop-1": {
					title: "End loop 1",
					connector: {
						name: "break-loop",
						version: "1.1",
					},
					operation: "break",
					output_schema: {},
					error_handling: {},
					properties: {},
				},
				"delay-1": {
					title: "wait a sec",
					connector: {
						name: "delay",
						version: "1.0",
					},
					operation: "delay",
					output_schema: {},
					error_handling: {},
					properties: {
						time_unit: {
							type: "string",
							value: "minutes",
						},
						delay_value: {
							type: "integer",
							value: 1,
						},
					},
				},
				"csv-reader-1": {
					title: "read the CSV",
					connector: {
						name: "csv-reader",
						version: "3.2",
					},
					operation: "create_csv",
					output_schema: {},
					error_handling: {},
					properties: {
						scope: {
							type: "string",
							value: "current_run",
						},
						has_header: {
							type: "boolean",
							value: true,
						},
						delimiter: {
							type: "string",
							value: ",",
						},
						end_line: {
							type: "string",
							value: "Unix / LF",
						},
						return_results: {
							type: "boolean",
							value: true,
						},
					},
				},
				"branch-1": {
					title: "Branch",
					connector: {
						name: "branch",
						version: "1.3",
					},
					operation: "simple",
					output_schema: {},
					error_handling: {},
					properties: {
						value: {
							type: "string",
							value: "",
						},
						branches: {
							type: "array",
							value: [
								{
									type: "object",
									value: {
										value: {
											type: "string",
											value: "",
										},
										label: {
											type: "string",
											value: "Branch 1",
										},
									},
								},
								{
									type: "object",
									value: {
										label: {
											type: "string",
											value: "Branch 2",
										},
									},
								},
							],
						},
					},
				},
				"data-mapper-1": {
					title: "Map some data",
					connector: {
						name: "data-mapper",
						version: "3.5",
					},
					operation: "map_keys",
					output_schema: {},
					error_handling: {},
					properties: {},
				},
				"storage-1": {
					title: "Get data from DB",
					connector: {
						name: "storage",
						version: "1.4",
					},
					operation: "set",
					output_schema: {},
					error_handling: {},
					properties: {
						scope: {
							type: "string",
							value: "Current Run",
						},
					},
				},
				"csv-1": {
					title: "Save the data",
					connector: {
						name: "csv",
						version: "7.0",
					},
					operation: "create_csv_from_file",
					output_schema: {},
					error_handling: {},
					properties: {
						scope: {
							type: "string",
							value: "current_run",
						},
						has_header: {
							type: "boolean",
							value: true,
						},
						delimiter: {
							type: "string",
							value: "comma",
						},
						escape_char: {
							type: "string",
							value: "\\",
						},
						enclose_char: {
							type: "string",
							value: '"',
						},
						end_line: {
							type: "string",
							value: "auto_detect",
						},
						max_header_length: {
							type: "integer",
							value: 10000,
						},
						max_first_row_length: {
							type: "integer",
							value: 65535,
						},
						validate_csv_settings: {
							type: "boolean",
							value: true,
						},
						use_regex_for_column_matching: {
							type: "boolean",
							value: false,
						},
						use_utf8: {
							type: "boolean",
							value: false,
						},
					},
				},
				"json-transformer-1": {
					title: "transform record",
					connector: {
						name: "json-transformer",
						version: "1.0",
					},
					operation: "transform",
					output_schema: {},
					error_handling: {},
					properties: {},
				},
				"file-helpers-1": {
					title: "Save the file",
					connector: {
						name: "file-helpers",
						version: "2.5",
					},
					operation: "convert_file",
					output_schema: {},
					error_handling: {},
					properties: {},
				},
				trigger: {
					title: "Webhook",
					connector: {
						name: "webhook",
						version: "2.3",
					},
					operation: "fire_and_forget",
					output_schema: {},
					error_handling: {},
					properties: {},
				},
			},
			dependencies: [],
		},
	],
	projects: [],
};

let emptyCount = 0;

const strReplace = function (str) {
	let res = str.replace(/[^a-zA-Z0-9 ]/g, "");
	return res;
};

const parseNumber = function (str) {
	let res = str.replace(/[^0-9 ]/g, "");
	return res;
};

const bracketeer = function (str) {
	let res = `{
		${str}
	}`;
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

const modelBegin = `model {
	properties {
		"structurizr.groupSeparator" "/"
	}
	workflow = softwareSystem "${strReplace(importJSON.workflows[0].title)}" `;

const modelEnd = `
	trigger -> storage1
	}
	
	views {
			container "workflow" {
					include *
					autolayout lr
			}
	}
}`;

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

const loopHandle = function (ary, name) {
	let res = `\t${strReplace(name)} = group "${strReplace(groups.find((s) => s.name === name).desc)}" `;
	res = `${res} ${nodeLogic(ary)}`;
	return res;
};

const branchHandle = function (ary, name) {
	let res = `\tbranch${strReplace(ary[0])}${parseNumber(name)} = group "branch ${ary[0]}" `;
	res = `${res} ${nodeLogic(ary[1])}`;
	return res;
};

const nodeLogic = function (ary) {
	let res = ``;
	let nodeAry = [];
	if (ary.length === 0) {
		emptyCount++;
		res = `empty${emptyCount} = container "No Function ${emptyCount}"`;
		return `${bracketeer(res)}`;
	} else {
		ary.forEach((element) => {
			if (element.type === "loop") {
				nodeAry.push(loopHandle(element.content._loop, element.name));
			} else if (element.type === "branch") {
				let branchAry = [];
				branchAry.push(`${strReplace(element.name)} = group "${strReplace(groups.find((s) => s.name === element.name).desc)}" {`);
				Object.entries(element.content).forEach((el) => {
					branchAry.push(branchHandle(el, element.name));
				});
				nodeAry.push(`${branchAry.join(`\n\t\t`)} \n\t}`);
			} else {
				nodeAry.push(nodeStructure(element));
			}
		});
	}
	res = `${bracketeer(nodeAry.join(`\n\t`))}`;
	return res;
};

const nodeStructure = function (obj) {
	let res = `${strReplace(obj.name)} = container "${strReplace(groups.find((s) => s.name === obj.name).desc)} - ${strReplace(obj.name)}"`;
	return res;
};

const connectionBuilder = function (ary, lastNode, startPoint) {
	for (let i = startPoint; i < ary.length; i++) {
		if (ary[i].type === "normal") {
			lines.push(`${lastNode} -> ${strReplace(ary[i].name)}`);
			lastNode = strReplace(ary[i].name);
		} else if (ary[i].type === "loop") {
			connectionBuilder(ary[i].content._loop, lastNode, 0);
		} else if (ary[i].type === "branch") {
			Object.keys(ary[i].content).forEach((element) => {
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

const groups = groupBuilder(importJSON);

console.log(connectionBuilder(importJSON.workflows[0].steps_structure, strReplace(importJSON.workflows[0].steps_structure[0].name), 1));
console.log(modelBuilder(importJSON.workflows[0].steps_structure));

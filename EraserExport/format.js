const importJSON = {
	tray_export_version: 4,
	export_type: "workflow",
	workflows: [
		{
			id: "c7d3ba8c-780d-41b5-9199-5fe3468a55c4",
			created: "2022-11-22T17:04:53.261711Z",
			workspace_id: "139e4592-3b78-46ad-885b-bc64d04d3bed",
			project_id: "61e77b36-3e4a-42ac-8b73-06e9e77addff",
			group: "b480641f-5f8a-4554-a647-84b3af4d5291",
			creator: "139e4592-3b78-46ad-885b-bc64d04d3bed",
			version: {
				id: "61b163df-25e2-4a0b-8974-a1688be5622b",
				created: "2023-07-21T09:19:33.920515Z",
			},
			title: "[Adobe Stock v2] Sync Master",
			enabled: true,
			tags: [],
			settings: {
				config: {
					syncVector: false,
					syncVideo: false,
					syncOrganization: "true",
					offsetSize: "100",
					waitingRoom: true,
					searchLimit: "50",
					metadataMapping: [],
					chunkSize: 64000000,
					staticMapInput: [],
					dataMapInput: {},
				},
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
					name: "date-time-helpers-1",
					type: "normal",
					content: {},
				},
				{
					name: "date-time-helpers-2",
					type: "normal",
					content: {},
				},
				{
					name: "storage-3",
					type: "normal",
					content: {},
				},
				{
					name: "storage-14",
					type: "normal",
					content: {},
				},
				{
					name: "call-workflow-1",
					type: "normal",
					content: {},
				},
				{
					name: "storage-2",
					type: "normal",
					content: {},
				},
				{
					name: "loop-1",
					type: "loop",
					content: {
						_loop: [
							{
								name: "loop-2",
								type: "loop",
								content: {
									_loop: [
										{
											name: "storage-16",
											type: "normal",
											content: {},
										},
										{
											name: "script-4",
											type: "normal",
											content: {},
										},
										{
											name: "boolean-condition-3",
											type: "branch",
											content: {
												true: [
													{
														name: "storage-4",
														type: "normal",
														content: {},
													},
													{
														name: "math-helpers-1",
														type: "normal",
														content: {},
													},
													{
														name: "http-client-1",
														type: "normal",
														content: {},
													},
													{
														name: "list-helpers-1",
														type: "normal",
														content: {},
													},
													{
														name: "boolean-condition-1",
														type: "branch",
														content: {
															true: [
																{
																	name: "script-2",
																	type: "normal",
																	content: {},
																},
																{
																	name: "boolean-condition-6",
																	type: "branch",
																	content: {
																		true: [],
																		false: [
																			{
																				name: "json-transformer-1",
																				type: "normal",
																				content: {},
																			},
																			{
																				name: "json-transformer-2",
																				type: "normal",
																				content: {},
																			},
																			{
																				name: "http-client-5",
																				type: "normal",
																				content: {},
																			},
																			{
																				name: "json-transformer-4",
																				type: "normal",
																				content: {},
																			},
																			{
																				name: "script-1",
																				type: "normal",
																				content: {},
																			},
																			{
																				name: "storage-6",
																				type: "normal",
																				content: {},
																			},
																		],
																	},
																},
															],
															false: [
																{
																	name: "storage-1",
																	type: "normal",
																	content: {},
																},
																{
																	name: "list-helpers-3",
																	type: "normal",
																	content: {},
																},
																{
																	name: "storage-5",
																	type: "normal",
																	content: {},
																},
																{
																	name: "storage-10",
																	type: "normal",
																	content: {},
																},
																{
																	name: "break-loop-1",
																	type: "break",
																	content: {},
																	target: "loop-1",
																},
															],
														},
													},
													{
														name: "math-helpers-2",
														type: "normal",
														content: {},
													},
													{
														name: "storage-8",
														type: "normal",
														content: {},
													},
												],
												false: [
													{
														name: "storage-7",
														type: "normal",
														content: {},
													},
													{
														name: "list-helpers-2",
														type: "normal",
														content: {},
													},
													{
														name: "storage-9",
														type: "normal",
														content: {},
													},
													{
														name: "storage-11",
														type: "normal",
														content: {},
													},
													{
														name: "break-loop-5",
														type: "break",
														content: {},
														target: "loop-2",
													},
												],
											},
										},
									],
								},
							},
						],
					},
				},
				{
					name: "storage-12",
					type: "normal",
					content: {},
				},
				{
					name: "loop-3",
					type: "loop",
					content: {
						_loop: [
							{
								name: "storage-13",
								type: "normal",
								content: {},
							},
							{
								name: "storage-17",
								type: "normal",
								content: {},
							},
							{
								name: "loop-4",
								type: "loop",
								content: {
									_loop: [
										{
											name: "logic-helpers-1",
											type: "normal",
											content: {},
										},
										{
											name: "boolean-condition-7",
											type: "branch",
											content: {
												true: [
													{
														name: "date-time-helpers-3",
														type: "normal",
														content: {},
													},
													{
														name: "date-time-helpers-4",
														type: "normal",
														content: {},
													},
													{
														name: "boolean-condition-2",
														type: "branch",
														content: {
															true: [
																{
																	name: "break-loop-2",
																	type: "break",
																	content: {},
																	target: "loop-3",
																},
															],
															false: [
																{
																	name: "storage-18",
																	type: "normal",
																	content: {},
																},
																{
																	name: "script-5",
																	type: "normal",
																	content: {},
																},
																{
																	name: "data-mapper-1",
																	type: "normal",
																	content: {},
																},
																{
																	name: "boolean-condition-8",
																	type: "branch",
																	content: {
																		true: [
																			{
																				name: "call-workflow-2",
																				type: "normal",
																				content: {},
																			},
																			{
																				name: "storage-15",
																				type: "normal",
																				content: {},
																			},
																		],
																		false: [
																			{
																				name: "call-workflow-5",
																				type: "normal",
																				content: {},
																			},
																			{
																				name: "delay-1",
																				type: "normal",
																				content: {},
																			},
																		],
																	},
																},
															],
														},
													},
												],
												false: [],
											},
										},
									],
								},
							},
						],
					},
				},
			],
			steps: {
				"data-mapper-1": {
					title: "Map Content Types",
					connector: {
						name: "data-mapper",
						version: "3.5",
					},
					operation: "map_values",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							output: {
								type: "string",
							},
						},
					},
					error_handling: {},
					properties: {
						mappings: {
							type: "array",
							value: [
								{
									value: {
										from: {
											type: "string",
											value: "image/jpeg",
										},
										to: {
											type: "string",
											value: "jpg",
										},
									},
									type: "object",
								},
								{
									type: "object",
									value: {
										from: {
											type: "string",
											value: "video/mp4",
										},
										to: {
											type: "string",
											value: "mp4",
										},
									},
								},
								{
									type: "object",
									value: {
										from: {
											type: "string",
											value: "application/postscript",
										},
										to: {
											type: "string",
											value: "eps",
										},
									},
								},
								{
									type: "object",
									value: {
										from: {
											type: "string",
											value: "video/quicktime",
										},
										to: {
											type: "string",
											value: "mov",
										},
									},
								},
								{
									type: "object",
									value: {
										from: {
											type: "string",
											value: "application/illustrator",
										},
										to: {
											type: "string",
											value: "ai",
										},
									},
								},
							],
						},
						input: {
							type: "jsonpath",
							value: "$.steps.loop-4.value.content_type",
						},
					},
				},
				"storage-16": {
					title: "Init syncList by Key",
					connector: {
						name: "storage",
						version: "1.4",
					},
					operation: "get",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							value: {
								type: "array",
								items: {},
							},
						},
					},
					error_handling: {},
					properties: {
						scope: {
							type: "string",
							value: "Current Run",
						},
						key: {
							type: "string",
							value: "assetsSyncList-{$.env.solution_instance_id or:'adobeSolutionID'}-{$.steps.loop-1.index}",
						},
						default_value: {
							type: "array",
							value: [],
						},
					},
				},
				"storage-12": {
					title: "Get syncKeyArray",
					connector: {
						name: "storage",
						version: "1.4",
					},
					operation: "get",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							value: {
								type: "array",
								items: {
									type: "string",
								},
							},
						},
					},
					error_handling: {},
					properties: {
						scope: {
							type: "string",
							value: "Current Run",
						},
						key: {
							type: "string",
							value: "syncKeyArray",
						},
						default_value: {
							type: "null",
							value: null,
						},
					},
				},
				"list-helpers-3": {
					title: "Remove Duplicates",
					connector: {
						name: "list-helpers",
						version: "2.1",
					},
					operation: "remove_duplicates",
					output_schema: {},
					error_handling: {},
					properties: {
						list: {
							type: "jsonpath",
							value: "$.steps.storage-1.value",
						},
					},
				},
				"boolean-condition-1": {
					title: "List != 0 ? Sync to Bynder",
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
											type: "jsonpath",
											value: "$.steps.list-helpers-1.result",
										},
										comparison_type: {
											type: "string",
											value: "!==",
										},
										value2: {
											type: "number",
											value: 0,
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
				"break-loop-5": {
					title: "Break Loop 2",
					connector: {
						name: "break-loop",
						version: "1.1",
					},
					operation: "break",
					output_schema: {},
					error_handling: {},
					properties: {},
				},
				"storage-1": {
					title: "Load Asset List by Key",
					connector: {
						name: "storage",
						version: "1.4",
					},
					operation: "get",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							value: {
								type: "array",
								items: {
									type: "object",
									properties: {
										keywords: {
											type: "array",
											items: {
												oneOf: [
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "string",
													},
													{
														type: "number",
													},
													{
														type: "string",
													},
												],
											},
										},
										content_type: {
											type: "string",
										},
										download_url: {
											type: "string",
										},
										country_name: {
											type: "string",
										},
										description: {
											type: "null",
										},
										marketing_text: {
											type: "null",
										},
										id: {
											type: "number",
										},
										title: {
											type: "string",
										},
									},
									required: ["keywords", "content_type", "download_url", "country_name", "description", "marketing_text", "id", "title"],
								},
							},
						},
					},
					error_handling: {},
					properties: {
						scope: {
							type: "string",
							value: "Current Run",
						},
						key: {
							type: "string",
							value: "assetsSyncList-{$.env.solution_instance_id or:'adobeSolutionID'}-{$.steps.loop-1.index}",
						},
						default_value: {
							type: "array",
							value: [],
						},
					},
				},
				"script-5": {
					title: "Build Metadata Object",
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
											value: "mapObject",
										},
										value: {
											type: "jsonpath",
											value: "$.steps.storage-3.value.metapropertyMapping.mapObject",
										},
									},
								},
								{
									type: "object",
									value: {
										name: {
											type: "string",
											value: "metadata",
										},
										value: {
											type: "jsonpath",
											value: "$.steps.loop-4.value",
										},
									},
								},
								{
									type: "object",
									value: {
										name: {
											type: "string",
											value: "staticMeta",
										},
										value: {
											type: "jsonpath",
											value: "$.steps.storage-3.value.metapropertyMapping.staticMeta",
										},
									},
								},
							],
						},
						script: {
							type: "string",
							value:
								'// You can reference the input variables using input.NAME\n// Parsed JSON files could be referenced as fileInput\nexports.step = function (input) {\n\tconst mapping = input.mapObject\n\tconst propArray = input.metadata\n\tconst bynderMapping = {}\n\n\tObject.keys(mapping).forEach(function (key) {\n\t\tbynderMapping[key] = typeof ((propArray[`${(mapping[key])}`])) == "object" ? JSON.stringify(propArray[`${(mapping[key])}`]) : propArray[`${(mapping[key])}`]\n\t});\n\n\treturn Object.assign(bynderMapping, input.staticMeta)\n};',
						},
						file_output: {
							type: "boolean",
							value: false,
						},
					},
				},
				"delay-1": {
					title: "Delay",
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
							value: "seconds",
						},
						delay_value: {
							type: "integer",
							value: 10,
						},
					},
				},
				"storage-17": {
					title: "Create waitingRoomID",
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
						key: {
							type: "string",
							value: "waitingRoomID",
						},
						value: {
							type: "string",
							value: "",
						},
					},
				},
				"list-helpers-2": {
					title: "Remove Duplicates",
					connector: {
						name: "list-helpers",
						version: "2.1",
					},
					operation: "remove_duplicates",
					output_schema: {},
					error_handling: {},
					properties: {
						list: {
							type: "jsonpath",
							value: "$.steps.storage-7.value",
						},
					},
				},
				"script-1": {
					title: "Merge syncList with Metadata",
					connector: {
						name: "script",
						version: "3.3",
					},
					operation: "execute",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							result: {
								type: "array",
								items: {
									type: "object",
									properties: {
										id: {
											type: "number",
										},
										title: {
											type: "string",
										},
										keywords: {
											type: "array",
											items: {
												type: "string",
											},
										},
										download_url: {
											type: "string",
										},
										content_type: {
											type: "string",
										},
									},
									required: ["id", "title", "keywords", "download_url", "content_type"],
								},
							},
							console: {
								type: "array",
								items: {},
							},
						},
					},
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
											value: "assetList",
										},
										value: {
											type: "jsonpath",
											value: "$.steps.json-transformer-1.result",
										},
									},
								},
								{
									type: "object",
									value: {
										name: {
											type: "string",
											value: "metadata",
										},
										value: {
											type: "jsonpath",
											value: "$.steps.json-transformer-4.result",
										},
									},
								},
							],
						},
						script: {
							type: "string",
							value:
								"exports.step = function(input) {\nconst assetList = input.assetList\nconst metadata = input.metadata\nconst mergeById = (assetList, metadata) =>\n    assetList.map(itm => ({\n        ...metadata.find((item) => (item.id === itm.id) && item),\n        ...itm\n    }));\nreturn mergeById(assetList, metadata)\n}",
						},
						file_output: {
							type: "boolean",
							value: false,
						},
					},
				},
				"loop-3": {
					title: "Loop syncKeyArray",
					connector: {
						name: "loop",
						version: "1.3",
					},
					operation: "loop_array",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							value: {
								type: "string",
							},
							count: {
								type: "number",
							},
							index: {
								type: "number",
							},
							is_first: {
								type: "boolean",
							},
							is_last: {
								type: "boolean",
							},
							branch_name: {
								type: "string",
							},
						},
					},
					error_handling: {},
					properties: {
						array: {
							type: "jsonpath",
							value: "$.steps.storage-12.value",
						},
					},
				},
				"storage-2": {
					title: "Init pageCount",
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
						key: {
							type: "string",
							value: "pageCount",
						},
						value: {
							type: "number",
							value: 0,
						},
					},
				},
				"date-time-helpers-3": {
					title: "Get Current Time",
					connector: {
						name: "date-time-helpers",
						version: "3.0",
					},
					operation: "current_timestamp",
					output_schema: {},
					error_handling: {},
					properties: {
						timezone: {
							type: "string",
							value: "PST8PDT",
						},
						format: {
							type: "object",
							value: {
								existing_format: {
									type: "string",
									value: "X",
								},
							},
						},
					},
				},
				"storage-5": {
					title: "Finalize List by Key",
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
						key: {
							type: "string",
							value: "assetsSyncList-{$.env.solution_instance_id or:'adobeSolutionID'}-{$.steps.loop-1.index}",
						},
						value: {
							type: "jsonpath",
							value: "$.steps.list-helpers-3.result",
						},
					},
				},
				"storage-9": {
					title: "Finalize List by Key",
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
						key: {
							type: "string",
							value: "assetsSyncList-{$.env.solution_instance_id or:'adobeSolutionID'}-{$.steps.loop-1.index}",
						},
						value: {
							type: "jsonpath",
							value: "$.steps.list-helpers-2.result",
						},
					},
				},
				"boolean-condition-2": {
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
											type: "jsonpath",
											value: "$.steps.date-time-helpers-4.result",
										},
										comparison_type: {
											type: "string",
											value: "===",
										},
										value2: {
											type: "boolean",
											value: true,
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
				"call-workflow-2": {
					title: "Call Workflow",
					connector: {
						name: "call-workflow",
						version: "2.0",
					},
					operation: "fire_and_wait_for_response",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							response: {
								type: "object",
								properties: {
									accessRequestId: {
										type: "string",
									},
									mediaid: {
										type: "string",
									},
									batchId: {
										type: "string",
									},
									success: {
										type: "boolean",
									},
									mediaitems: {
										type: "array",
										items: {
											type: "object",
											properties: {
												original: {
													type: "string",
												},
												destination: {
													type: "string",
												},
											},
											required: ["original", "destination"],
										},
									},
								},
							},
							"#workspace_id_hash": {
								type: "string",
							},
							"#username_hash": {
								type: "string",
							},
							"#workflow_title": {
								type: "string",
							},
							"#execution_uuid": {
								type: "string",
							},
							"#execution_start_time": {
								type: "string",
							},
							"#execution_log_url": {
								type: "string",
							},
							"#organization_uuid": {
								type: "string",
							},
							"#datapot_id_hash": {
								type: "string",
							},
							"#workflow_uuid": {
								type: "string",
							},
						},
					},
					error_handling: {
						strategy: "automatic",
					},
					properties: {
						workflow_id: {
							type: "string",
							value: "934452a0-e531-415b-88bb-34a0422e26e8",
						},
						trigger_input: {
							type: "object",
							value: {
								assetData: {
									type: "jsonpath",
									value: "$.steps.loop-4.value",
								},
								waitingRoomID: {
									type: "jsonpath",
									value: "$.steps.storage-18.value",
								},
								fileName: {
									type: "string",
									value: "Adobe Stock {$.steps.loop-4.value.id}.{$.steps.data-mapper-1.output}",
								},
								solutionData: {
									type: "jsonpath",
									value: "$.steps.storage-3.value",
								},
								bearerToken: {
									type: "jsonpath",
									value: "$.steps.call-workflow-1.response",
								},
								metaPropertyMap: {
									type: "jsonpath",
									value: "$.steps.script-5.result",
								},
							},
						},
					},
				},
				"json-transformer-2": {
					title: "Build Asset Array",
					connector: {
						name: "json-transformer",
						version: "1.0",
					},
					operation: "transform",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							result: {
								type: "array",
								items: {
									type: "number",
								},
							},
						},
					},
					error_handling: {},
					properties: {
						data: {
							type: "object",
							value: {
								result: {
									type: "jsonpath",
									value: "$.steps.json-transformer-1.result",
								},
							},
						},
						query: {
							type: "string",
							value: "result.id",
						},
					},
				},
				"storage-3": {
					title: "Load Solution Data Object",
					connector: {
						name: "storage",
						version: "1.4",
					},
					operation: "get",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							value: {
								type: "object",
								properties: {
									metapropertyMapping: {
										type: "object",
										properties: {
											metaString: {
												type: "string",
											},
											queryObject: {
												type: "object",
												properties: {
													keywords: {
														type: "string",
													},
													is_licensed: {
														type: "string",
													},
													country_name: {
														type: "string",
													},
													creator_name: {
														type: "string",
													},
													id: {
														type: "string",
													},
													title: {
														type: "string",
													},
													thumbnail_url: {
														type: "string",
													},
												},
											},
											staticMeta: {
												type: "object",
												properties: {
													"metaproperty.74F390E6-918E-4ACE-8C0CA00005540A97": {
														type: "string",
													},
												},
											},
											queryString: {
												type: "string",
											},
											mapObject: {
												type: "object",
												properties: {
													"metaproperty.1734230F-A766-4924-B1C2EAB4A1469D2C": {
														type: "string",
													},
													"metaproperty.77B98683-A921-4C0C-B0542AB4729B97EE": {
														type: "string",
													},
													"metaproperty.139D00C8-2116-4707-901221E9C6699719": {
														type: "string",
													},
													"metaproperty.0A36E145-36E2-4141-A2D18C6BFE0B4B93": {
														type: "string",
													},
												},
											},
										},
									},
									brandID: {
										type: "string",
									},
									initializationConfig: {
										type: "object",
										properties: {
											current: {
												type: "object",
												properties: {
													configValues: {
														type: "array",
														items: {
															type: "object",
															properties: {
																externalId: {
																	type: "string",
																},
																value: {
																	type: ["object", "boolean", "string"],
																	items: {
																		type: "object",
																		properties: {
																			value: {
																				type: ["string", "null"],
																			},
																			key: {
																				type: "string",
																			},
																			text: {
																				type: "string",
																			},
																		},
																		required: ["value", "key", "text"],
																	},
																	properties: {
																		"74F390E6-918E-4ACE-8C0CA00005540A97": {
																			type: "string",
																		},
																	},
																},
															},
															required: ["externalId", "value"],
														},
													},
													enabled: {
														type: "boolean",
													},
													authValues: {
														type: "array",
														items: {
															type: "object",
															properties: {
																externalId: {
																	type: "string",
																},
																authId: {
																	type: "string",
																},
															},
															required: ["externalId", "authId"],
														},
													},
												},
											},
											previous: {
												type: "object",
												properties: {
													configValues: {
														type: "array",
														items: {
															type: "object",
															properties: {
																externalId: {
																	type: "string",
																},
																value: {
																	type: ["object", "boolean", "string"],
																	items: {
																		type: "object",
																		properties: {
																			value: {
																				type: ["string", "null"],
																			},
																			key: {
																				type: "string",
																			},
																			text: {
																				type: "string",
																			},
																		},
																		required: ["value", "key", "text"],
																	},
																	properties: {
																		"74F390E6-918E-4ACE-8C0CA00005540A97": {
																			type: "string",
																		},
																	},
																},
															},
															required: ["externalId", "value"],
														},
													},
													enabled: {
														type: "boolean",
													},
													authValues: {
														type: "array",
														items: {
															type: "object",
															properties: {
																externalId: {
																	type: "string",
																},
																authId: {
																	type: "string",
																},
															},
															required: ["externalId", "authId"],
														},
													},
												},
											},
											solutionInstanceId: {
												type: "string",
											},
											eventType: {
												type: "string",
											},
										},
									},
									stockCredentials: {
										type: "object",
										properties: {
											CLIENT_SECRET: {
												type: "string",
											},
											ORG_ID: {
												type: "string",
											},
											API_KEY: {
												type: "string",
											},
											PUBLIC_KEYS_WITH_EXPIRY: {
												type: "object",
												properties: {
													"613cdacb4adb6758a0a8141d8459da61fae2f9f8": {
														type: "string",
													},
													"12e50b2d16b39ea42650a0e798054a88518606a4": {
														type: "string",
													},
												},
											},
											TECHNICAL_ACCOUNT_ID: {
												type: "string",
											},
											TECHNICAL_ACCOUNT_EMAIL: {
												type: "string",
											},
										},
									},
								},
							},
						},
					},
					error_handling: {},
					properties: {
						scope: {
							type: "string",
							value: "Account",
						},
						default_value: {
							type: "null",
							value: null,
						},
						key: {
							type: "string",
							value: "adobeStockSolutionData-{$.env.solution_instance_id or:'adobeSolutionID'}",
						},
					},
				},
				"storage-8": {
					title: "Store Page Number",
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
						key: {
							type: "string",
							value: "pageCount",
						},
						value: {
							type: "jsonpath",
							value: "$.steps.math-helpers-2.result",
						},
					},
				},
				"call-workflow-1": {
					title: "Get Auth Token",
					connector: {
						name: "call-workflow",
						version: "2.0",
					},
					operation: "fire_and_wait_for_response",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							response: {
								type: "string",
							},
							"#workspace_id_hash": {
								type: "string",
							},
							"#username_hash": {
								type: "string",
							},
							"#workflow_title": {
								type: "string",
							},
							"#execution_uuid": {
								type: "string",
							},
							"#execution_start_time": {
								type: "string",
							},
							"#execution_log_url": {
								type: "string",
							},
							"#organization_uuid": {
								type: "string",
							},
							"#datapot_id_hash": {
								type: "string",
							},
							"#workflow_uuid": {
								type: "string",
							},
						},
					},
					error_handling: {},
					properties: {
						workflow_id: {
							type: "string",
							value: "fcf0e374-03b6-4a00-8221-24f648d15cd3",
						},
						trigger_input: {
							type: "object",
							value: {
								data: {
									type: "string",
									value: "hello world",
								},
							},
						},
					},
				},
				"date-time-helpers-4": {
					title: "Time for killSwitch ?",
					connector: {
						name: "date-time-helpers",
						version: "3.0",
					},
					operation: "compare_dates",
					output_schema: {},
					error_handling: {},
					properties: {
						comparison: {
							type: "string",
							value: "IS AFTER",
						},
						resolution: {
							type: "string",
							value: "",
						},
						date_a: {
							type: "jsonpath",
							value: "$.steps.date-time-helpers-3.result",
						},
						date_b: {
							type: "jsonpath",
							value: "$.steps.date-time-helpers-2.result",
						},
					},
				},
				"loop-1": {
					title: "Loop Until Broken",
					connector: {
						name: "loop",
						version: "1.3",
					},
					operation: "loop_forever",
					output_schema: {
						type: "object",
						$schema: "http://json-schema.org/draft-03/schema",
						id: "http://jsonschema.net",
						properties: {
							index: {
								type: "number",
								id: "http://jsonschema.net/index",
							},
						},
					},
					error_handling: {},
					properties: {},
				},
				"storage-4": {
					title: "Get pageCount",
					connector: {
						name: "storage",
						version: "1.4",
					},
					operation: "get",
					output_schema: {},
					error_handling: {},
					properties: {
						scope: {
							type: "string",
							value: "Current Run",
						},
						default_value: {
							type: "null",
							value: null,
						},
						key: {
							type: "string",
							value: "pageCount",
						},
					},
				},
				"storage-11": {
					title: "Save Key to syncKeyArray",
					connector: {
						name: "storage",
						version: "1.4",
					},
					operation: "append_to_list",
					output_schema: {},
					error_handling: {},
					properties: {
						scope: {
							type: "string",
							value: "Current Run",
						},
						key: {
							type: "string",
							value: "syncKeyArray",
						},
						value: {
							type: "string",
							value: "assetsSyncList-{$.env.solution_instance_id or:'adobeSolutionID'}-{$.steps.loop-1.index}",
						},
						create_if_missing: {
							value: true,
							type: "boolean",
						},
					},
				},
				"math-helpers-2": {
					title: "Add Page Number",
					connector: {
						name: "math-helpers",
						version: "2.0",
					},
					operation: "add",
					output_schema: {},
					error_handling: {},
					properties: {
						first_value: {
							type: "jsonpath",
							value: "$.steps.storage-4.value",
						},
						second_value: {
							value: 1,
							type: "integer",
						},
					},
				},
				"storage-15": {
					title: "Store waitingRoomID",
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
						key: {
							type: "string",
							value: "waitingRoomID",
						},
						value: {
							type: "jsonpath",
							value: "$.steps.call-workflow-2.response",
							fallback: {
								type: "string",
								value: "",
							},
						},
					},
				},
				"script-4": {
					title: "Check Key Size",
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
											value: "syncKey",
										},
										value: {
											type: "jsonpath",
											value: "$.steps.storage-16.value",
										},
									},
								},
							],
						},
						script: {
							type: "string",
							value: "// You can reference the input variables using input.NAME\n// Parsed JSON files could be referenced as fileInput\nexports.step = function(input, fileInput) {\n\treturn JSON.stringify(input.syncKey).length;\n};",
						},
						file_output: {
							type: "boolean",
							value: false,
						},
					},
				},
				"boolean-condition-8": {
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
											type: "jsonpath",
											value: "$.config.waitingRoom",
										},
										comparison_type: {
											type: "string",
											value: "===",
										},
										value2: {
											type: "boolean",
											value: true,
										},
									},
								},
								{
									type: "object",
									value: {
										comparison_type: {
											type: "string",
											value: "===",
										},
										is_case_sensitive: {
											type: "boolean",
											value: false,
										},
										value1: {
											type: "jsonpath",
											value: "$.steps.storage-18.value",
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
				"storage-7": {
					title: "Load Asset List by Key",
					connector: {
						name: "storage",
						version: "1.4",
					},
					operation: "get",
					output_schema: {},
					error_handling: {},
					properties: {
						scope: {
							type: "string",
							value: "Current Run",
						},
						key: {
							type: "string",
							value: "assetsSyncList-{$.env.solution_instance_id or:'adobeSolutionID'}-{$.steps.loop-1.index}",
						},
						default_value: {
							type: "array",
							value: [],
						},
					},
				},
				"http-client-1": {
					title: "Get Licensed Assets",
					connector: {
						name: "http-client",
						version: "5.5",
					},
					operation: "get_request",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							response: {
								type: "object",
								properties: {
									status_code: {
										type: "number",
									},
									headers: {
										type: "object",
										properties: {
											server: {
												type: "string",
											},
											date: {
												type: "string",
											},
											"content-type": {
												type: "string",
											},
											"transfer-encoding": {
												type: "string",
											},
											connection: {
												type: "string",
											},
											expires: {
												type: "string",
											},
											"cache-control": {
												type: "string",
											},
											pragma: {
												type: "string",
											},
											"x-request-id": {
												type: "string",
											},
											"access-control-allow-methods": {
												type: "string",
											},
											"access-control-allow-origin": {
												type: "string",
											},
											"access-control-expose-headers": {
												type: "string",
											},
											"access-control-allow-credentials": {
												type: "string",
											},
											"access-control-max-age": {
												type: "string",
											},
											allow: {
												type: "string",
											},
											"x-content-type-options": {
												type: "string",
											},
											"x-xss-protection": {
												type: "string",
											},
											"accept-ranges": {
												type: "string",
											},
											via: {
												type: "string",
											},
											"x-served-by": {
												type: "string",
											},
											"x-cache": {
												type: "string",
											},
											"x-cache-hits": {
												type: "string",
											},
											"x-timer": {
												type: "string",
											},
											vary: {
												type: "string",
											},
										},
									},
									body: {
										type: "object",
										properties: {
											nb_results: {
												type: "number",
											},
											files: {
												type: "array",
												items: {
													type: "object",
													properties: {
														license: {
															type: "string",
														},
														license_date: {
															type: "string",
														},
														download_url: {
															type: "string",
														},
														id: {
															type: "number",
														},
														title: {
															type: "string",
														},
														creator_name: {
															type: "string",
														},
														creator_id: {
															type: "number",
														},
														content_url: {
															type: "string",
														},
														media_type_id: {
															type: "number",
														},
														vector_type: {
															type: "null",
														},
														content_type: {
															type: "string",
														},
														height: {
															type: "number",
														},
														width: {
															type: "number",
														},
														details_url: {
															type: "string",
														},
													},
													required: ["license", "license_date", "download_url", "id", "title", "creator_name", "creator_id", "content_url", "media_type_id", "vector_type", "content_type", "height", "width", "details_url"],
												},
											},
										},
									},
								},
							},
						},
					},
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
						url: {
							type: "string",
							value: "https://stock.adobe.io/Rest/Libraries/1/Member/LicenseHistory",
						},
						headers: {
							type: "array",
							value: [
								{
									type: "object",
									value: {
										key: {
											type: "string",
											value: "x-api-key",
										},
										value: {
											type: "jsonpath",
											value: "$.steps.storage-3.value.stockCredentials.API_KEY",
										},
									},
								},
								{
									type: "object",
									value: {
										key: {
											type: "string",
											value: "X-Product",
										},
										value: {
											type: "string",
											value: "BynderSync",
										},
									},
								},
								{
									type: "object",
									value: {
										key: {
											type: "string",
											value: "Authorization",
										},
										value: {
											type: "string",
											value: "Bearer {$.steps.call-workflow-1.response}",
										},
									},
								},
							],
						},
						queries: {
							type: "array",
							value: [
								{
									type: "object",
									value: {
										key: {
											type: "string",
											value: "search_parameters[limit]",
										},
										value: {
											type: "string",
											value: "50",
										},
									},
								},
								{
									type: "object",
									value: {
										key: {
											type: "string",
											value: "search_parameters[offset]",
										},
										value: {
											type: "jsonpath",
											value: "$.steps.math-helpers-1.result",
										},
									},
								},
								{
									type: "object",
									value: {
										key: {
											type: "string",
											value: "all",
										},
										value: {
											type: "jsonpath",
											value: "$.config.syncOrganization",
										},
									},
								},
							],
						},
					},
				},
				"boolean-condition-7": {
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
											type: "jsonpath",
											value: "$.steps.logic-helpers-1.result",
										},
										comparison_type: {
											type: "string",
											value: "===",
										},
										value2: {
											type: "boolean",
											value: true,
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
				"list-helpers-1": {
					title: "Count Licensed Assets",
					connector: {
						name: "list-helpers",
						version: "2.1",
					},
					operation: "count_items",
					output_schema: {},
					error_handling: {},
					properties: {
						list: {
							type: "jsonpath",
							value: "$.steps.http-client-1.response.body.files",
						},
					},
				},
				"http-client-5": {
					title: "Get Asset Metadata",
					connector: {
						name: "http-client",
						version: "5.5",
					},
					operation: "get_request",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							response: {
								type: "object",
								properties: {
									status_code: {
										type: "number",
									},
									headers: {
										type: "object",
										properties: {
											server: {
												type: "string",
											},
											date: {
												type: "string",
											},
											"content-type": {
												type: "string",
											},
											"transfer-encoding": {
												type: "string",
											},
											connection: {
												type: "string",
											},
											expires: {
												type: "string",
											},
											"cache-control": {
												type: "string",
											},
											pragma: {
												type: "string",
											},
											"x-request-id": {
												type: "string",
											},
											"access-control-allow-methods": {
												type: "string",
											},
											"access-control-allow-origin": {
												type: "string",
											},
											"access-control-expose-headers": {
												type: "string",
											},
											"access-control-allow-credentials": {
												type: "string",
											},
											"access-control-max-age": {
												type: "string",
											},
											allow: {
												type: "string",
											},
											"x-content-type-options": {
												type: "string",
											},
											"x-xss-protection": {
												type: "string",
											},
											"accept-ranges": {
												type: "string",
											},
											via: {
												type: "string",
											},
											"x-served-by": {
												type: "string",
											},
											"x-cache": {
												type: "string",
											},
											"x-cache-hits": {
												type: "string",
											},
											"x-timer": {
												type: "string",
											},
											vary: {
												type: "string",
											},
										},
									},
									body: {
										type: "object",
										properties: {
											files: {
												type: "array",
												items: {
													type: "object",
													properties: {
														id: {
															type: "number",
														},
														title: {
															type: "string",
														},
														keywords: {
															type: "array",
															items: {
																type: "object",
																properties: {
																	name: {
																		type: "string",
																	},
																},
																required: ["name"],
															},
														},
													},
													required: ["id", "title", "keywords"],
												},
											},
										},
									},
								},
							},
						},
					},
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
						url: {
							type: "string",
							value: "https://stock.adobe.io/Rest/Media/1/Files?&result_columns[]=id&result_columns[]=keywords&result_columns[]=title{$.steps.storage-3.value.metapropertyMapping.queryString}",
						},
						headers: {
							type: "array",
							value: [
								{
									type: "object",
									value: {
										key: {
											type: "string",
											value: "x-api-key",
										},
										value: {
											type: "jsonpath",
											value: "$.steps.storage-3.value.stockCredentials.API_KEY",
										},
									},
								},
								{
									type: "object",
									value: {
										key: {
											type: "string",
											value: "X-Product",
										},
										value: {
											type: "string",
											value: "BynderSync",
										},
									},
								},
								{
									type: "object",
									value: {
										key: {
											type: "string",
											value: "Authorization",
										},
										value: {
											type: "string",
											value: "Bearer {$.steps.call-workflow-1.response}",
										},
									},
								},
							],
						},
						queries: {
							type: "array",
							value: [
								{
									type: "object",
									value: {
										key: {
											type: "string",
											value: "ids",
										},
										value: {
											type: "jsonpath",
											value: "$.steps.json-transformer-2.result",
										},
									},
								},
							],
						},
					},
				},
				"math-helpers-1": {
					title: "Set Page Offset",
					connector: {
						name: "math-helpers",
						version: "2.0",
					},
					operation: "multiply",
					output_schema: {},
					error_handling: {},
					properties: {
						first_value: {
							type: "jsonpath",
							value: "$.steps.storage-4.value",
						},
						second_value: {
							value: 50,
							type: "integer",
						},
					},
				},
				"storage-10": {
					title: "Save Key to syncKeyArray",
					connector: {
						name: "storage",
						version: "1.4",
					},
					operation: "append_to_list",
					output_schema: {},
					error_handling: {},
					properties: {
						scope: {
							type: "string",
							value: "Current Run",
						},
						key: {
							type: "string",
							value: "syncKeyArray",
						},
						value: {
							type: "string",
							value: "assetsSyncList-{$.env.solution_instance_id or:'adobeSolutionID'}-{$.steps.loop-1.index}",
						},
						create_if_missing: {
							value: true,
							type: "boolean",
						},
					},
				},
				"break-loop-2": {
					title: "Break All",
					connector: {
						name: "break-loop",
						version: "1.1",
					},
					operation: "break",
					output_schema: {},
					error_handling: {},
					properties: {},
				},
				"call-workflow-5": {
					title: "Call Workflow",
					connector: {
						name: "call-workflow",
						version: "2.0",
					},
					operation: "fire_and_forget",
					output_schema: {},
					error_handling: {},
					properties: {
						workflow_id: {
							type: "string",
							value: "c3edf88b-310e-4028-bb93-698ff5deb176",
						},
						trigger_input: {
							type: "object",
							value: {
								assetData: {
									type: "jsonpath",
									value: "$.steps.loop-4.value",
								},
								waitingRoomID: {
									type: "jsonpath",
									value: "$.steps.storage-18.value",
								},
								fileName: {
									type: "string",
									value: "Adobe Stock {$.steps.loop-4.value.id}.{$.steps.data-mapper-1.output}",
								},
								solutionData: {
									type: "jsonpath",
									value: "$.steps.storage-3.value",
								},
								bearerToken: {
									type: "jsonpath",
									value: "$.steps.call-workflow-1.response",
								},
								metaPropertyMap: {
									type: "jsonpath",
									value: "$.steps.script-5.result",
								},
							},
						},
					},
				},
				"storage-14": {
					title: "Get syncList",
					connector: {
						name: "storage",
						version: "1.4",
					},
					operation: "get",
					output_schema: {},
					error_handling: {},
					properties: {
						scope: {
							type: "string",
							value: "Account",
						},
						key: {
							type: "string",
							value: "adobeStockSyncList-{$.env.solution_instance_id or:'adobeSolutionID'}",
						},
						default_value: {
							type: "null",
							value: null,
						},
					},
				},
				"logic-helpers-1": {
					title: "Logic Helpers",
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
								value1: {
									type: "jsonpath",
									value: "$.steps.loop-4.value.content_type",
								},
								condition: {
									type: "string",
									value: "===",
								},
								value2: {
									type: "string",
									value: "video/mp4",
								},
							},
						},
						initial_not: {
							type: "boolean",
							value: false,
						},
						further_conditions: {
							type: "array",
							value: [
								{
									type: "object",
									value: {
										not: {
											type: "boolean",
											value: false,
										},
										conjunction: {
											type: "string",
											value: "AND",
										},
										value1: {
											type: "jsonpath",
											value: "$.config.syncVideo",
										},
										condition: {
											type: "string",
											value: "===",
										},
										value2: {
											type: "boolean",
											value: true,
										},
									},
								},
							],
						},
						further_groups: {
							type: "array",
							value: [
								{
									type: "object",
									value: {
										initial_condition: {
											type: "object",
											value: {
												not: {
													type: "boolean",
													value: false,
												},
												value1: {
													type: "jsonpath",
													value: "$.steps.loop-4.value.content_type",
												},
												condition: {
													type: "string",
													value: "===",
												},
												value2: {
													type: "string",
													value: "video/quicktime",
												},
											},
										},
										group_not: {
											type: "boolean",
											value: false,
										},
										conjunction: {
											type: "string",
											value: "OR",
										},
										further_conditions: {
											type: "array",
											value: [
												{
													type: "object",
													value: {
														not: {
															type: "boolean",
															value: false,
														},
														conjunction: {
															type: "string",
															value: "AND",
														},
														value1: {
															type: "jsonpath",
															value: "$.config.syncVideo",
														},
														condition: {
															type: "string",
															value: "===",
														},
														value2: {
															type: "boolean",
															value: true,
														},
													},
												},
											],
										},
									},
								},
								{
									type: "object",
									value: {
										initial_condition: {
											type: "object",
											value: {
												not: {
													type: "boolean",
													value: false,
												},
												value1: {
													type: "jsonpath",
													value: "$.steps.loop-4.value.content_type",
												},
												condition: {
													type: "string",
													value: "===",
												},
												value2: {
													type: "string",
													value: "application/illustrator",
												},
											},
										},
										group_not: {
											type: "boolean",
											value: false,
										},
										conjunction: {
											type: "string",
											value: "OR",
										},
										further_conditions: {
											type: "array",
											value: [
												{
													type: "object",
													value: {
														not: {
															type: "boolean",
															value: false,
														},
														conjunction: {
															type: "string",
															value: "AND",
														},
														value1: {
															type: "jsonpath",
															value: "$.config.syncVector",
														},
														condition: {
															type: "string",
															value: "===",
														},
														value2: {
															type: "boolean",
															value: true,
														},
													},
												},
											],
										},
									},
								},
								{
									type: "object",
									value: {
										initial_condition: {
											type: "object",
											value: {
												not: {
													type: "boolean",
													value: false,
												},
												value1: {
													type: "jsonpath",
													value: "$.steps.loop-4.value.content_type",
												},
												condition: {
													type: "string",
													value: "===",
												},
												value2: {
													type: "string",
													value: "application/postscript",
												},
											},
										},
										group_not: {
											type: "boolean",
											value: false,
										},
										conjunction: {
											type: "string",
											value: "OR",
										},
										further_conditions: {
											type: "array",
											value: [
												{
													type: "object",
													value: {
														not: {
															type: "boolean",
															value: false,
														},
														conjunction: {
															type: "string",
															value: "AND",
														},
														value1: {
															type: "jsonpath",
															value: "$.config.syncVector",
														},
														condition: {
															type: "string",
															value: "===",
														},
														value2: {
															type: "boolean",
															value: true,
														},
													},
												},
											],
										},
									},
								},
								{
									type: "object",
									value: {
										initial_condition: {
											type: "object",
											value: {
												not: {
													type: "boolean",
													value: false,
												},
												value1: {
													type: "jsonpath",
													value: "$.steps.loop-4.value.content_type",
												},
												condition: {
													type: "string",
													value: "===",
												},
												value2: {
													type: "string",
													value: "image/jpeg",
												},
											},
										},
										group_not: {
											type: "boolean",
											value: false,
										},
										conjunction: {
											type: "string",
											value: "OR",
										},
									},
								},
							],
						},
					},
				},
				"loop-4": {
					title: "Loop Collection",
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
								type: "object",
								properties: {
									keywords: {
										type: "array",
										items: {
											type: "string",
										},
									},
									content_type: {
										type: "string",
									},
									download_url: {
										type: "string",
									},
									country_name: {
										type: "string",
									},
									description: {
										type: "null",
									},
									marketing_text: {
										type: "null",
									},
									id: {
										type: "number",
									},
									title: {
										type: "string",
									},
								},
								required: ["keywords", "content_type", "download_url", "country_name", "description", "marketing_text", "id", "title"],
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
							type: "jsonpath",
							value: "$.steps.storage-13.value",
						},
					},
				},
				"storage-13": {
					title: "Load syncKey",
					connector: {
						name: "storage",
						version: "1.4",
					},
					operation: "get",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							value: {
								type: "array",
								items: {
									type: "object",
									properties: {
										keywords: {
											type: "array",
											items: {
												type: "string",
											},
										},
										content_type: {
											type: "string",
										},
										download_url: {
											type: "string",
										},
										country_name: {
											type: "string",
										},
										description: {
											type: "null",
										},
										marketing_text: {
											type: "null",
										},
										id: {
											type: "number",
										},
										title: {
											type: "string",
										},
									},
									required: ["keywords", "content_type", "download_url", "country_name", "description", "marketing_text", "id", "title"],
								},
							},
						},
					},
					error_handling: {},
					properties: {
						scope: {
							type: "string",
							value: "Current Run",
						},
						default_value: {
							type: "null",
							value: null,
						},
						key: {
							type: "jsonpath",
							value: "$.steps.loop-3.value",
						},
					},
				},
				"storage-18": {
					title: "Get waitingRoomID",
					connector: {
						name: "storage",
						version: "1.4",
					},
					operation: "get",
					output_schema: {},
					error_handling: {},
					properties: {
						scope: {
							type: "string",
							value: "Current Run",
						},
						key: {
							type: "string",
							value: "waitingRoomID",
						},
						default_value: {
							type: "null",
							value: null,
						},
					},
				},
				"boolean-condition-6": {
					title: "All Removed ?  GoTo Next",
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
											type: "jsonpath",
											value: "$.steps.script-2.result",
										},
										comparison_type: {
											type: "string",
											value: "===",
										},
										value2: {
											type: "array",
											value: [],
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
				"date-time-helpers-1": {
					title: "Get Current Time",
					connector: {
						name: "date-time-helpers",
						version: "3.0",
					},
					operation: "current_timestamp",
					output_schema: {},
					error_handling: {},
					properties: {
						timezone: {
							type: "string",
							value: "PST8PDT",
						},
						format: {
							type: "object",
							value: {
								existing_format: {
									type: "string",
									value: "X",
								},
							},
						},
					},
				},
				"loop-2": {
					title: "Loop Until Key is Full",
					connector: {
						name: "loop",
						version: "1.3",
					},
					operation: "loop_forever",
					output_schema: {
						type: "object",
						$schema: "http://json-schema.org/draft-03/schema",
						id: "http://jsonschema.net",
						properties: {
							index: {
								type: "number",
								id: "http://jsonschema.net/index",
							},
						},
					},
					error_handling: {},
					properties: {},
				},
				"break-loop-1": {
					title: "Break Loop 1 if List = 0",
					connector: {
						name: "break-loop",
						version: "1.1",
					},
					operation: "break",
					output_schema: {},
					error_handling: {},
					properties: {},
				},
				"storage-6": {
					title: "Save Asset Data to Key",
					connector: {
						name: "storage",
						version: "1.4",
					},
					operation: "append_to_list",
					output_schema: {},
					error_handling: {},
					properties: {
						scope: {
							type: "string",
							value: "Current Run",
						},
						key: {
							type: "string",
							value: "assetsSyncList-{$.env.solution_instance_id or:'adobeSolutionID'}-{$.steps.loop-1.index}",
						},
						value: {
							type: "jsonpath",
							value: "$.steps.script-1.result",
						},
						create_if_missing: {
							value: true,
							type: "boolean",
						},
					},
				},
				"json-transformer-4": {
					title: "Compactify Metadata",
					connector: {
						name: "json-transformer",
						version: "1.0",
					},
					operation: "transform",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							result: {
								type: "array",
								items: {
									type: "object",
									properties: {
										id: {
											type: "number",
										},
										title: {
											type: "string",
										},
									},
									required: ["id", "title"],
								},
							},
						},
					},
					error_handling: {},
					properties: {
						data: {
							type: "object",
							value: {
								response: {
									type: "jsonpath",
									value: "$.steps.http-client-5.response",
								},
							},
						},
						query: {
							type: "jsonpath",
							value: "$.steps.storage-3.value.metapropertyMapping.metaString",
						},
					},
				},
				"script-2": {
					title: "Remove Sync'd and Unsupported",
					connector: {
						name: "script",
						version: "3.3",
					},
					operation: "execute",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							result: {
								type: "array",
								items: {
									type: "object",
									properties: {
										keywords: {
											type: "array",
											items: {
												type: "string",
											},
										},
										content_type: {
											type: "string",
										},
										download_url: {
											type: "string",
										},
										country_name: {
											type: "string",
										},
										description: {
											type: ["null", "string"],
										},
										marketing_text: {
											type: "null",
										},
										id: {
											type: "number",
										},
										title: {
											type: "string",
										},
									},
									required: ["keywords", "content_type", "download_url", "country_name", "description", "marketing_text", "id", "title"],
								},
							},
							console: {
								type: "array",
								items: {},
							},
						},
					},
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
											value: "syncedAssets",
										},
										value: {
											type: "jsonpath",
											value: "$.steps.storage-14.value",
										},
									},
								},
								{
									type: "object",
									value: {
										name: {
											type: "string",
											value: "fileList",
										},
										value: {
											type: "jsonpath",
											value: "$.steps.http-client-1.response.body.files",
										},
									},
								},
								{
									type: "object",
									value: {
										name: {
											type: "string",
											value: "syncVideo",
										},
										value: {
											type: "jsonpath",
											value: "$.config.syncVideo",
										},
									},
								},
								{
									type: "object",
									value: {
										name: {
											type: "string",
											value: "syncVector",
										},
										value: {
											type: "jsonpath",
											value: "$.config.syncVector",
										},
									},
								},
							],
						},
						script: {
							type: "string",
							value:
								'exports.step = function (input) {\n  let fileList = input.fileList;\n  const syncedAssets = input.syncedAssets;\n  for (var i = 0; i < fileList.length; i++) {\n    var obj = fileList[i];\n\n    if (syncedAssets.indexOf(obj.id) !== -1) {\n      fileList.splice(i, 1);\n      i--;\n    }\n  }\n  const result = fileList.filter((obj) => {\n    if (input.syncVideo === false && input.syncVector === false) {\n      return obj.content_type === "image/jpeg";\n    } else if (input.syncVideo === true && input.syncVector === false) {\n      return (\n        obj.content_type === "image/jpeg" ||\n        obj.content_type === "video/mp4" ||\n        obj.content_type === "video/quicktime"\n      );\n    } else if (input.syncVideo === false && input.syncVector === true) {\n      return (\n        obj.content_type === "image/jpeg" ||\n        obj.content_type === "application/postscript" ||\n        obj.content_type === "application/illustrator"\n      );\n    } else if (input.syncVideo === true && input.syncVector === true) {\n      return (\n        obj.content_type === "image/jpeg" ||\n        obj.content_type === "video/mp4" ||\n        obj.content_type === "video/quicktime" ||\n        obj.content_type === "application/postscript" ||\n        obj.content_type === "application/illustrator"\n      );\n    }\n  });\n  return result;\n};',
						},
						file_output: {
							type: "boolean",
							value: false,
						},
					},
				},
				"boolean-condition-3": {
					title: "Break When Key is Full",
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
											type: "jsonpath",
											value: "$.steps.script-4.result",
										},
										comparison_type: {
											type: "string",
											value: "<=",
										},
										value2: {
											type: "number",
											value: 200000,
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
				"date-time-helpers-2": {
					title: "Calc killSwitch",
					connector: {
						name: "date-time-helpers",
						version: "3.0",
					},
					operation: "plus",
					output_schema: {},
					error_handling: {},
					properties: {
						years: {
							type: "integer",
							value: 0,
						},
						months: {
							type: "integer",
							value: 0,
						},
						weeks: {
							type: "integer",
							value: 0,
						},
						days: {
							type: "integer",
							value: 0,
						},
						business_days: {
							type: "integer",
							value: 0,
						},
						hours: {
							type: "integer",
							value: 1,
						},
						minutes: {
							type: "integer",
							value: 45,
						},
						seconds: {
							type: "integer",
							value: 0,
						},
						date: {
							type: "jsonpath",
							value: "$.steps.date-time-helpers-1.result",
						},
					},
				},
				"json-transformer-1": {
					title: "Compactify Asset List",
					connector: {
						name: "json-transformer",
						version: "1.0",
					},
					operation: "transform",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							result: {
								type: "array",
								items: {
									type: "object",
									properties: {
										title: {
											type: "string",
										},
										download_url: {
											type: "string",
										},
										id: {
											type: "number",
										},
										content_type: {
											type: "string",
										},
									},
									required: ["title", "download_url", "id", "content_type"],
								},
							},
						},
					},
					error_handling: {},
					properties: {
						data: {
							type: "object",
							value: {
								result: {
									type: "jsonpath",
									value: "$.steps.script-2.result",
								},
							},
						},
						query: {
							type: "string",
							value: '[result.{\n     "title": title,\n     "download_url": download_url,\n     "id": id,\n     "content_type": content_type\n }]',
						},
					},
				},
				trigger: {
					title: "Callable Trigger",
					connector: {
						name: "callable-trigger",
						version: "2.0",
					},
					operation: "trigger",
					output_schema: {},
					error_handling: {},
					properties: {},
				},
			},
			dependencies: [
				{
					id: "934452a0-e531-415b-88bb-34a0422e26e8",
					name: "[Adobe Stock v2] Bynder Upload / Respond",
				},
				{
					id: "c3edf88b-310e-4028-bb93-698ff5deb176",
					name: "[Adobe Stock v2] Bynder Uploader",
				},
				{
					id: "fcf0e374-03b6-4a00-8221-24f648d15cd3",
					name: "[Adobe Stock v2] Client Credential Token",
				},
			],
		},
	],
	projects: [],
};

const views = ``;

const badCharacters = ["[", "]"];

const model = ``;

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
	let res = `model {
	properties {
		"structurizr.groupSeparator" "/"
	}
	workflow = softwareSystem "${importJSON.workflows[0].title.replace(/[^a-zA-Z0-9 ]/g, "")}" {
	`;
	importArray.forEach((element) => {
		if (element.type === "loop") {
			res = res + loopHandle(element.content._loop, element.name);
		} else if (element.type === "branch") {
			//Object.keys(element.content).forEach((el) => {
			//	res = res + branchHandle(el);
			//});
		} else {
			res = res + nodeStructure(element);
		}
	});
	res = `${res}}`;
	return res;
};

const structure = function (importArray, groups) {
	let res = [];
	importArray.forEach((element) => {
		if (Object.keys(element.content).length === 0) {
			res.push(nodeStructure(element, groups));
		} else if (element.type === "loop") {
			res.push({
				branches: loopHandle(element, groups),
			});
		} else if (element.type === "branch") {
			res.push({
				branches: branchHandle(element, groups),
			});
		}
	});
	return res;
};

const loopHandle = function (ary, name) {
	let res = `	${name.replace(/[^a-zA-Z0-9 ]/g, "")} = group "${groups.find((s) => s.name === name).desc.replace(/[^a-zA-Z0-9 ]/g, "")}" {
		`;
	ary.forEach((element) => {
		if (element.type === "loop") {
			res = `${res}` + `${loopHandle(element.content._loop, element.name)}`;
		} else if (element.type === "branch") {
			//Object.keys(element.content).forEach((el) => {
			//	res = res + branchHandle(el);
			//});
		} else {
			res = res + nodeStructure(element);
		}
	});
	res = `${res}
}`;
	return res;
};

const branchHandle = function (obj, groups) {
	let path = nodeStructure(obj, groups);
	Object.keys(obj.content).forEach((element) => {
		path[element] = structure(obj.content[element], groups);
	});
	return path;
};

const nodeStructure = function (obj) {
	console.log(obj);
	let res = `	${obj.name.replace(/[^a-zA-Z0-9 ]/g, "")} = container "${groups.find((s) => s.name === obj.name).desc.replace(/[^a-zA-Z0-9 ]/g, "")}"
	`;

	//res.title = `${groups.find((s) => s.name === obj.name).desc} - ${groups.find((s) => s.name === obj.name).name}`;
	//res.type = groups.find((s) => s.name === obj.name).type;

	return res;
};

const groupString = function (ary) {
	let res = "";
	for (let i = 0; i < ary.length; i++) {
		if (ary[i].branches === undefined) {
			//console.log(ary[i]);
			res = res + `${ary[i].title} [icon: lookupIcon]\n`;
		} else if (ary[i].branches.type === "loop") {
			//console.log(ary[i]);
			res = res + `${ary[i].branches.title} [icon: lookupIcon]{\n ${groupString(ary[i].branches.loop)}}\n`;
		} else if (ary[i].branches.type === "boolean-condition") {
			res = res + `${ary[i].branches.title} [icon: lookupIcon]{\n ${groupString(ary[i].branches.true)}}\n`;
		}
	}
	return res;
};

function filterLetters(str, lettersToRemove) {
	lettersToRemove.forEach(function (letter) {
		str = str.replaceAll(letter, "");
	});
	return str;
}

const groups = groupBuilder(importJSON);

/*
const run = function () {
	//console.log(groupBuilder(importJSON));
	console.log(JSON.stringify(structure(importJSON.workflows[0].steps_structure, groupBuilder(importJSON))));
	const groupObject = structure(importJSON.workflows[0].steps_structure, groupBuilder(importJSON));
	const groupStr = groupString(groupObject);
	console.log(groupStr);
};

run();
*/

//console.log(groups);
//console.log(JSON.stringify(modelBuilder(importJSON.workflows[0].steps_structure)));
console.log(modelBuilder(importJSON.workflows[0].steps_structure));

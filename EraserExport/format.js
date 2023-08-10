const importJSON = {
	tray_export_version: 4,
	export_type: "workflow",
	workflows: [
		{
			id: "1dac2f32-96e5-44a1-b64a-bdd9eb4d2283",
			created: "2023-03-06T21:16:06.177760Z",
			workspace_id: "139e4592-3b78-46ad-885b-bc64d04d3bed",
			project_id: "6f8096f2-a1d0-45b8-bb1e-f4e239e3a698",
			group: "ad62ee41-c409-405e-87bf-e383edd7f747",
			creator: "3133b2b7-d139-471f-81ff-3d67396973da",
			version: {
				id: "99157aab-a451-4000-8447-770e06fe2f2f",
				created: "2023-04-04T20:35:52.677210Z",
			},
			title: "Bynder to Marketo",
			enabled: false,
			tags: [],
			settings: {
				config: {
					initial_last_modified_date: "2023-03-21T22:39:24Z",
					marketo_folder: 81,
					bynder_tag_filter: "",
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
								name: "bynder-1",
								type: "normal",
								content: {},
							},
							{
								name: "script-1",
								type: "normal",
								content: {},
							},
							{
								name: "boolean-condition-1",
								type: "branch",
								content: {
									true: [
										{
											name: "loop-2",
											type: "loop",
											content: {
												_loop: [
													{
														name: "bynder-2",
														type: "normal",
														content: {},
													},
													{
														name: "file-helpers-1",
														type: "normal",
														content: {},
													},
													{
														name: "marketo-1",
														type: "normal",
														content: {},
													},
												],
											},
										},
										{
											name: "storage-3",
											type: "normal",
											content: {},
										},
									],
									false: [
										{
											name: "break-loop-1",
											type: "break",
											content: {},
											target: "loop-1",
										},
									],
								},
							},
						],
					},
				},
			],
			steps: {
				"script-1": {
					title: "Format assets for Marketo",
					description: "Grab the needed info from Bynder assets and format for Marketo.",
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
								type: "object",
								properties: {
									bynder_to_marketo: {
										type: "array",
										items: {
											type: "object",
											properties: {
												bynder_id: {
													type: "string",
												},
												name: {
													type: "string",
												},
												description: {
													type: "string",
												},
											},
											required: ["bynder_id", "name", "description"],
										},
									},
									folder: {
										type: "string",
									},
									new_last_modified: {
										type: "object",
										properties: {
											date: {
												type: "string",
											},
											id: {
												type: "string",
											},
										},
									},
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
											value: "bynder_assets",
										},
										value: {
											type: "jsonpath",
											value: "$.steps.bynder-1.media",
										},
									},
								},
								{
									type: "object",
									value: {
										name: {
											type: "string",
											value: "last_modified",
										},
										value: {
											type: "jsonpath",
											value: "$.steps.storage-1.value",
										},
									},
								},
								{
									type: "object",
									value: {
										name: {
											type: "string",
											value: "folder_id",
										},
										value: {
											type: "jsonpath",
											value: "$.config.marketo_folder",
										},
									},
								},
							],
						},
						script: {
							type: "string",
							value:
								'/**\n * Script use to parse the Bynder assets into an array for uploading to Marketo.\n * \n * @param {Object} input - contains the following properties from the workflow:\n * @param {Array} input.bynder_assets - collection of Bynder assets that has been created/changed since the last sync\n * @param {Object} input.last_modified - contains the dateModified and id of the last Bynder asset processed\n * @param {number} input.folder_id - Marketo folder where the Bynder assets will be uploaded\n *\n * @param {*} fileInput - not used\n * \n * @returns {Object} - contains the following:\n *  - {Array} bynder_to_marketo - collection of Bynder assets that need to be sent to Marketo\n *  - {string} folder - stringify\'d JSON object of the folder for Marketo \n *  - {Object} new_last_modified - object that contains the dateModified and id of the last Bynder asset for the current page\n */\nexports.step = function(input, fileInput) {\n  const last_modified = input.last_modified;\n  // default new last modified won\'t be used if there are no other assets to process\n  let new_last_modified = { date: "", id: "" };\n  \n  const bynder_to_marketo = [];\n  // loop bynder assets\n  _.forEach(input.bynder_assets, function(a) {\n    // if the asset\'s dateModified and id match what was last synced then it will be skipped\n    if (a.dateModified != last_modified.date || a.id != last_modified.id) {\n      // set new last asset info\n      new_last_modified = { date: a.dateModified, id: a.id };\n      \n      const data = {};\n      data["bynder_id"] = a.id;\n      \n      // formatting the file name with the Bynder asset ID and adding the extension\n      // the Bynder asset ID will help make the file unique in Marketo so it isn\'t overwritten incorrectly\n      data["name"] = `${a.name}_${a.id}.${a.extension[0]}`;\n      \n      // format the Marketo description with a few Bynder asset standard properties\n      const desc = `Created: ${moment(a.dateCreated).format("YYYY-MM-DD")} by ${a.userCreated}\\nPublished: ${moment(a.datePublished).format("YYYY-MM-DD")}\\nCopyright: ${a.copyright}\\n\\n${a.description}`;\n      // Marketo only allows up to 2000 characters\n      data["description"] = desc.substring(0, 2000);\n      \n      bynder_to_marketo.push(data);\n    }\n  });\n  \n  // set Marketo folder where Bynder assets will be uploaded\n  const folder = JSON.stringify({ id: input.folder_id, type: "Folder" });\n  \n  return { bynder_to_marketo, folder, new_last_modified };\n};',
						},
						file_output: {
							type: "boolean",
							value: false,
						},
					},
				},
				"storage-2": {
					title: "[Run] Increment page",
					description: "The first loop will set this to 1 and then add 1 for each loop after. Value is used in the bynder-1 step to page through the assets.",
					connector: {
						name: "storage",
						version: "1.4",
					},
					operation: "atomic_increment",
					output_schema: {},
					error_handling: {},
					properties: {
						scope: {
							type: "string",
							value: "Current Run",
						},
						value_to_add: {
							type: "integer",
							value: 1,
						},
						key: {
							type: "string",
							value: "page",
						},
					},
				},
				"text-helpers-1": {
					title: "Format tags array",
					description: "Format required by the bynder-1 step even if it is empty or only one tag. Configured to support multiple tags if a comma is used.",
					connector: {
						name: "text-helpers",
						version: "3.0",
					},
					operation: "split",
					output_schema: {},
					error_handling: {},
					properties: {
						text: {
							type: "jsonpath",
							value: "$.config.bynder_tag_filter",
							fallback: {
								value: "",
								type: "string",
							},
						},
						split_by: {
							type: "string",
							value: ",",
						},
					},
				},
				"bynder-2": {
					title: "Download asset",
					connector: {
						name: "bynder",
						version: "2.0",
					},
					operation: "raw_http_request",
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
											"content-type": {
												type: "string",
											},
											"content-length": {
												type: "string",
											},
											connection: {
												type: "string",
											},
											vary: {
												type: "string",
											},
											date: {
												type: "string",
											},
											server: {
												type: "string",
											},
											"cache-control": {
												type: "string",
											},
											"set-cookie": {
												type: "array",
												items: {
													type: "string",
												},
											},
											"x-frame-options": {
												type: "string",
											},
											"access-control-allow-origin": {
												type: "string",
											},
											"access-control-allow-credentials": {
												type: "string",
											},
											"access-control-allow-methods": {
												type: "string",
											},
											"access-control-allow-headers": {
												type: "string",
											},
											"x-cache": {
												type: "string",
											},
											via: {
												type: "string",
											},
											"x-amz-cf-pop": {
												type: "string",
											},
											"x-amz-cf-id": {
												type: "string",
											},
										},
									},
									body: {
										type: "object",
										properties: {
											s3_file: {
												type: "string",
											},
										},
									},
								},
							},
						},
					},
					error_handling: {},
					authentication: {
						group: "9172b5ce-7198-4a32-9ef9-fccb0ecf66e9",
						title: "Lynton Web's bynder account",
						service_icon: {
							icon_type: "url",
							value: "//s3.amazonaws.com/images.tray.io/artisan/icons/55fdd831638972b19fec6bc4a2da6784.png",
						},
						scopes: ["asset:write", "meta.assetbank:read", "asset:read", "meta.assetbank:write", "offline"],
						service_name: "bynder",
						service_version: 2,
					},
					properties: {
						method: {
							type: "string",
							value: "GET",
						},
						include_raw_body: {
							type: "boolean",
							value: false,
						},
						parse_response: {
							type: "string",
							value: "true",
						},
						url: {
							type: "object",
							value: {
								endpoint: {
									type: "string",
									value: "/v4/media/{$.steps.loop-2.value.bynder_id}/download/",
								},
							},
						},
						body: {
							type: "object",
							value: {
								none: {
									type: "null",
									value: null,
								},
							},
						},
					},
				},
				"storage-3": {
					title: "[Acc] Set last modified",
					description: '"env.solution_instance_id"_bynder_last_modified_to_marketo',
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
							value: "Account",
						},
						key: {
							type: "string",
							value: "{$.env.solution_instance_id or:'dev'}_bynder_last_modified_to_marketo",
						},
						value: {
							type: "jsonpath",
							value: "$.steps.script-1.result.new_last_modified",
						},
					},
				},
				"loop-1": {
					title: "Loop paging",
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
				"boolean-condition-1": {
					title: "bynder_to_marketo has data?",
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
											value: "$.steps.script-1.result.bynder_to_marketo",
										},
										comparison_type: {
											type: "string",
											value: "!==",
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
				"bynder-1": {
					title: "List assets",
					connector: {
						name: "bynder",
						version: "2.0",
					},
					operation: "list_assets",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							media: {
								type: "array",
								items: {
									type: "object",
									properties: {
										description: {
											type: "string",
										},
										id: {
											type: "string",
										},
										copyright: {
											type: "string",
										},
										type: {
											type: "string",
										},
										idHash: {
											type: "string",
										},
										height: {
											type: "number",
										},
										archive: {
											type: "number",
										},
										datePublished: {
											type: "string",
										},
										fileSize: {
											type: "number",
										},
										brandId: {
											type: "string",
										},
										name: {
											type: "string",
										},
										extension: {
											type: "array",
											items: {
												type: "string",
											},
										},
										userCreated: {
											type: "string",
										},
										dateCreated: {
											type: "string",
										},
										isPublic: {
											type: "number",
										},
										propertyOptions: {
											type: "array",
											items: {
												type: "string",
											},
										},
										orientation: {
											type: "string",
										},
										dateModified: {
											type: "string",
										},
										width: {
											type: "number",
										},
										watermarked: {
											type: "number",
										},
										limited: {
											type: "number",
										},
										property_portfolioLink: {
											type: "string",
										},
										property_testingdate: {
											type: "string",
										},
										property_Workfront_Task_URL: {
											type: "string",
										},
										"property_figmage-page-id": {
											type: "string",
										},
										property_usage: {
											type: "array",
											items: {
												type: "string",
											},
										},
										property_Testing_Single_select: {
											type: "array",
											items: {
												type: "string",
											},
										},
										"property_figmage-doc-id": {
											type: "string",
										},
										property_Testing_Search_Text: {
											type: "string",
										},
										property_Workfront_Version_ID: {
											type: "string",
										},
										property_Workfront_Document_ID: {
											type: "array",
											items: {
												type: "string",
											},
										},
										property_sourcelocation: {
											type: "string",
										},
										property_desc: {
											type: "string",
										},
										property_Testing_text: {
											type: "string",
										},
										property_Testing_Multi_select: {
											type: "array",
											items: {
												type: "string",
											},
										},
										property_photographer: {
											type: "string",
										},
										property_Workfront_Document_URL: {
											type: "string",
										},
										property_Testing_date_ui: {
											type: "string",
										},
										property_Testing_Search_Text2: {
											type: "string",
										},
										property_downloadLink: {
											type: "string",
										},
										transformBaseUrl: {
											type: "string",
										},
										thumbnails: {
											type: "object",
											properties: {
												mini: {
													type: "string",
												},
												transformBaseUrl: {
													type: "string",
												},
												webimage: {
													type: "string",
												},
												small: {
													type: "string",
												},
												thumbnail: {
													type: "string",
												},
												thul: {
													type: "string",
												},
											},
										},
										videoPreviewURLs: {
											type: "array",
											items: {
												type: "string",
											},
										},
										tags: {
											type: "array",
											items: {
												type: "string",
											},
										},
										"property_figmage-node-id": {
											type: "string",
										},
										property_region: {
											type: "array",
											items: {
												type: "string",
											},
										},
									},
									required: [
										"description",
										"id",
										"copyright",
										"type",
										"idHash",
										"height",
										"archive",
										"datePublished",
										"fileSize",
										"brandId",
										"name",
										"extension",
										"userCreated",
										"dateCreated",
										"isPublic",
										"orientation",
										"dateModified",
										"width",
										"watermarked",
										"limited",
										"thumbnails",
										"propertyOptions",
										"property_Workfront_Task_URL",
										"property_Workfront_Version_ID",
										"property_Workfront_Document_ID",
										"property_Workfront_Document_URL",
										"transformBaseUrl",
										"tags",
										"property_Testing_Search_Text",
										"property_Testing_Search_Text2",
										"property_sourcelocation",
										"property_Testing_date_ui",
									],
								},
							},
							total: {
								type: "object",
								properties: {
									count: {
										type: "number",
									},
								},
							},
						},
					},
					error_handling: {},
					authentication: {
						group: "9172b5ce-7198-4a32-9ef9-fccb0ecf66e9",
						title: "Lynton Web's bynder account",
						service_icon: {
							icon_type: "url",
							value: "//s3.amazonaws.com/images.tray.io/artisan/icons/55fdd831638972b19fec6bc4a2da6784.png",
						},
						scopes: ["asset:write", "meta.assetbank:read", "asset:read", "meta.assetbank:write", "offline"],
						service_name: "bynder",
						service_version: 2,
					},
					properties: {
						limit: {
							type: "integer",
							value: 50,
						},
						page: {
							type: "jsonpath",
							value: "$.steps.storage-2.value",
						},
						include_total: {
							value: true,
							type: "boolean",
						},
						order_by: {
							type: "string",
							value: "dateModified asc",
						},
						date_modified: {
							type: "jsonpath",
							value: "$.steps.storage-1.value.date",
						},
						include_media_items: {
							value: false,
							type: "boolean",
						},
						tags: {
							type: "jsonpath",
							value: "$.steps.text-helpers-1.result",
						},
					},
				},
				"loop-2": {
					title: "Loop bynder_to_marketo",
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
									bynder_id: {
										type: "string",
									},
									name: {
										type: "string",
									},
									description: {
										type: "string",
									},
								},
								required: ["bynder_id", "name", "description"],
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
							value: "$.steps.script-1.result.bynder_to_marketo",
						},
					},
				},
				"storage-1": {
					title: "[Acc] Get last modified",
					description: '"env.solution_instance_id"_bynder_last_modified_to_marketo',
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
									date: {
										type: "string",
									},
									id: {
										type: "string",
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
							type: "object",
							value: {
								date: {
									type: "jsonpath",
									value: "$.config.initial_last_modified_date",
								},
								id: {
									type: "string",
									value: "",
								},
							},
						},
						key: {
							type: "string",
							value: "{$.env.solution_instance_id or:'dev'}_bynder_last_modified_to_marketo",
						},
					},
				},
				"break-loop-1": {
					title: "Break loop-1",
					connector: {
						name: "break-loop",
						version: "1.1",
					},
					operation: "break",
					output_schema: {},
					error_handling: {},
					properties: {},
				},
				"marketo-1": {
					title: "Upload file",
					description: "Matching by file name, the upload will create or update as needed.",
					connector: {
						name: "marketo",
						version: "2.26",
					},
					operation: "raw_http_request",
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
										},
									},
									body: {
										type: "object",
										properties: {
											success: {
												type: "boolean",
											},
											errors: {
												type: "array",
												items: {},
											},
											requestId: {
												type: "string",
											},
											warnings: {
												type: "array",
												items: {},
											},
											result: {
												type: "array",
												items: {
													type: "object",
													properties: {
														id: {
															type: "number",
														},
														size: {
															type: "number",
														},
														mimeType: {
															type: "string",
														},
														url: {
															type: "string",
														},
														folder: {
															type: "object",
															properties: {
																type: {
																	type: "string",
																},
																id: {
																	type: "number",
																},
																name: {
																	type: "string",
																},
															},
														},
														name: {
															type: "string",
														},
														description: {
															type: "string",
														},
														createdAt: {
															type: "string",
														},
														updatedAt: {
															type: "string",
														},
													},
												},
											},
										},
									},
								},
							},
						},
					},
					error_handling: {},
					authentication: {
						group: "bfb4f23c-8ba3-44dc-bc86-7ca964223544",
						title: "Lynton Web's marketo account",
						service_icon: {
							icon_type: "url",
							value: "//s3.amazonaws.com/images.tray.io/static/service/icons/ff5b50468146efc229acffcbb014175b.png",
						},
						scopes: [],
						service_name: "marketo",
						service_version: 1,
					},
					properties: {
						endpoint: {
							type: "jsonpath",
							value: "$.auth.endpoint",
						},
						client_id: {
							type: "jsonpath",
							value: "$.auth.client_id",
						},
						client_secret: {
							type: "jsonpath",
							value: "$.auth.client_secret",
						},
						quota_wait: {
							type: "boolean",
							value: false,
						},
						method: {
							type: "string",
							value: "POST",
						},
						include_raw_body: {
							type: "boolean",
							value: false,
						},
						parse_response: {
							type: "string",
							value: "true",
						},
						url: {
							type: "object",
							value: {
								endpoint: {
									type: "string",
									value: "/asset/v1/files.json",
								},
							},
						},
						body: {
							type: "object",
							value: {
								form_data: {
									type: "object",
									value: {
										description: {
											type: "jsonpath",
											value: "$.steps.loop-2.value.description",
										},
										folder: {
											type: "jsonpath",
											value: "$.steps.script-1.result.folder",
										},
										file: {
											type: "jsonpath",
											value: "$.steps.file-helpers-1.file",
										},
									},
								},
							},
						},
					},
				},
				"file-helpers-1": {
					title: "Create file from URL",
					connector: {
						name: "file-helpers",
						version: "2.5",
					},
					operation: "create_file",
					output_schema: {},
					error_handling: {},
					properties: {
						url: {
							type: "jsonpath",
							value: "$.steps.bynder-2.response.body.s3_file",
						},
						name: {
							type: "jsonpath",
							value: "$.steps.loop-2.value.name",
						},
					},
				},
				trigger: {
					title: "Scheduled trigger (every 5m)",
					connector: {
						name: "scheduled",
						version: "3.5",
					},
					operation: "simple",
					output_schema: {},
					error_handling: {},
					properties: {
						synchronous: {
							type: "boolean",
							value: true,
						},
						public_url: {
							type: "jsonpath",
							value: "$.env.public_url",
						},
						interval: {
							type: "integer",
							value: 5,
						},
						time_unit: {
							type: "string",
							value: "minutes",
						},
					},
				},
			},
			dependencies: [],
		},
	],
	projects: [],
};

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
	}
	trigger -> storage1
	storage1 -> texthelpers1
	texthelpers1 -> storage2
	storage2 -> bynder1
	bynder1 -> script1
	script1 -> bynder2
	script1 -> breakloop1
	bynder2 -> filehelpers1
	filehelpers1 -> marketo1
	marketo1 -> bynder2
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
	let nodeAry = [];
	importArray.forEach((element) => {
		if (element.type === "loop") {
			nodeAry.push(loopHandle(element.content._loop, element.name));
		} else if (element.type === "branch") {
			nodeAry.push(`${strReplace(element.name)} = group "${strReplace(groups.find((s) => s.name === element.name).desc)}" {`);
			Object.entries(element.content).forEach((el) => {
				nodeAry.push(branchHandle(el, element.name));
			});
		} else {
			nodeAry.push(nodeStructure(element));
		}
	});
	res = `${res} ${bracketeer(nodeAry.join(`\n\t\t`))} ${modelEnd}`;
	return res;
};

const loopHandle = function (ary, name) {
	let res = `\t${strReplace(name)} = group "${strReplace(groups.find((s) => s.name === name).desc)}" `;
	let nodeAry = [];
	ary.forEach((element) => {
		if (element.type === "loop") {
			nodeAry.push(loopHandle(element.content._loop, element.name));
		} else if (element.type === "branch") {
			nodeAry.push(`${strReplace(element.name)} = group "${strReplace(groups.find((s) => s.name === element.name).desc)}" {`);
			Object.entries(element.content).forEach((el) => {
				nodeAry.push(branchHandle(el, element.name));
			});
		} else {
			nodeAry.push(nodeStructure(element));
		}
	});
	res = `${res} ${bracketeer(nodeAry.join(`\n\t\t\t`))}`;
	return res;
};

const branchHandle = function (ary, name) {
	let res = `\tbranch${strReplace(ary[0])}${parseNumber(name)} = group "branch ${ary[0]}" `;
	let nodeAry = [];
	/*
	if (ary.length === 0) {
		res =
			res +
			`empty${strReplace(name)}${parseNumber(elName)} = container "nofunction${parseNumber(elName)}"
	`;
	}			*/
	ary[1].forEach((element) => {
		if (element.type === "loop") {
			nodeAry.push(loopHandle(element.content._loop, element.name));
		} else if (element.type === "branch") {
			nodeAry.push(`${strReplace(element.name)} = group "${strReplace(groups.find((s) => s.name === element.name).desc)}" {`);
			Object.entries(element.content).forEach((el) => {
				nodeAry.push(branchHandle(el, element.name));
			});
		} else {
			nodeAry.push(nodeStructure(element));
		}
	});
	res = `${res} ${bracketeer(nodeAry.join(`\n\t\t\t\t`))}`;
	return res;
};

const nodeStructure = function (obj) {
	//console.log(obj);
	let res = `${strReplace(obj.name)} = container "${strReplace(groups.find((s) => s.name === obj.name).desc)} - ${strReplace(obj.name)}"`;
	return res;
};

const groups = groupBuilder(importJSON);

//console.log(groups);
//console.log(JSON.stringify(modelBuilder(importJSON.workflows[0].steps_structure)));
console.log(modelBuilder(importJSON.workflows[0].steps_structure));

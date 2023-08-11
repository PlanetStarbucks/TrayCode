const importJSON = {
	tray_export_version: 4,
	export_type: "workflow",
	workflows: [
		{
			id: "c3edf88b-310e-4028-bb93-698ff5deb176",
			created: "2023-03-16T21:43:53.365636Z",
			workspace_id: "139e4592-3b78-46ad-885b-bc64d04d3bed",
			project_id: "61e77b36-3e4a-42ac-8b73-06e9e77addff",
			group: "8ae4b25e-fdcb-4c5d-8444-08e947a40857",
			creator: "139e4592-3b78-46ad-885b-bc64d04d3bed",
			version: {
				id: "23010b37-724b-4927-bd3e-b6d9741dc4f2",
				created: "2023-05-03T12:56:02.523536Z",
			},
			title: "[Adobe Stock v2] Bynder Uploader",
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
				output_schema: {
					type: "object",
					properties: {
						response: {
							type: "string",
							title: "New property",
							default: "Failed Download",
						},
					},
					additionalProperties: false,
					required: [],
					advanced: [],
				},
			},
			steps_structure: [
				{
					name: "trigger",
					type: "normal",
					content: {},
				},
				{
					name: "http-client-2",
					type: "branch",
					content: {
						error: [
							{
								name: "boolean-condition-5",
								type: "branch",
								content: {
									true: [
										{
											name: "storage-6",
											type: "normal",
											content: {},
										},
										{
											name: "storage-5",
											type: "normal",
											content: {},
										},
									],
									false: [],
								},
							},
							{
								name: "terminate-4",
								type: "normal",
								content: {},
							},
						],
						success: [],
					},
				},
				{
					name: "list-helpers-4",
					type: "normal",
					content: {},
				},
				{
					name: "storage-8",
					type: "normal",
					content: {},
				},
				{
					name: "storage-9",
					type: "normal",
					content: {},
				},
				{
					name: "object-helpers-2",
					type: "normal",
					content: {},
				},
				{
					name: "object-helpers-1",
					type: "normal",
					content: {},
				},
				{
					name: "bynder-2",
					type: "normal",
					content: {},
				},
				{
					name: "bynder-1",
					type: "normal",
					content: {},
				},
				{
					name: "file-helpers-1",
					type: "normal",
					content: {},
				},
				{
					name: "http-client-1",
					type: "branch",
					content: {
						error: [
							{
								name: "json-transformer-1",
								type: "normal",
								content: {},
							},
							{
								name: "script-1",
								type: "normal",
								content: {},
							},
							{
								name: "bynder-7",
								type: "branch",
								content: {
									error: [
										{
											name: "storage-2",
											type: "normal",
											content: {},
										},
									],
									success: [],
								},
							},
							{
								name: "storage-3",
								type: "normal",
								content: {},
							},
							{
								name: "terminate-3",
								type: "normal",
								content: {},
							},
						],
						success: [],
					},
				},
				{
					name: "bynder-3",
					type: "normal",
					content: {},
				},
				{
					name: "bynder-5",
					type: "normal",
					content: {},
				},
				{
					name: "loop-2",
					type: "loop",
					content: {
						_loop: [
							{
								name: "bynder-6",
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
											name: "break-loop-1",
											type: "break",
											content: {},
											target: "loop-2",
										},
									],
									false: [
										{
											name: "list-helpers-2",
											type: "normal",
											content: {},
										},
										{
											name: "list-helpers-3",
											type: "normal",
											content: {},
										},
										{
											name: "boolean-condition-2",
											type: "branch",
											content: {
												true: [
													{
														name: "callable-workflow-response-5",
														type: "normal",
														content: {},
													},
													{
														name: "terminate-1",
														type: "normal",
														content: {},
													},
												],
												false: [
													{
														name: "boolean-condition-3",
														type: "branch",
														content: {
															true: [
																{
																	name: "callable-workflow-response-4",
																	type: "normal",
																	content: {},
																},
																{
																	name: "terminate-2",
																	type: "normal",
																	content: {},
																},
															],
															false: [
																{
																	name: "math-helpers-2",
																	type: "normal",
																	content: {},
																},
																{
																	name: "math-helpers-1",
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
								},
							},
						],
					},
				},
				{
					name: "bynder-4",
					type: "normal",
					content: {},
				},
				{
					name: "storage-1",
					type: "normal",
					content: {},
				},
			],
			steps: {
				"storage-2": {
					title: "Store in errorList",
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
							value: "Account",
						},
						key: {
							type: "string",
							value: "adobeStockErrorList-{$.env.solution_instance_id or:'adobeSolutionID'}",
						},
						value: {
							type: "object",
							value: {
								adobeStockID: {
									type: "string",
									value: "{$.steps.trigger.assetData.id}",
								},
								error: {
									type: "string",
									value: "{$.errors.http-client-1}",
								},
							},
						},
						create_if_missing: {
							value: true,
							type: "boolean",
						},
					},
				},
				"bynder-3": {
					title: "Register Chunk",
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
											date: {
												type: "string",
											},
											"content-type": {
												type: "string",
											},
											"content-length": {
												type: "string",
											},
											connection: {
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
										},
									},
									body: {
										type: "object",
										properties: {
											status: {
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
						group: "d9331e0a-9170-41e8-866c-13ec9a287df5",
						title: "Keiffer Bynder oAuth2",
						service_icon: {
							icon_type: "url",
							value: "//s3.amazonaws.com/images.tray.io/artisan/icons/55fdd831638972b19fec6bc4a2da6784.png",
						},
						scopes: ["collection:write", "asset:write", "current.profile:read", "meta.assetbank:read", "asset:read", "collection:read", "meta.assetbank:write", "admin.profile:read", "admin.user:read", "offline", "current.user:read"],
						service_name: "bynder",
						service_version: 2,
					},
					properties: {
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
								full_url: {
									type: "string",
									value: "{$.auth.domain}/api/v4/upload/{$.steps.bynder-1.response.body.s3file.uploadid}/",
								},
							},
						},
						body: {
							type: "object",
							value: {
								form_urlencoded: {
									type: "object",
									value: {
										chunkNumber: {
											type: "number",
											value: 1,
										},
										targetid: {
											type: "jsonpath",
											value: "$.steps.bynder-1.response.body.s3file.targetid",
										},
										filename: {
											type: "jsonpath",
											value: "$.steps.http-client-1.response.body.PostResponse.Key",
										},
									},
								},
							},
						},
						headers: {
							type: "array",
							value: [
								{
									type: "object",
									value: {
										key: {
											type: "string",
											value: "Authorization",
										},
										value: {
											type: "string",
											value: "Bearer {$.auth.access_token}",
										},
									},
								},
							],
						},
					},
				},
				"list-helpers-3": {
					title: "List Helpers",
					connector: {
						name: "list-helpers",
						version: "2.1",
					},
					operation: "add_item_to_list",
					output_schema: {},
					error_handling: {},
					properties: {
						unique: {
							type: "boolean",
							value: false,
						},
						list: {
							type: "jsonpath",
							value: "$.steps.bynder-6.response.body.itemsRejected",
						},
						item: {
							type: "jsonpath",
							value: "$.steps.bynder-5.response.body.importId",
						},
					},
				},
				"bynder-2": {
					title: "Get Upload URL",
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
											date: {
												type: "string",
											},
											"content-type": {
												type: "string",
											},
											"content-length": {
												type: "string",
											},
											connection: {
												type: "string",
											},
											server: {
												type: "string",
											},
											"set-cookie": {
												type: "array",
												items: {
													type: "string",
												},
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
										},
									},
									body: {
										type: "string",
									},
								},
							},
						},
					},
					error_handling: {},
					authentication: {
						group: "d9331e0a-9170-41e8-866c-13ec9a287df5",
						title: "Keiffer Bynder oAuth2",
						service_icon: {
							icon_type: "url",
							value: "//s3.amazonaws.com/images.tray.io/artisan/icons/55fdd831638972b19fec6bc4a2da6784.png",
						},
						scopes: ["collection:write", "asset:write", "current.profile:read", "meta.assetbank:read", "asset:read", "collection:read", "meta.assetbank:write", "admin.profile:read", "admin.user:read", "offline", "current.user:read"],
						service_name: "bynder",
						service_version: 2,
					},
					properties: {
						method: {
							type: "string",
							value: "GET",
						},
						url: {
							type: "object",
							value: {
								full_url: {
									type: "string",
									value: "{$.auth.domain}/api/upload/endpoint",
								},
							},
						},
						include_raw_body: {
							type: "boolean",
							value: false,
						},
						parse_response: {
							type: "string",
							value: "true",
						},
						body: {
							type: "object",
							value: {
								form_urlencoded: {
									type: "object",
									value: {},
								},
							},
						},
					},
				},
				"bynder-5": {
					title: "Finalise Upload",
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
											date: {
												type: "string",
											},
											"content-type": {
												type: "string",
											},
											"content-length": {
												type: "string",
											},
											connection: {
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
										},
									},
									body: {
										type: "object",
										properties: {
											locationType: {
												type: "string",
											},
											originalFilename: {
												type: "string",
											},
											filename: {
												type: "string",
											},
											output: {
												type: "string",
											},
											batchId: {
												type: "string",
											},
											success: {
												type: "boolean",
											},
											importId: {
												type: "string",
											},
											file: {
												type: "object",
												properties: {
													bucket: {
														type: "string",
													},
													path: {
														type: "string",
													},
													type: {
														type: "string",
													},
												},
											},
											sendRequest: {
												type: "boolean",
											},
										},
									},
								},
							},
						},
					},
					error_handling: {},
					authentication: {
						group: "d9331e0a-9170-41e8-866c-13ec9a287df5",
						title: "Keiffer Bynder oAuth2",
						service_icon: {
							icon_type: "url",
							value: "//s3.amazonaws.com/images.tray.io/artisan/icons/55fdd831638972b19fec6bc4a2da6784.png",
						},
						scopes: ["collection:write", "asset:write", "current.profile:read", "meta.assetbank:read", "asset:read", "collection:read", "meta.assetbank:write", "admin.profile:read", "admin.user:read", "offline", "current.user:read"],
						service_name: "bynder",
						service_version: 2,
					},
					properties: {
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
								full_url: {
									type: "string",
									value: "{$.auth.domain}/api/v4/upload/{$.steps.bynder-1.response.body.s3file.uploadid}",
								},
							},
						},
						body: {
							type: "object",
							value: {
								form_urlencoded: {
									type: "object",
									value: {
										targetid: {
											type: "jsonpath",
											value: "$.steps.bynder-1.response.body.s3file.targetid",
										},
										s3_filename: {
											type: "jsonpath",
											value: "$.steps.http-client-1.response.body.PostResponse.Location",
										},
										chunks: {
											type: "number",
											value: 1,
										},
										original_filename: {
											type: "jsonpath",
											value: "$.steps.trigger.fileName",
										},
									},
								},
							},
						},
						headers: {
							type: "array",
							value: [
								{
									type: "object",
									value: {
										value: {
											type: "string",
											value: "Bearer {$.auth.access_token}",
										},
										key: {
											type: "string",
											value: "Authorization",
										},
									},
								},
							],
						},
						query_parameters: {
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
											type: "jsonpath",
											value: "$.steps.list-helpers-1.result",
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
				"math-helpers-2": {
					title: "Add 1 to Index",
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
							value: "$.steps.loop-2.index",
						},
						second_value: {
							value: 1,
							type: "integer",
						},
					},
				},
				"terminate-1": {
					title: "Terminate",
					connector: {
						name: "terminate",
						version: "1.1",
					},
					operation: "fail_run",
					output_schema: {},
					error_handling: {},
					properties: {},
				},
				"math-helpers-1": {
					title: "Linear Delay Function",
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
							value: "$.steps.math-helpers-2.result",
						},
						second_value: {
							value: 3,
							type: "integer",
						},
					},
				},
				"terminate-2": {
					title: "Terminate",
					connector: {
						name: "terminate",
						version: "1.1",
					},
					operation: "fail_run",
					output_schema: {},
					error_handling: {},
					properties: {},
				},
				"loop-2": {
					title: "Loop Collection",
					connector: {
						name: "loop",
						version: "1.3",
					},
					operation: "loop_forever",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							index: {
								type: "number",
							},
							branch_name: {
								type: "string",
							},
						},
					},
					error_handling: {},
					properties: {},
				},
				"storage-1": {
					title: "Store assetID in syncList",
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
							value: "Account",
						},
						key: {
							type: "string",
							value: "adobeStockSyncList-{$.env.solution_instance_id or:'adobeSolutionID'}",
						},
						value: {
							type: "jsonpath",
							value: "$.steps.trigger.assetData.id",
						},
					},
				},
				"callable-workflow-response-4": {
					title: "Callable response",
					connector: {
						name: "callable-workflow-response",
						version: "1.0",
					},
					operation: "response",
					output_schema: {},
					error_handling: {},
					properties: {
						response: {
							value: {
								response: {
									type: "string",
									value: "Upload Failure",
								},
							},
							type: "object",
						},
					},
				},
				"bynder-7": {
					title: "Vanilla Upload",
					connector: {
						name: "bynder",
						version: "2.0",
					},
					operation: "upload_asset",
					output_schema: {},
					error_handling: {
						strategy: "manual",
					},
					authentication: {
						group: "d9331e0a-9170-41e8-866c-13ec9a287df5",
						title: "Keiffer Bynder oAuth2",
						service_icon: {
							icon_type: "url",
							value: "//s3.amazonaws.com/images.tray.io/artisan/icons/55fdd831638972b19fec6bc4a2da6784.png",
						},
						scopes: ["collection:write", "asset:write", "current.profile:read", "meta.assetbank:read", "asset:read", "collection:read", "meta.assetbank:write", "admin.profile:read", "admin.user:read", "offline", "current.user:read"],
						service_name: "bynder",
						service_version: 2,
					},
					properties: {
						file: {
							type: "jsonpath",
							value: "$.steps.file-helpers-1.file",
						},
						brand_id: {
							type: "jsonpath",
							value: "$.steps.trigger.solutionData.brandID",
						},
						name: {
							type: "jsonpath",
							value: "$.steps.trigger.fileName",
						},
						description: {
							type: "jsonpath",
							value: "$.steps.trigger.assetData.title",
						},
						tags: {
							type: "jsonpath",
							value: "$.steps.trigger.assetData.keywords",
						},
						audit: {
							type: "jsonpath",
							value: "$.config.waitingRoom",
						},
						metaproperty: {
							type: "jsonpath",
							value: "$.steps.script-1.result",
						},
						access_request_id: {
							type: "jsonpath",
							value: "$.steps.trigger.waitingRoomID",
						},
					},
				},
				"list-helpers-2": {
					title: "List Helpers",
					connector: {
						name: "list-helpers",
						version: "2.1",
					},
					operation: "add_item_to_list",
					output_schema: {},
					error_handling: {},
					properties: {
						unique: {
							type: "boolean",
							value: false,
						},
						list: {
							type: "jsonpath",
							value: "$.steps.bynder-6.response.body.itemsFailed",
						},
						item: {
							type: "jsonpath",
							value: "$.steps.bynder-5.response.body.importId",
						},
					},
				},
				"script-1": {
					title: "Join Arrays in Format",
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
											value: "metadataMap",
										},
										value: {
											type: "jsonpath",
											value: "$.steps.json-transformer-1.result",
										},
									},
								},
							],
						},
						script: {
							type: "string",
							value: '// You can reference the input variables using input.NAME\n// Parsed JSON files could be referenced as fileInput\nexports.step = function (input) {\n\tconst mapObject = []\n\tinput.metadataMap.id.forEach((value, index) => {\n\t\tmapObject.push(\n\t\t\t{\n\t\t\t\t"id": value,\n\t\t\t\t"options": [input.metadataMap.options[index]]\n\t\t\t},\n\t\t)\n\t})\n\treturn mapObject\n}',
						},
						file_output: {
							type: "boolean",
							value: false,
						},
					},
				},
				"object-helpers-2": {
					title: "Merge Map with Save Asset",
					connector: {
						name: "object-helpers",
						version: "4.1",
					},
					operation: "merge_two_objects",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							result: {
								type: "object",
								properties: {},
							},
						},
					},
					error_handling: {},
					properties: {
						source: {
							type: "jsonpath",
							value: "$.steps.storage-9.value",
						},
						target: {
							type: "jsonpath",
							value: "$.steps.trigger.metaPropertyMap",
						},
					},
				},
				"storage-5": {
					title: "Store assetID in syncList",
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
							value: "Account",
						},
						key: {
							type: "string",
							value: "adobeStockSyncList-{$.env.solution_instance_id or:'adobeSolutionID'}",
						},
						value: {
							type: "jsonpath",
							value: "$.steps.trigger.assetData.id",
						},
					},
				},
				"bynder-4": {
					title: "Save Asset",
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
											location: {
												type: "string",
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
								},
							},
						},
					},
					error_handling: {},
					authentication: {
						group: "d9331e0a-9170-41e8-866c-13ec9a287df5",
						title: "Keiffer Bynder oAuth2",
						service_icon: {
							icon_type: "url",
							value: "//s3.amazonaws.com/images.tray.io/artisan/icons/55fdd831638972b19fec6bc4a2da6784.png",
						},
						scopes: ["collection:write", "asset:write", "current.profile:read", "meta.assetbank:read", "asset:read", "collection:read", "meta.assetbank:write", "admin.profile:read", "admin.user:read", "offline", "current.user:read"],
						service_name: "bynder",
						service_version: 2,
					},
					properties: {
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
								full_url: {
									type: "string",
									value: "{$.auth.domain}/api/v4/media/save/{$.steps.bynder-5.response.body.importId}",
								},
							},
						},
						body: {
							type: "object",
							value: {
								form_data: {
									type: "jsonpath",
									value: "$.steps.object-helpers-1.result",
								},
							},
						},
						headers: {
							type: "array",
							value: [
								{
									type: "object",
									value: {
										value: {
											type: "string",
											value: "Bearer {$.auth.access_token}",
										},
										key: {
											type: "string",
											value: "Authorization",
										},
									},
								},
							],
						},
						query_parameters: {
							type: "array",
							value: [],
						},
					},
				},
				"boolean-condition-5": {
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
											value: "$.errors.http-client-2.response.error",
										},
										comparison_type: {
											type: "string",
											value: "===",
										},
										value2: {
											type: "string",
											value: "This is embarrassing, but this file cannot be downloaded.",
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
										value2: {
											type: "string",
											value: "Resource cannot be found.",
										},
										value1: {
											type: "jsonpath",
											value: "$.errors.http-client-2.response.error",
										},
									},
								},
							],
						},
						strictness: {
							type: "string",
							value: "Any",
						},
					},
				},
				"storage-9": {
					title: "Load Save Asset Object",
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
							value: "bynderForm",
						},
						default_value: {
							type: "null",
							value: null,
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
											value: "$.steps.list-helpers-2.result",
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
											value: "$.steps.list-helpers-3.result",
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
							value: "Any",
						},
					},
				},
				"storage-3": {
					title: "Store assetID in syncList",
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
							value: "Account",
						},
						key: {
							type: "string",
							value: "adobeStockSyncList-{$.env.solution_instance_id or:'adobeSolutionID'}",
						},
						value: {
							type: "jsonpath",
							value: "$.steps.trigger.assetData.id",
						},
					},
				},
				"storage-8": {
					title: "Create Save Asset Object",
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
							value: "bynderForm",
						},
						value: {
							type: "object",
							value: {
								brandId: {
									type: "jsonpath",
									value: "$.steps.trigger.solutionData.brandID",
								},
								name: {
									type: "jsonpath",
									value: "$.steps.trigger.fileName",
								},
								tags: {
									type: "jsonpath",
									value: "$.steps.list-helpers-4.result",
								},
								audit: {
									type: "string",
									value: "{$.config.waitingRoom}",
								},
								description: {
									type: "jsonpath",
									value: "$.steps.trigger.assetData.title",
								},
								accessRequestId: {
									type: "jsonpath",
									value: "$.steps.trigger.waitingRoomID",
								},
							},
						},
					},
				},
				"http-client-1": {
					title: "Upload File",
					connector: {
						name: "http-client",
						version: "5.5",
					},
					operation: "post_request",
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
											"x-amz-id-2": {
												type: "string",
											},
											"x-amz-request-id": {
												type: "string",
											},
											date: {
												type: "string",
											},
											"x-amz-expiration": {
												type: "string",
											},
											"x-amz-server-side-encryption": {
												type: "string",
											},
											etag: {
												type: "string",
											},
											location: {
												type: "string",
											},
											"content-type": {
												type: "string",
											},
											server: {
												type: "string",
											},
											"content-length": {
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
											PostResponse: {
												type: "object",
												properties: {
													Location: {
														type: "string",
													},
													Bucket: {
														type: "string",
													},
													Key: {
														type: "string",
													},
													ETag: {
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
					error_handling: {
						strategy: "manual",
					},
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
							type: "jsonpath",
							value: "$.steps.bynder-2.response.body",
						},
						body: {
							type: "object",
							value: {
								form_data: {
									type: "object",
									value: {
										"Content-Type": {
											type: "jsonpath",
											value: "$.steps.bynder-1.response.body.multipart_params.Content-Type",
										},
										Policy: {
											type: "jsonpath",
											value: "$.steps.bynder-1.response.body.multipart_params.Policy",
										},
										"X-Amz-Signature": {
											type: "jsonpath",
											value: "$.steps.bynder-1.response.body.multipart_params.X-Amz-Signature",
										},
										acl: {
											type: "jsonpath",
											value: "$.steps.bynder-1.response.body.multipart_params.acl",
										},
										key: {
											type: "jsonpath",
											value: "$.steps.bynder-1.response.body.multipart_params.key",
										},
										success_action_status: {
											type: "jsonpath",
											value: "$.steps.bynder-1.response.body.multipart_params.success_action_status",
										},
										"x-amz-algorithm": {
											type: "jsonpath",
											value: "$.steps.bynder-1.response.body.multipart_params.x-amz-algorithm",
										},
										"x-amz-credential": {
											type: "jsonpath",
											value: "$.steps.bynder-1.response.body.multipart_params.x-amz-credential",
										},
										"x-amz-date": {
											type: "jsonpath",
											value: "$.steps.bynder-1.response.body.multipart_params.x-amz-date",
										},
										name: {
											type: "jsonpath",
											value: "$.steps.trigger.fileName",
										},
										chunk: {
											type: "string",
											value: "1",
										},
										chunks: {
											type: "string",
											value: "1",
										},
										Filename: {
											type: "string",
											value: "{$.steps.bynder-1.response.body.multipart_params}/p1",
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
				"list-helpers-1": {
					title: "List Helpers",
					connector: {
						name: "list-helpers",
						version: "2.1",
					},
					operation: "contains",
					output_schema: {},
					error_handling: {},
					properties: {
						list: {
							type: "jsonpath",
							value: "$.steps.bynder-6.response.body.itemsDone",
						},
						match: {
							type: "jsonpath",
							value: "$.steps.bynder-5.response.body.importId",
						},
					},
				},
				"bynder-1": {
					title: "Initialize Upload",
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
											date: {
												type: "string",
											},
											"content-type": {
												type: "string",
											},
											"content-length": {
												type: "string",
											},
											connection: {
												type: "string",
											},
											server: {
												type: "string",
											},
											"set-cookie": {
												type: "array",
												items: {
													type: "string",
												},
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
										},
									},
									body: {
										type: "object",
										properties: {
											s3file: {
												type: "object",
												properties: {
													uploadid: {
														type: "string",
													},
													targetid: {
														type: "string",
													},
												},
											},
											s3_filename: {
												type: "string",
											},
											target_key: {
												type: "string",
											},
											multipart_params: {
												type: "object",
												properties: {
													acl: {
														type: "string",
													},
													success_action_status: {
														type: "string",
													},
													"Content-Type": {
														type: "string",
													},
													key: {
														type: "string",
													},
													Policy: {
														type: "string",
													},
													"X-Amz-Signature": {
														type: "string",
													},
													"x-amz-credential": {
														type: "string",
													},
													"x-amz-algorithm": {
														type: "string",
													},
													"x-amz-date": {
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
					error_handling: {},
					authentication: {
						group: "d9331e0a-9170-41e8-866c-13ec9a287df5",
						title: "Keiffer Bynder oAuth2",
						service_icon: {
							icon_type: "url",
							value: "//s3.amazonaws.com/images.tray.io/artisan/icons/55fdd831638972b19fec6bc4a2da6784.png",
						},
						scopes: ["collection:write", "asset:write", "current.profile:read", "meta.assetbank:read", "asset:read", "collection:read", "meta.assetbank:write", "admin.profile:read", "admin.user:read", "offline", "current.user:read"],
						service_name: "bynder",
						service_version: 2,
					},
					properties: {
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
								full_url: {
									type: "string",
									value: "{$.auth.domain}/api/upload/init",
								},
							},
						},
						body: {
							type: "object",
							value: {
								form_urlencoded: {
									type: "object",
									value: {
										filename: {
											type: "jsonpath",
											value: "$.steps.trigger.fileName",
										},
									},
								},
							},
						},
						headers: {
							type: "array",
							value: [
								{
									type: "object",
									value: {
										key: {
											type: "string",
											value: "Content-Type",
										},
										value: {
											type: "string",
											value: "application/x-www-form-urlencoded",
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
											value: "Bearer {$.auth.access_token}",
										},
									},
								},
							],
						},
					},
				},
				"callable-workflow-response-5": {
					title: "Callable response",
					connector: {
						name: "callable-workflow-response",
						version: "1.0",
					},
					operation: "response",
					output_schema: {},
					error_handling: {},
					properties: {
						response: {
							value: {
								response: {
									type: "string",
									value: "Upload Failure",
								},
							},
							type: "object",
						},
					},
				},
				"bynder-6": {
					title: "Poll Upload",
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
											date: {
												type: "string",
											},
											"content-type": {
												type: "string",
											},
											"content-length": {
												type: "string",
											},
											connection: {
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
										},
									},
									body: {
										type: "object",
										properties: {
											itemsFailed: {
												type: "array",
												items: {},
											},
											itemsRejected: {
												type: "array",
												items: {},
											},
											itemsDone: {
												type: "array",
												items: {},
											},
										},
									},
								},
							},
						},
					},
					error_handling: {},
					authentication: {
						group: "d9331e0a-9170-41e8-866c-13ec9a287df5",
						title: "Keiffer Bynder oAuth2",
						service_icon: {
							icon_type: "url",
							value: "//s3.amazonaws.com/images.tray.io/artisan/icons/55fdd831638972b19fec6bc4a2da6784.png",
						},
						scopes: ["collection:write", "asset:write", "current.profile:read", "meta.assetbank:read", "asset:read", "collection:read", "meta.assetbank:write", "admin.profile:read", "admin.user:read", "offline", "current.user:read"],
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
								full_url: {
									type: "string",
									value: "{$.auth.domain}/api/v4/upload/poll/",
								},
							},
						},
						body: {
							type: "object",
							value: {
								form_urlencoded: {
									type: "object",
									value: {
										filename: {
											type: "jsonpath",
											value: "$.steps.trigger.fileName",
										},
									},
								},
							},
						},
						headers: {
							type: "array",
							value: [
								{
									type: "object",
									value: {
										value: {
											type: "string",
											value: "Bearer {$.auth.access_token}",
										},
										key: {
											type: "string",
											value: "Authorization",
										},
									},
								},
							],
						},
						query_parameters: {
							type: "array",
							value: [
								{
									type: "object",
									value: {
										key: {
											type: "string",
											value: "items",
										},
										value: {
											type: "jsonpath",
											value: "$.steps.bynder-5.response.body.importId",
										},
									},
								},
							],
						},
					},
				},
				"list-helpers-4": {
					title: "Join Keywords to String",
					connector: {
						name: "list-helpers",
						version: "2.1",
					},
					operation: "join",
					output_schema: {},
					error_handling: {},
					properties: {
						separator: {
							type: "string",
							value: ",",
						},
						list: {
							type: "jsonpath",
							value: "$.steps.trigger.assetData.keywords",
							fallback: {
								type: "array",
								value: [
									{
										type: "string",
										value: "Adobe Stock",
									},
									{
										type: "string",
										value: "{$.steps.trigger.assetData.id}",
									},
								],
							},
						},
					},
				},
				"terminate-4": {
					title: "Terminate",
					connector: {
						name: "terminate",
						version: "1.1",
					},
					operation: "terminate_run",
					output_schema: {},
					error_handling: {},
					properties: {},
				},
				"break-loop-1": {
					title: "Break Loop",
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
					title: "Store in errorList",
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
							value: "Account",
						},
						key: {
							type: "string",
							value: "adobeStockErrorList-{$.env.solution_instance_id or:'adobeSolutionID'}",
						},
						value: {
							type: "object",
							value: {
								adobeStockID: {
									type: "string",
									value: "{$.steps.trigger.assetData.id}",
								},
								error: {
									type: "string",
									value: "{$.errors.http-client-2}",
								},
							},
						},
						create_if_missing: {
							value: true,
							type: "boolean",
						},
					},
				},
				"terminate-3": {
					title: "Terminate",
					connector: {
						name: "terminate",
						version: "1.1",
					},
					operation: "terminate_run",
					output_schema: {},
					error_handling: {},
					properties: {},
				},
				"http-client-2": {
					title: "Download Asset",
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
											connection: {
												type: "string",
											},
											"content-type": {
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
											"access-control-allow-headers": {
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
											location: {
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
											date: {
												type: "string",
											},
											"strict-transport-security": {
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
											"transfer-encoding": {
												type: "string",
											},
										},
									},
									body: {
										type: "string",
									},
								},
							},
						},
					},
					error_handling: {
						strategy: "manual",
					},
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
								only: {
									type: "object",
									value: {
										status_code: {
											type: "integer",
											value: 302,
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
							type: "jsonpath",
							value: "$.steps.trigger.assetData.download_url",
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
											value: "$.steps.trigger.solutionData.stockCredentials.API_KEY",
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
											value: "Bearer {$.steps.trigger.bearerToken}",
										},
									},
								},
							],
						},
						return_response_as_file: {
							value: false,
							type: "boolean",
						},
					},
				},
				"object-helpers-1": {
					title: "Remove Null/Empty Values",
					connector: {
						name: "object-helpers",
						version: "4.1",
					},
					operation: "remove_null_values",
					output_schema: {},
					error_handling: {},
					properties: {
						values_to_remove: {
							type: "string",
							value: "both",
						},
						source: {
							type: "jsonpath",
							value: "$.steps.object-helpers-2.result",
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
							type: "jsonpath",
							value: "$.steps.math-helpers-1.result",
						},
					},
				},
				"boolean-condition-3": {
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
											value: "$.steps.loop-2.index",
										},
										comparison_type: {
											type: "string",
											value: ">=",
										},
										value2: {
											type: "number",
											value: 15,
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
				"json-transformer-1": {
					title: "Split Meta to Arrays",
					connector: {
						name: "json-transformer",
						version: "1.0",
					},
					operation: "transform",
					output_schema: {},
					error_handling: {},
					properties: {
						data: {
							type: "object",
							value: {
								result: {
									type: "jsonpath",
									value: "$.steps.trigger.metaPropertyMap",
								},
							},
						},
						query: {
							type: "string",
							value: "{\n\t\"id\": $a := result.$filter($keys().$split('.'), function($v) {\n\t$v != 'metaproperty'\n\t}),\n\t\"options\": $b := $each(result, function($v) {\n\t$v\n\t})\n}",
						},
					},
				},
				"file-helpers-1": {
					title: "Save File",
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
							value: "$.steps.http-client-2.response.headers.location",
						},
						name: {
							type: "jsonpath",
							value: "$.steps.trigger.fileName",
						},
						headers: {
							type: "object",
							value: {},
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
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							assetData: {
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
									is_licensed: {
										type: "string",
									},
									download_url: {
										type: "string",
									},
									country_name: {
										type: "string",
									},
									creator_name: {
										type: "string",
									},
									id: {
										type: "number",
									},
									title: {
										type: "string",
									},
									thumbnail_url: {
										type: "string",
									},
								},
							},
							waitingRoomID: {
								type: "string",
							},
							fileName: {
								type: "string",
							},
							solutionData: {
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
							bearerToken: {
								type: "string",
							},
							metaPropertyMap: {
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
									"metaproperty.74F390E6-918E-4ACE-8C0CA00005540A97": {
										type: "string",
									},
								},
							},
							"#calling_workflow": {
								type: "string",
							},
							"#calling_execution": {
								type: "string",
							},
							"#calling_execution_log_url": {
								type: "string",
							},
						},
					},
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
	//console.log(obj);
	let res = `${strReplace(obj.name)} = container "${strReplace(groups.find((s) => s.name === obj.name).desc)} - ${strReplace(obj.name)}"`;
	return res;
};

const groups = groupBuilder(importJSON);

//console.log(groups);
//console.log(JSON.stringify(modelBuilder(importJSON.workflows[0].steps_structure)));
console.log(modelBuilder(importJSON.workflows[0].steps_structure));

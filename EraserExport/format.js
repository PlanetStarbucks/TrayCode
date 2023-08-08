const importJSON = {
	tray_export_version: 4,
	export_type: "workflow",
	workflows: [
		{
			id: "947c0475-2ab6-4680-a5c6-900523357a49",
			created: "2022-08-08T18:54:46.470076Z",
			workspace_id: "139e4592-3b78-46ad-885b-bc64d04d3bed",
			project_id: "325733e9-d11c-4f74-ae45-2aa8ea782c3b",
			group: "b480641f-5f8a-4554-a647-84b3af4d5291",
			creator: "c0fb1638-958b-4aa0-a664-c3effbe736a5",
			version: {
				id: "aa414ca1-8e23-4f20-8467-c49aafc6e700",
				created: "2022-11-17T18:05:35.415979Z",
			},
			title: "Adobe Stock Controller",
			description: "The main controller for Adobe Stock, set on a chron trigger",
			enabled: true,
			tags: [],
			settings: {
				config: {
					syncVector: true,
					syncVideo: true,
					syncOrganization: "true",
					accountCredentials:
						'{"CLIENT_SECRET":"p8e-HRu6yLAootQZLCTi9yIuXe_imXPLpeqo","ORG_ID":"B22442B959EA26570A495EC7@AdobeOrg","API_KEY":"eff2ff028e324868b0f32e773e3966cc","TECHNICAL_ACCOUNT_ID":"F780157F62FD41310A495FC7@techacct.adobe.com","TECHNICAL_ACCOUNT_EMAIL":"f5df7389-bb24-47ad-9dc2-e59bab8cb301@techacct.adobe.com","PUBLIC_KEYS_WITH_EXPIRY":{"12e50b2d16b39ea42650a0e798054a88518606a4":"08/17/2023","613cdacb4adb6758a0a8141d8459da61fae2f9f8":"08/18/2023"}}',
					offsetSize: "100",
					waitingRoom: false,
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
					name: "boolean-condition-3",
					type: "branch",
					content: {
						true: [
							{
								name: "csv-5",
								type: "normal",
								content: {},
							},
							{
								name: "storage-2",
								type: "normal",
								content: {},
							},
						],
						false: [],
					},
				},
				{
					name: "storage-4",
					type: "normal",
					content: {},
				},
				{
					name: "csv-8",
					type: "normal",
					content: {},
				},
				{
					name: "bynder-4",
					type: "normal",
					content: {},
				},
				{
					name: "call-workflow-1",
					type: "normal",
					content: {},
				},
				{
					name: "storage-14",
					type: "normal",
					content: {},
				},
				{
					name: "storage-15",
					type: "normal",
					content: {},
				},
				{
					name: "storage-5",
					type: "normal",
					content: {},
				},
				{
					name: "storage-6",
					type: "normal",
					content: {},
				},
				{
					name: "object-helpers-1",
					type: "normal",
					content: {},
				},
				{
					name: "loop-1",
					type: "loop",
					content: {
						_loop: [
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
											name: "loop-2",
											type: "loop",
											content: {
												_loop: [
													{
														name: "csv-3",
														type: "normal",
														content: {},
													},
													{
														name: "boolean-condition-2",
														type: "branch",
														content: {
															true: [
																{
																	name: "data-mapper-1",
																	type: "normal",
																	content: {},
																},
																{
																	name: "date-time-helpers-1",
																	type: "normal",
																	content: {},
																},
																{
																	name: "branch-1",
																	type: "branch",
																	content: {
																		__default__: [
																			{
																				name: "csv-9",
																				type: "normal",
																				content: {},
																			},
																		],
																		branch1: [
																			{
																				name: "http-client-2",
																				type: "normal",
																				content: {},
																			},
																			{
																				name: "file-helpers-3",
																				type: "normal",
																				content: {},
																			},
																			{
																				name: "call-workflow-2",
																				type: "normal",
																				content: {},
																			},
																			{
																				name: "bynder-1",
																				type: "branch",
																				content: {
																					error: [
																						{
																							name: "csv-11",
																							type: "normal",
																							content: {},
																						},
																						{
																							name: "break-loop-3",
																							type: "break",
																							content: {},
																							target: "loop-2",
																						},
																					],
																					success: [
																						{
																							name: "csv-2",
																							type: "normal",
																							content: {},
																						},
																					],
																				},
																			},
																		],
																		branch2: [
																			{
																				name: "boolean-condition-4",
																				type: "branch",
																				content: {
																					true: [
																						{
																							name: "http-client-3",
																							type: "normal",
																							content: {},
																						},
																						{
																							name: "file-helpers-1",
																							type: "normal",
																							content: {},
																						},
																						{
																							name: "call-workflow-3",
																							type: "normal",
																							content: {},
																						},
																						{
																							name: "bynder-2",
																							type: "branch",
																							content: {
																								error: [
																									{
																										name: "csv-7",
																										type: "normal",
																										content: {},
																									},
																									{
																										name: "break-loop-2",
																										type: "break",
																										content: {},
																										target: "loop-2",
																									},
																								],
																								success: [
																									{
																										name: "csv-1",
																										type: "normal",
																										content: {},
																									},
																								],
																							},
																						},
																					],
																					false: [],
																				},
																			},
																		],
																		branch3: [
																			{
																				name: "boolean-condition-5",
																				type: "branch",
																				content: {
																					true: [
																						{
																							name: "http-client-4",
																							type: "normal",
																							content: {},
																						},
																						{
																							name: "file-helpers-2",
																							type: "normal",
																							content: {},
																						},
																						{
																							name: "call-workflow-4",
																							type: "normal",
																							content: {},
																						},
																						{
																							name: "bynder-3",
																							type: "branch",
																							content: {
																								error: [
																									{
																										name: "csv-12",
																										type: "normal",
																										content: {},
																									},
																									{
																										name: "break-loop-4",
																										type: "break",
																										content: {},
																										target: "loop-2",
																									},
																								],
																								success: [
																									{
																										name: "csv-6",
																										type: "normal",
																										content: {},
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
															false: [],
														},
													},
												],
											},
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
				{
					name: "csv-10",
					type: "normal",
					content: {},
				},
				{
					name: "csv-4",
					type: "normal",
					content: {},
				},
			],
			steps: {
				"storage-2": {
					title: "Save SyncFile ID",
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
						value: {
							type: "jsonpath",
							value: "$.steps.csv-5.id",
						},
						key: {
							type: "string",
							value: "adobeStockSyncFile-{$.env.solution_instance_id or:'adobeSolutionID'}",
						},
					},
				},
				"csv-4": {
					title: "Export syncFile",
					connector: {
						name: "csv",
						version: "7.0",
					},
					operation: "export_csv",
					output_schema: {},
					error_handling: {},
					properties: {
						include_header: {
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
						force_enclose: {
							type: "boolean",
							value: true,
						},
						enclose_headers: {
							type: "boolean",
							value: false,
						},
						rfc_4180: {
							type: "object",
							value: {
								enabled: {
									type: "boolean",
									value: false,
								},
								lines_terminated_by: {
									type: "string",
									value: "\n",
								},
							},
						},
						id: {
							type: "jsonpath",
							value: "$.steps.storage-4.value",
						},
						name: {
							type: "string",
							value: "adobeStockSyncFile-{$.env.solution_instance_id or:'adobeSolutionID'}",
						},
					},
				},
				"csv-9": {
					title: "CSV Editor",
					connector: {
						name: "csv",
						version: "7.0",
					},
					operation: "add_row",
					output_schema: {},
					error_handling: {},
					properties: {
						stringify_boolean: {
							type: "boolean",
							value: true,
						},
						allow_null: {
							type: "boolean",
							value: false,
						},
						id: {
							type: "jsonpath",
							value: "$.steps.csv-8.id",
						},
						cells: {
							type: "object",
							value: {
								AdobeStockID: {
									type: "jsonpath",
									value: "$.steps.loop-2.value.id",
								},
								time: {
									type: "jsonpath",
									value: "$.steps.date-time-helpers-1.result",
								},
								failType: {
									type: "string",
									value: "Unhandled FileType {$.steps.loop-2.value}",
								},
							},
						},
					},
				},
				"break-loop-4": {
					title: "Break Loop",
					connector: {
						name: "break-loop",
						version: "1.1",
					},
					operation: "continue",
					output_schema: {},
					error_handling: {},
					properties: {},
				},
				"call-workflow-1": {
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
							value: "b843e900-cf72-42eb-8db8-a9ad71b4563c",
						},
						trigger_input: {
							type: "jsonpath",
							value: "$.steps.bynder-4.results[0]",
						},
					},
				},
				"storage-15": {
					title: "Get Bearer Token",
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
							value: "JWTBearer",
						},
					},
				},
				"math-helpers-1": {
					title: "Set Page Number",
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
							value: "$.steps.loop-1.index",
						},
						second_value: {
							value: 50,
							type: "integer",
						},
					},
				},
				"storage-14": {
					title: "Set Bearer Token",
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
							value: "JWTBearer",
						},
						value: {
							type: "jsonpath",
							value: "$.steps.call-workflow-1.response",
						},
					},
				},
				"file-helpers-2": {
					title: "Save File",
					connector: {
						name: "file-helpers",
						version: "2.5",
					},
					operation: "create_file",
					output_schema: {},
					error_handling: {},
					properties: {
						name: {
							type: "string",
							value: "Adobe Stock {$.steps.loop-2.value.id}.{$.steps.data-mapper-1.output.content_type}",
						},
						url: {
							type: "jsonpath",
							value: "$.steps.http-client-4.response.headers.location",
						},
					},
				},
				"csv-12": {
					title: "CSV Editor",
					connector: {
						name: "csv",
						version: "7.0",
					},
					operation: "add_row",
					output_schema: {},
					error_handling: {},
					properties: {
						stringify_boolean: {
							type: "boolean",
							value: true,
						},
						allow_null: {
							type: "boolean",
							value: false,
						},
						id: {
							type: "jsonpath",
							value: "$.steps.csv-8.id",
						},
						cells: {
							type: "object",
							value: {
								AdobeStockID: {
									type: "jsonpath",
									value: "$.steps.loop-2.value.id",
								},
								time: {
									type: "jsonpath",
									value: "$.steps.date-time-helpers-1.result",
								},
								failType: {
									type: "string",
									value: "Bynder Upload Failure  {$.steps.loop-2.value}",
								},
							},
						},
					},
				},
				"csv-8": {
					title: "Create Empty Error Log",
					connector: {
						name: "csv",
						version: "7.0",
					},
					operation: "create_in_memory_csv",
					output_schema: {},
					error_handling: {},
					properties: {
						scope: {
							type: "string",
							value: "current_run",
						},
						number_of_columns: {
							type: "integer",
							value: 3,
						},
						number_of_rows: {
							type: "integer",
							value: 0,
						},
						use_utf8: {
							type: "boolean",
							value: false,
						},
						columns: {
							type: "array",
							value: [
								{
									type: "object",
									value: {
										name: {
											type: "string",
											value: "AdobeStockID",
										},
										type: {
											type: "string",
											value: "text",
										},
										format: {
											type: "string",
											value: "",
										},
									},
								},
								{
									type: "object",
									value: {
										name: {
											type: "string",
											value: "time",
										},
										type: {
											type: "string",
											value: "text",
										},
									},
								},
								{
									type: "object",
									value: {
										name: {
											type: "string",
											value: "failType",
										},
										type: {
											type: "string",
											value: "text",
										},
									},
								},
							],
						},
					},
				},
				"branch-1": {
					title: "Branch",
					connector: {
						name: "branch",
						version: "1.2",
					},
					operation: "simple",
					output_schema: {},
					error_handling: {},
					properties: {
						value: {
							type: "jsonpath",
							value: "$.steps.loop-2.value.content_type",
						},
						branches: {
							type: "array",
							value: [
								{
									type: "object",
									value: {
										value: {
											type: "string",
											value: "image/jpeg",
										},
										label: {
											type: "string",
											value: "Image",
										},
									},
								},
								{
									type: "object",
									value: {
										value: {
											type: "string",
											value: "application/illustrator",
										},
										label: {
											type: "string",
											value: "Vector",
										},
									},
								},
								{
									type: "object",
									value: {
										value: {
											type: "string",
											value: "video/quicktime",
										},
										label: {
											type: "string",
											value: "Video",
										},
									},
								},
							],
						},
					},
				},
				"data-mapper-1": {
					title: "Data Mapper",
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
								type: "null",
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
							value: "$.steps.loop-2.value",
						},
					},
				},
				"bynder-3": {
					title: "Upload to Bynder",
					connector: {
						name: "bynder",
						version: "1.3",
					},
					operation: "upload_asset",
					output_schema: {},
					error_handling: {
						strategy: "manual",
					},
					authentication: {
						group: "710d5e41-2a7b-4376-9792-dac8f2d89ba5",
						title: "Keiffer Bynder Account - BLCR",
						service_icon: {
							icon_type: "url",
							value: "//s3.amazonaws.com/images.tray.io/artisan/icons/55fdd831638972b19fec6bc4a2da6784.png",
						},
						scopes: [],
						service_name: "bynder",
						service_version: 1,
					},
					properties: {
						file: {
							type: "jsonpath",
							value: "$.steps.file-helpers-2.file",
						},
						brand_id: {
							type: "jsonpath",
							value: "$.steps.bynder-4.results[0].id",
						},
						description: {
							type: "jsonpath",
							value: "$.steps.loop-2.value.title",
						},
						name: {
							type: "jsonpath",
							value: "$.steps.file-helpers-2.file.name",
						},
						tags: {
							type: "jsonpath",
							value: "$.steps.call-workflow-4.response",
						},
					},
				},
				"call-workflow-3": {
					title: "Call Workflow",
					connector: {
						name: "call-workflow",
						version: "2.0",
					},
					operation: "fire_and_wait_for_response",
					output_schema: {},
					error_handling: {},
					properties: {
						workflow_id: {
							type: "string",
							value: "a0acf960-0801-4e7d-b8e1-2ac5831e54c8",
						},
						trigger_input: {
							type: "object",
							value: {
								bearer: {
									type: "jsonpath",
									value: "$.steps.storage-15.value",
								},
								stockID: {
									type: "jsonpath",
									value: "$.steps.loop-2.value.id",
								},
								apiKey: {
									type: "jsonpath",
									value: "$.steps.object-helpers-1.result.API_KEY",
								},
							},
						},
					},
				},
				"storage-5": {
					title: "Set Client Credentials",
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
							value: "AdobeCredentials-{$.env.workflow_uuid}",
						},
						value: {
							type: "jsonpath",
							value: "$.config.accountCredentials",
						},
					},
				},
				"http-client-3": {
					title: "Download Vector",
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
											"x-amz-id-2": {
												type: "string",
											},
											"x-amz-request-id": {
												type: "string",
											},
											date: {
												type: "string",
											},
											"last-modified": {
												type: "string",
											},
											"x-amz-expiration": {
												type: "string",
											},
											etag: {
												type: "string",
											},
											"x-amz-version-id": {
												type: "string",
											},
											"content-disposition": {
												type: "string",
											},
											"accept-ranges": {
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
											file: {
												type: "object",
												properties: {
													name: {
														type: "string",
													},
													url: {
														type: "string",
													},
													mime_type: {
														type: "string",
													},
													expires: {
														type: "number",
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
						target: "loop-2",
						strategy: "continueLoop",
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
							value: "$.steps.loop-2.value.download_url",
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
											value: "$.steps.object-helpers-1.result.API_KEY",
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
											value: "Bearer {$.steps.storage-15.value}",
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
				"bynder-4": {
					title: "Get Bynder Brand ID",
					connector: {
						name: "bynder",
						version: "1.3",
					},
					operation: "list_brands",
					output_schema: {},
					error_handling: {},
					authentication: {
						group: "710d5e41-2a7b-4376-9792-dac8f2d89ba5",
						title: "Keiffer Bynder Account - BLCR",
						service_icon: {
							icon_type: "url",
							value: "//s3.amazonaws.com/images.tray.io/artisan/icons/55fdd831638972b19fec6bc4a2da6784.png",
						},
						scopes: [],
						service_name: "bynder",
						service_version: 1,
					},
					properties: {},
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
											value: "$.config.syncVideo",
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
				"csv-7": {
					title: "CSV Editor",
					connector: {
						name: "csv",
						version: "7.0",
					},
					operation: "add_row",
					output_schema: {},
					error_handling: {},
					properties: {
						stringify_boolean: {
							type: "boolean",
							value: true,
						},
						allow_null: {
							type: "boolean",
							value: false,
						},
						id: {
							type: "jsonpath",
							value: "$.steps.csv-8.id",
						},
						cells: {
							type: "object",
							value: {
								AdobeStockID: {
									type: "jsonpath",
									value: "$.steps.loop-2.value.id",
								},
								time: {
									type: "jsonpath",
									value: "$.steps.date-time-helpers-1.result",
								},
								failType: {
									type: "string",
									value: "Bynder Upload Failure  {$.steps.loop-2.value}",
								},
							},
						},
					},
				},
				"boolean-condition-2": {
					title: "ID not in SyncFile? Upload",
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
											value: "$.steps.csv-3.found",
										},
										comparison_type: {
											type: "string",
											value: "===",
										},
										value2: {
											type: "boolean",
											value: false,
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
				"csv-10": {
					title: "Export Error Log",
					connector: {
						name: "csv",
						version: "7.0",
					},
					operation: "export_csv",
					output_schema: {},
					error_handling: {},
					properties: {
						include_header: {
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
						force_enclose: {
							type: "boolean",
							value: true,
						},
						enclose_headers: {
							type: "boolean",
							value: false,
						},
						rfc_4180: {
							type: "object",
							value: {
								enabled: {
									type: "boolean",
									value: false,
								},
								lines_terminated_by: {
									type: "string",
									value: "\n",
								},
							},
						},
						id: {
							type: "jsonpath",
							value: "$.steps.csv-8.id",
						},
						name: {
							type: "string",
							value: "adobeStockErrorFile-{$.env.solution_instance_id or:'adobeSolutionID'}",
						},
					},
				},
				"bynder-2": {
					title: "Upload to Bynder",
					connector: {
						name: "bynder",
						version: "1.3",
					},
					operation: "upload_asset",
					output_schema: {},
					error_handling: {
						strategy: "manual",
					},
					authentication: {
						group: "710d5e41-2a7b-4376-9792-dac8f2d89ba5",
						title: "Keiffer Bynder Account - BLCR",
						service_icon: {
							icon_type: "url",
							value: "//s3.amazonaws.com/images.tray.io/artisan/icons/55fdd831638972b19fec6bc4a2da6784.png",
						},
						scopes: [],
						service_name: "bynder",
						service_version: 1,
					},
					properties: {
						file: {
							type: "jsonpath",
							value: "$.steps.file-helpers-1.file",
						},
						brand_id: {
							type: "jsonpath",
							value: "$.steps.bynder-4.results[0].id",
						},
						description: {
							type: "jsonpath",
							value: "$.steps.loop-2.value.title",
						},
						name: {
							type: "jsonpath",
							value: "$.steps.file-helpers-1.file.name",
						},
						tags: {
							type: "jsonpath",
							value: "$.steps.call-workflow-3.response",
						},
					},
				},
				"csv-3": {
					title: "Find Asset in SyncFile",
					connector: {
						name: "csv",
						version: "7.0",
					},
					operation: "find_row",
					output_schema: {},
					error_handling: {},
					properties: {
						id: {
							type: "jsonpath",
							value: "$.steps.storage-4.value",
						},
						filters: {
							type: "array",
							value: [
								{
									type: "object",
									value: {
										column: {
											type: "string",
											value: "AdobeStockID",
										},
										operator: {
											type: "string",
											value: "=",
										},
										value: {
											type: "string",
											value: "{$.steps.loop-2.value.id}",
										},
									},
								},
							],
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
											type: "number",
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
									],
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
					error_handling: {},
					properties: {
						workflow_id: {
							type: "string",
							value: "a0acf960-0801-4e7d-b8e1-2ac5831e54c8",
						},
						trigger_input: {
							type: "object",
							value: {
								bearer: {
									type: "jsonpath",
									value: "$.steps.storage-15.value",
								},
								stockID: {
									type: "jsonpath",
									value: "$.steps.loop-2.value.id",
								},
								apiKey: {
									type: "jsonpath",
									value: "$.steps.object-helpers-1.result.API_KEY",
								},
							},
						},
					},
				},
				"break-loop-3": {
					title: "Break Loop",
					connector: {
						name: "break-loop",
						version: "1.1",
					},
					operation: "continue",
					output_schema: {},
					error_handling: {},
					properties: {},
				},
				"boolean-condition-4": {
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
											value: "$.config.syncVector",
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
					title: "Get SyncFile ID",
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
						default_value: {
							type: "null",
							value: null,
						},
						key: {
							type: "string",
							value: "adobeStockSyncFile-{$.env.solution_instance_id or:'adobeSolutionID'}",
						},
					},
				},
				"http-client-4": {
					title: "Download Video",
					connector: {
						name: "http-client",
						version: "5.5",
					},
					operation: "get_request",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
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
									date: {
										type: "string",
									},
									via: {
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
							response: {
								type: "string",
							},
							message: {
								type: "string",
							},
						},
					},
					error_handling: {
						target: "loop-2",
						strategy: "continueLoop",
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
							value: "$.steps.loop-2.value.download_url",
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
											value: "$.steps.object-helpers-1.result.API_KEY",
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
											value: "Bearer {$.steps.storage-15.value}",
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
											value: "$.steps.object-helpers-1.result.API_KEY",
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
											value: "Bearer {$.steps.storage-15.value}",
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
											value: "100",
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
				"bynder-1": {
					title: "Upload to Bynder",
					connector: {
						name: "bynder",
						version: "1.3",
					},
					operation: "upload_asset",
					output_schema: {},
					error_handling: {
						strategy: "manual",
					},
					authentication: {
						group: "710d5e41-2a7b-4376-9792-dac8f2d89ba5",
						title: "Keiffer Bynder Account - BLCR",
						service_icon: {
							icon_type: "url",
							value: "//s3.amazonaws.com/images.tray.io/artisan/icons/55fdd831638972b19fec6bc4a2da6784.png",
						},
						scopes: [],
						service_name: "bynder",
						service_version: 1,
					},
					properties: {
						file: {
							type: "jsonpath",
							value: "$.steps.file-helpers-3.file",
						},
						description: {
							type: "jsonpath",
							value: "$.steps.loop-2.value.title",
						},
						name: {
							type: "string",
							value: "Adobe Stock {$.steps.loop-2.value.id}.{$.steps.data-mapper-1.output.content_type}",
						},
						brand_id: {
							type: "jsonpath",
							value: "$.steps.bynder-4.results[0].id",
						},
						tags: {
							type: "jsonpath",
							value: "$.steps.call-workflow-2.response",
						},
					},
				},
				"csv-11": {
					title: "CSV Editor",
					connector: {
						name: "csv",
						version: "7.0",
					},
					operation: "add_row",
					output_schema: {},
					error_handling: {},
					properties: {
						stringify_boolean: {
							type: "boolean",
							value: true,
						},
						allow_null: {
							type: "boolean",
							value: false,
						},
						id: {
							type: "jsonpath",
							value: "$.steps.csv-8.id",
						},
						cells: {
							type: "object",
							value: {
								AdobeStockID: {
									type: "jsonpath",
									value: "$.steps.loop-2.value.id",
								},
								time: {
									type: "jsonpath",
									value: "$.steps.date-time-helpers-1.result",
								},
								failType: {
									type: "string",
									value: "Bynder Upload Failure  {$.steps.loop-2.value}",
								},
							},
						},
					},
				},
				"csv-6": {
					title: "Add to SyncFile",
					connector: {
						name: "csv",
						version: "7.0",
					},
					operation: "add_row",
					output_schema: {},
					error_handling: {},
					properties: {
						stringify_boolean: {
							type: "boolean",
							value: true,
						},
						allow_null: {
							type: "boolean",
							value: false,
						},
						id: {
							type: "jsonpath",
							value: "$.steps.storage-4.value",
						},
						cells: {
							type: "object",
							value: {
								AdobeStockID: {
									type: "jsonpath",
									value: "$.steps.loop-2.value.id",
								},
								BynderMediaID: {
									type: "jsonpath",
									value: "$.steps.bynder-3.mediaid",
								},
								timeUploaded: {
									type: "jsonpath",
									value: "$.steps.date-time-helpers-1.result",
								},
							},
						},
					},
				},
				"break-loop-2": {
					title: "Break Loop",
					connector: {
						name: "break-loop",
						version: "1.1",
					},
					operation: "continue",
					output_schema: {},
					error_handling: {},
					properties: {},
				},
				"date-time-helpers-1": {
					title: "Get Current Timestamp",
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
							value: "UTC",
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
					title: "Loop Each Purchsed Asset",
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
							value: "$.steps.http-client-1.response.body.files",
						},
					},
				},
				"storage-1": {
					title: "Get SyncFile ID",
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
						default_value: {
							type: "null",
							value: null,
						},
						key: {
							type: "string",
							value: "adobeStockSyncFile-{$.env.solution_instance_id or:'adobeSolutionID'}",
						},
					},
				},
				"csv-1": {
					title: "Add to SyncFile",
					connector: {
						name: "csv",
						version: "7.0",
					},
					operation: "add_row",
					output_schema: {},
					error_handling: {},
					properties: {
						stringify_boolean: {
							type: "boolean",
							value: true,
						},
						allow_null: {
							type: "boolean",
							value: false,
						},
						id: {
							type: "jsonpath",
							value: "$.steps.storage-4.value",
						},
						cells: {
							type: "object",
							value: {
								AdobeStockID: {
									type: "jsonpath",
									value: "$.steps.loop-2.value.id",
								},
								BynderMediaID: {
									type: "jsonpath",
									value: "$.steps.bynder-2.mediaid",
								},
								timeUploaded: {
									type: "jsonpath",
									value: "$.steps.date-time-helpers-1.result",
								},
							},
						},
					},
				},
				"file-helpers-3": {
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
							type: "string",
							value: "Adobe Stock {$.steps.loop-2.value.id}.{$.steps.data-mapper-1.output.content_type}",
						},
						headers: {
							type: "object",
							value: {},
						},
					},
				},
				"csv-5": {
					title: "Create Empty SyncFile",
					connector: {
						name: "csv",
						version: "7.0",
					},
					operation: "create_in_memory_csv",
					output_schema: {},
					error_handling: {},
					properties: {
						scope: {
							type: "string",
							value: "account",
						},
						number_of_columns: {
							type: "integer",
							value: 3,
						},
						number_of_rows: {
							type: "integer",
							value: 0,
						},
						use_utf8: {
							type: "boolean",
							value: false,
						},
						columns: {
							type: "array",
							value: [
								{
									type: "object",
									value: {
										name: {
											type: "string",
											value: "AdobeStockID",
										},
										type: {
											type: "string",
											value: "text",
										},
										format: {
											type: "string",
											value: "",
										},
									},
								},
								{
									type: "object",
									value: {
										name: {
											type: "string",
											value: "BynderMediaID",
										},
										type: {
											type: "string",
											value: "text",
										},
									},
								},
								{
									type: "object",
									value: {
										name: {
											type: "string",
											value: "timeUploaded",
										},
										type: {
											type: "string",
											value: "number",
										},
									},
								},
							],
						},
					},
				},
				"break-loop-1": {
					title: "Break Loop if List = 0",
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
					title: "Get Client Credentials",
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
							value: "AdobeCredentials-{$.env.workflow_uuid}",
						},
					},
				},
				"http-client-2": {
					title: "Download Image",
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
											"x-amz-id-2": {
												type: "string",
											},
											"x-amz-request-id": {
												type: "string",
											},
											date: {
												type: "string",
											},
											"last-modified": {
												type: "string",
											},
											"x-amz-expiration": {
												type: "string",
											},
											etag: {
												type: "string",
											},
											"x-amz-version-id": {
												type: "string",
											},
											"content-disposition": {
												type: "string",
											},
											"accept-ranges": {
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
											file: {
												type: "object",
												properties: {
													name: {
														type: "string",
													},
													url: {
														type: "string",
													},
													mime_type: {
														type: "string",
													},
													expires: {
														type: "number",
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
						target: "loop-2",
						strategy: "continueLoop",
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
							value: "$.steps.loop-2.value.download_url",
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
											value: "$.steps.object-helpers-1.result.API_KEY",
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
											value: "Bearer {$.steps.storage-15.value}",
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
					title: "Create Credentials Object",
					connector: {
						name: "object-helpers",
						version: "4.1",
					},
					operation: "json_parse",
					output_schema: {
						$schema: "http://json-schema.org/draft-04/schema#",
						type: "object",
						properties: {
							result: {
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
									TECHNICAL_ACCOUNT_ID: {
										type: "string",
									},
									TECHNICAL_ACCOUNT_EMAIL: {
										type: "string",
									},
									PUBLIC_KEYS_WITH_EXPIRY: {
										type: "object",
										properties: {
											"12e50b2d16b39ea42650a0e798054a88518606a4": {
												type: "string",
											},
											"613cdacb4adb6758a0a8141d8459da61fae2f9f8": {
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
						source: {
							type: "jsonpath",
							value: "$.steps.storage-6.value",
						},
					},
				},
				"csv-2": {
					title: "Add to SyncFile",
					connector: {
						name: "csv",
						version: "7.0",
					},
					operation: "add_row",
					output_schema: {},
					error_handling: {},
					properties: {
						stringify_boolean: {
							type: "boolean",
							value: true,
						},
						allow_null: {
							type: "boolean",
							value: false,
						},
						id: {
							type: "jsonpath",
							value: "$.steps.storage-4.value",
						},
						cells: {
							type: "object",
							value: {
								AdobeStockID: {
									type: "jsonpath",
									value: "$.steps.loop-2.value.id",
								},
								BynderMediaID: {
									type: "jsonpath",
									value: "$.steps.bynder-1.mediaid",
								},
								timeUploaded: {
									type: "jsonpath",
									value: "$.steps.date-time-helpers-1.result",
								},
							},
						},
					},
				},
				"call-workflow-4": {
					title: "Call Workflow",
					connector: {
						name: "call-workflow",
						version: "2.0",
					},
					operation: "fire_and_wait_for_response",
					output_schema: {},
					error_handling: {},
					properties: {
						workflow_id: {
							type: "string",
							value: "a0acf960-0801-4e7d-b8e1-2ac5831e54c8",
						},
						trigger_input: {
							type: "object",
							value: {
								bearer: {
									type: "jsonpath",
									value: "$.steps.storage-15.value",
								},
								stockID: {
									type: "jsonpath",
									value: "$.steps.loop-2.value.id",
								},
								apiKey: {
									type: "jsonpath",
									value: "$.steps.object-helpers-1.result.API_KEY",
								},
							},
						},
					},
				},
				"boolean-condition-3": {
					title: "SyncFile = null? create",
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
											value: "$.steps.storage-1.value",
										},
										comparison_type: {
											type: "string",
											value: "===",
										},
										value2: {
											type: "null",
											value: null,
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
							value: "$.steps.http-client-3.response.headers.location",
						},
						name: {
							type: "string",
							value: "Adobe Stock {$.steps.loop-2.value.id}.{$.steps.data-mapper-1.output.content_type}",
						},
					},
				},
				trigger: {
					title: "Manual Trigger",
					connector: {
						name: "noop",
						version: "1.1",
					},
					operation: "trigger",
					output_schema: {},
					error_handling: {},
					properties: {},
				},
			},
			dependencies: [
				{
					id: "a0acf960-0801-4e7d-b8e1-2ac5831e54c8",
					name: "Adobe Stock Keyword Generator",
				},
				{
					id: "b843e900-cf72-42eb-8db8-a9ad71b4563c",
					name: "Adobe Stock JWT Generator",
				},
			],
		},
	],
	projects: [],
};

const views = ``;

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
	workflow = softwareSystem "${strReplace(importJSON.workflows[0].title)}" {
	`;
	importArray.forEach((element) => {
		if (element.type === "loop") {
			res = res + loopHandle(element.content._loop, element.name);
		} else if (element.type === "branch") {
			let branch = `	${strReplace(element.name)} = group "${strReplace(groups.find((s) => s.name === element.name).desc)}" {
				`;
			Object.keys(element.content).forEach((el) => {
				branch = branch + branchHandle(element.content[el], el, element.name);
			});
			res = res + `${branch}}`;
		} else {
			res = res + nodeStructure(element);
		}
	});
	res = `${res}}
	trigger -> storage1
	storage1 -> storage4
}`;
	return res;
};

const loopHandle = function (ary, name) {
	let res = `	${strReplace(name)} = group "${strReplace(groups.find((s) => s.name === name).desc)}" {
		`;
	let loop = ``;
	ary.forEach((element) => {
		if (element.type === "loop") {
			loop = `${loopHandle(element.content._loop, element.name)}`;
			res =
				res +
				`${loop}
			}`;
		} else if (element.type === "branch") {
			let branch = `	${strReplace(element.name)} = group "${strReplace(groups.find((s) => s.name === element.name).desc)}" {
				`;
			Object.keys(element.content).forEach((el) => {
				branch = branch + branchHandle(element.content[el], el, element.name);
			});
			res = res + `${branch}}`;
		} else {
			res = res + nodeStructure(element);
		}
	});
	res = `${res}}
	`;
	return res;
};

const branchHandle = function (ary, name, elName) {
	//console.log(ary, name, elName);
	let res = `branch${strReplace(name)} = group "branch ${name}"
	`;
	let branch = ``;
	ary.forEach((element) => {
		if (element.type === "loop") {
			loop = `${loopHandle(element.content._loop, element.name)}`;
			res =
				res +
				`${loop}
			}`;
		} else if (element.type === "branch") {
			//
		} else {
			res = res + nodeStructure(element);
		}
	});
	return res;
};

const nodeStructure = function (obj) {
	//console.log(obj);
	let res = `	${strReplace(obj.name)} = container "${strReplace(groups.find((s) => s.name === obj.name).desc)} - ${strReplace(obj.name)}"
	`;
	return res;
};

const strReplace = function (str) {
	let res = str.replace(/[^a-zA-Z0-9 ]/g, "");
	return res;
};

const groups = groupBuilder(importJSON);

//console.log(groups);
//console.log(JSON.stringify(modelBuilder(importJSON.workflows[0].steps_structure)));
console.log(modelBuilder(importJSON.workflows[0].steps_structure));

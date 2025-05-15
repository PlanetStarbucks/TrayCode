import { OperationHandlerTestSetup } from "@trayio/cdk-dsl/connector/operation/OperationHandlerTest";
import { readManifestHandler } from "./handler";
import "@trayio/cdk-runtime/connector/operation/OperationHandlerTestRunner";

OperationHandlerTestSetup.configureHandlerTest(readManifestHandler, (handlerTest) =>
	handlerTest
		.usingHandlerContext("test")
		.nothingBeforeAll()
		.testCase("should do something", (testCase) =>
			testCase
				.givenNothing()
				.when(() => ({
					file: {
						name: "test.jpg",
						url: "/Users/bill.keiffer/Desktop/Git/connectors-code-storage/CDK/bynder-custom-connectors/content-credentials-test-1/src/read_manifest/testImage1.jpg",
						mime_type: "image/jpeg",
						expires: 1747360816,
					},
				}))
				.then(({ output }) => {
					console.log(output);
				})
				.finallyDoNothing()
		)
		.nothingAfterAll()
);

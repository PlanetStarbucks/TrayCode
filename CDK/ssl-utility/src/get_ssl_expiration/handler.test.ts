import { OperationHandlerTestSetup } from "@trayio/cdk-dsl/connector/operation/OperationHandlerTest";
import { getSslExpirationHandler } from "./handler";
import "@trayio/cdk-runtime/connector/operation/OperationHandlerTestRunner";

OperationHandlerTestSetup.configureHandlerTest(getSslExpirationHandler, (handlerTest) =>
  handlerTest
    .usingHandlerContext("test")
    .nothingBeforeAll()
    .testCase("should do something", (testCase) =>
      testCase
        .givenNothing()
        .when(() => ({ url: "www.google.com" }))
        .then(({ output }) => {
          console.log(output);
        })
        .finallyDoNothing()
    )
    .nothingAfterAll()
);

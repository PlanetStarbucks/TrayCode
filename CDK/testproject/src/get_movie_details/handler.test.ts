import { OperationHandlerTestSetup } from "@trayio/cdk-dsl/connector/operation/OperationHandlerTest";
import { OperationHandlerResult } from "@trayio/cdk-dsl/connector/operation/OperationHandler";
import { getMovieDetailsHandler } from "./handler";
import "@trayio/cdk-runtime/connector/operation/OperationHandlerTestRunner";

OperationHandlerTestSetup.configureHandlerTest(getMovieDetailsHandler, (handlerTest) =>
  handlerTest
    .usingHandlerContext("test")
    .nothingBeforeAll()
    .testCase("should do something", (testCase) =>
      testCase
        .givenNothing()
        .when(() => ({ movieID: 1011985 }))
        .then(({ output }) => {
          console.log(output);
          const outputValue = OperationHandlerResult.getSuccessfulValueOrFail(output);
          expect(outputValue.imdb_id).toEqual("tt21692408");
        })
        .finallyDoNothing()
    )
    .nothingAfterAll()
);

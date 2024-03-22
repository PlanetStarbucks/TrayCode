"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OperationHandlerTest_1 = require("@trayio/cdk-dsl/connector/operation/OperationHandlerTest");
var OperationHandler_1 = require("@trayio/cdk-dsl/connector/operation/OperationHandler");
var handler_1 = require("./handler");
require("@trayio/cdk-runtime/connector/operation/OperationHandlerTestRunner");
OperationHandlerTest_1.OperationHandlerTestSetup.configureHandlerTest(handler_1.getTopRatedMoviesHandler, function (handlerTest) {
    return handlerTest
        .usingHandlerContext("test")
        .nothingBeforeAll()
        .testCase("should return 20 movies", function (testCase) {
        return testCase
            .givenNothing()
            .when(function () { return ({}); })
            .then(function (_a) {
            var output = _a.output;
            // console.log(output);
            var outputValue = OperationHandler_1.OperationHandlerResult.getSuccessfulValueOrFail(output);
            expect(outputValue.results.length).toEqual(20);
        })
            .finallyDoNothing();
    })
        .nothingAfterAll();
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OperationHandlerTest_1 = require("@trayio/cdk-dsl/connector/operation/OperationHandlerTest");
var OperationHandler_1 = require("@trayio/cdk-dsl/connector/operation/OperationHandler");
var handler_1 = require("./handler");
require("@trayio/cdk-runtime/connector/operation/OperationHandlerTestRunner");
OperationHandlerTest_1.OperationHandlerTestSetup.configureHandlerTest(handler_1.getMovieDetailsHandler, function (handlerTest) {
    return handlerTest
        .usingHandlerContext("test")
        .nothingBeforeAll()
        .testCase("should do something", function (testCase) {
        return testCase
            .givenNothing()
            .when(function () { return ({ movieID: 1011985 }); })
            .then(function (_a) {
            var output = _a.output;
            console.log(output);
            var outputValue = OperationHandler_1.OperationHandlerResult.getSuccessfulValueOrFail(output);
            expect(outputValue.imdb_id).toEqual("tt21692408");
        })
            .finallyDoNothing();
    })
        .nothingAfterAll();
});

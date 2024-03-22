"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopRatedMoviesHandler = void 0;
var OperationHandlerSetup_1 = require("@trayio/cdk-dsl/connector/operation/OperationHandlerSetup");
var GlobalConfig_1 = require("../GlobalConfig");
exports.getTopRatedMoviesHandler = OperationHandlerSetup_1.OperationHandlerSetup.configureHandler(function (handler) {
    return handler.withGlobalConfiguration(GlobalConfig_1.globalConfigHttp).usingHttp(function (http) {
        return http
            .get("/3/movie/top_rated")
            .handleRequest(function (_ctx, _input, request) {
            return request.withoutBody();
        })
            .handleResponse(function (_ctx, _input, response) {
            return response.parseWithBodyAsJson();
        });
    });
});

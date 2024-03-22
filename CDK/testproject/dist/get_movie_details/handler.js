"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovieDetailsHandler = void 0;
var OperationHandlerSetup_1 = require("@trayio/cdk-dsl/connector/operation/OperationHandlerSetup");
var GlobalConfig_1 = require("../GlobalConfig");
exports.getMovieDetailsHandler = OperationHandlerSetup_1.OperationHandlerSetup.configureHandler(function (handler) {
    return handler.withGlobalConfiguration(GlobalConfig_1.globalConfigHttp).usingHttp(function (http) {
        return http
            .get("/3/movie/:movieID")
            .handleRequest(function (_ctx, input, request) { return request.addPathParameter("movieID", input.movieID.toString()).withoutBody(); })
            .handleResponse(function (_ctx, _input, response) { return response.parseWithBodyAsJson(); });
    });
});

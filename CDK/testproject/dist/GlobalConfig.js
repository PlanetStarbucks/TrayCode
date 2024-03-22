"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalConfigHttp = void 0;
var OperationGlobalConfig_1 = require("@trayio/cdk-dsl/connector/operation/OperationGlobalConfig");
exports.globalConfigHttp = OperationGlobalConfig_1.OperationGlobalConfigHttp.create()
    .withBaseUrl(function (_ctx) { return "https://api.themoviedb.org"; })
    .withBearerToken(function (ctx) { return ctx.auth.user.access_token; });

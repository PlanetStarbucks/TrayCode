import { OperationGlobalConfigHttp } from "@trayio/cdk-dsl/connector/operation/OperationGlobalConfig";
import { TestprojectAuth } from "./TestprojectAuth";

export const globalConfigHttp = OperationGlobalConfigHttp.create<TestprojectAuth>()
  .withBaseUrl((_ctx) => "https://api.themoviedb.org")
  .withBearerToken((ctx) => ctx.auth!.user.access_token);

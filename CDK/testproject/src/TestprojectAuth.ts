import { TokenOperationHandlerAuth } from "@trayio/cdk-dsl/connector/operation/OperationHandler";

export type UserAuth = {
  access_token: string;
};

export type AppAuth = {
  //OAuth app credentials
};

export type TestprojectAuth = TokenOperationHandlerAuth<UserAuth, AppAuth>;

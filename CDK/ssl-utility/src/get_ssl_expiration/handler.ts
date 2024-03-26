import { OperationHandlerSetup } from "@trayio/cdk-dsl/connector/operation/OperationHandlerSetup";
import { OperationHandlerError, OperationHandlerResult } from "@trayio/cdk-dsl/connector/operation/OperationHandler";
import { SslUtilityAuth } from "../SslUtilityAuth";
import { GetSslExpirationInput } from "./input";
import { GetSslExpirationOutput } from "./output";
import sslChecker from "ssl-checker";

export const getSslExpirationHandler = OperationHandlerSetup.configureHandler<SslUtilityAuth, GetSslExpirationInput, GetSslExpirationOutput>((handler) =>
  handler.usingComposite(async (ctx, input, invoke) => {
    const cert = await sslChecker(input.url, { method: "GET", port: 443 });

    return OperationHandlerResult.success({
      expiration: cert.validTo,
      daysRemaining: cert.daysRemaining,
      valid: cert.valid,
      validFrom: cert.validFrom,
      validFor: cert.validFor,
    });
  })
);

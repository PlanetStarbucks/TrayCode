import { OperationHandlerSetup } from "@trayio/cdk-dsl/connector/operation/OperationHandlerSetup";
import { OperationHandlerError, OperationHandlerResult } from "@trayio/cdk-dsl/connector/operation/OperationHandler";
import { ContentCredentialsBetaAuth } from "../ContentCredentialsBetaAuth";
import { GetManifestInput } from "./input";
import { GetManifestOutput } from "./output";
import { createC2pa } from "c2pa-node";
import axios from "axios";
const c2pa = createC2pa();

export const getManifestHandler = OperationHandlerSetup.configureHandler<ContentCredentialsBetaAuth, GetManifestInput, GetManifestOutput>((handler) =>
	handler.usingComposite(async (ctx, input, invoke) => {
		try {
			const response = await axios.get(input.url, { responseType: "arraybuffer" });
			const buffer = Buffer.from(response.data, "utf-8");

			const mimeType = input.mime_type;
			const manifest = await c2pa.read({ buffer, mimeType });

			return OperationHandlerResult.success({
				manifest: manifest && manifest.active_manifest ? manifest.active_manifest.label : null,
			});
		} catch (error) {
			return OperationHandlerResult.failure(OperationHandlerError.connectorError(`An error occurred while reading the manifest ${error}`));
		}
	})
);

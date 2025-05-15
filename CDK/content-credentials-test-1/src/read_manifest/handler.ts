import { OperationHandlerSetup } from "@trayio/cdk-dsl/connector/operation/OperationHandlerSetup";
import { OperationHandlerError, OperationHandlerResult } from "@trayio/cdk-dsl/connector/operation/OperationHandler";
import { ContentCredentialsTest1Auth } from "../ContentCredentialsTest1Auth";
import { ReadManifestInput } from "./input";
import { ReadManifestOutput } from "./output";
import { createC2pa } from "c2pa-node";
import { readFile } from "node:fs/promises";
const c2pa = createC2pa();

export const readManifestHandler = OperationHandlerSetup.configureHandler<ContentCredentialsTest1Auth, ReadManifestInput, ReadManifestOutput>((handler) =>
	handler.usingComposite(async (ctx, input, invoke) => {
		try {
			const buffer = await readFile(input.file.url);
			const mimeType = input.file.mime_type;
			const manifest = await c2pa.read({ buffer, mimeType });

			if (manifest) {
				console.log(JSON.stringify(manifest, null, 2));
				return OperationHandlerResult.success({
					manifest: manifest,
				});
			} else {
				return OperationHandlerResult.success({
					manifest: "No manifest found",
				});
			}
		} catch (error) {
			return OperationHandlerResult.failure(OperationHandlerError.connectorError(`An error occurred while reading the manifest ${error}`));
		}
	})
);

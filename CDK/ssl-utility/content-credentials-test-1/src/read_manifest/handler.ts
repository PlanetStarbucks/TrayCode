import { OperationHandlerSetup } from "@trayio/cdk-dsl/connector/operation/OperationHandlerSetup";
import { OperationHandlerError, OperationHandlerResult } from "@trayio/cdk-dsl/connector/operation/OperationHandler";
import { ContentCredentialsTest1Auth } from "../ContentCredentialsTest1Auth";
import { ReadManifestInput } from "./input";
import { ReadManifestOutput } from "./output";
import { createC2pa } from "c2pa-node";
import https from "node:https";
const c2pa = createC2pa();

export const readManifestHandler = OperationHandlerSetup.configureHandler<ContentCredentialsTest1Auth, ReadManifestInput, ReadManifestOutput>((handler) =>
	handler.usingComposite(async (ctx, input, invoke) => {
		try {
			const buffer: Buffer = await new Promise((resolve, reject) => {
				https
					.get(input.file.url, (response: any) => {
						const data: Uint8Array[] = [];
						response.on("data", (chunk: Uint8Array) => data.push(chunk));
						response.on("end", () => resolve(Buffer.concat(data)));
						response.on("error", reject);
					})
					.on("error", reject);
			});

			const mimeType = input.file.mime_type;
			const manifest = await c2pa.read({ buffer, mimeType });

			if (manifest) {
				console.log(JSON.stringify(manifest, null, 2));
				return OperationHandlerResult.success({
					manifest: {
						active_manifest: manifest.active_manifest,
						manifests: manifest.manifests,
						validation_status: manifest.validation_status,
					},
				});
			} else {
				return OperationHandlerResult.success({
					manifest: {
						active_manifest: null,
						manifests: [],
						validation_status: "No manifest found",
					},
				});
			}
		} catch (error) {
			return OperationHandlerResult.failure(OperationHandlerError.connectorError(`An error occurred while reading the manifest ${error}`));
		}
	})
);

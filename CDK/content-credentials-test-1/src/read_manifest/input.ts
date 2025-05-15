import { FileReference } from "@trayio/cdk-dsl/connector/operation/OperationHandler";

export type ReadManifestInput = {
	/**
	 * @title File
	 * @description The file object to be uploaded (Use Tray File Helper)
	 */
	file: FileReference;
};

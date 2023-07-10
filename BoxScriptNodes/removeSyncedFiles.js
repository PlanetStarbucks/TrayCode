const input = {
	syncedAssets: ["id:dNC5guTtiaAAAAAAAAAE4Q"],
	fileList: {
		files: [
			{
				id: "id:dNC5guTtiaAAAAAAAAAE4Q",
				name: "8UT6LboU-PI.jpg",
				pathLower: "/blcr bridge test/8ut6lbou-pi.jpg",
				extension: "jpg",
			},
			{
				id: "id:dNC5guTtiaAAAAAAAAAE2Q",
				name: "EOh2Ah7YSsc.jpg",
				pathLower: "/blcr bridge test/eoh2ah7yssc.jpg",
				extension: "jpg",
			},
			{
				id: "id:dNC5guTtiaAAAAAAAAAE4g",
				name: "gGolCK8dtI4.jpg",
				pathLower: "/blcr bridge test/ggolck8dti4.jpg",
				extension: "jpg",
			},
			{
				id: "id:dNC5guTtiaAAAAAAAAAE2g",
				name: "hesKWSzfAgI.jpg",
				pathLower: "/blcr bridge test/heskwszfagi.jpg",
				extension: "jpg",
			},
			{
				id: "id:dNC5guTtiaAAAAAAAAAE4w",
				name: "jGlqOzrhn9k.jpg",
				pathLower: "/blcr bridge test/jglqozrhn9k.jpg",
				extension: "jpg",
			},
		],
		folders: [
			{
				id: "id:dNC5guTtiaAAAAAAAAABdQ",
				name: "150Assets",
				pathLower: "/blcr bridge test/150assets",
			},
			{
				id: "id:dNC5guTtiaAAAAAAAAACCw",
				name: "331Assets",
				pathLower: "/blcr bridge test/331assets",
			},
			{
				id: "id:dNC5guTtiaAAAAAAAAADVg",
				name: "828Assets",
				pathLower: "/blcr bridge test/828assets",
			},
			{
				id: "id:dNC5guTtiaAAAAAAAAAE0Q",
				name: "testNew Folder",
				pathLower: "/blcr bridge test/testnew folder",
			},
			{
				id: "id:dNC5guTtiaAAAAAAAAAE0g",
				name: "TestFolder",
				pathLower: "/blcr bridge test/testfolder",
			},
		],
	},
	supportedTypes: [
		"jpg",
		"jpeg",
		"png",
		"gif",
		"bmp",
		"tiff",
		"tif",
		"ai",
		"eps",
		"psd",
		"psb",
		"wav",
		"mp3",
		"mp4",
		"mpg",
		"mpeg",
		"avi",
		"mov",
		"flv",
		"f4v",
		"wmv",
		"vob",
		"mkv",
		"m4v",
		"dng",
		"doc",
		"docx",
		"ppt",
		"pptx",
		"pdf",
		"raw",
		"mxf",
		"3gpp",
		"3gp",
		"ogv",
		"ts",
		"mts",
		"m2ts",
		"3g2",
		"3gp",
		"m2v",
		"webm",
		"svg",
		".sketch",
	],
};

const run = function (input) {
	let fileList = input.fileList;
	const syncedAssets = input.syncedAssets;
	for (let i = 0; i < fileList.files.length; i++) {
		let obj = fileList.files[i];

		if (syncedAssets.indexOf(obj.id) !== -1) {
			fileList.files.splice(i, 1);
			i--;
		}
	}

	for (var i = 0; i < fileList.files.length; i++) {
		let obj = fileList.files[i];

		if (input.supportedTypes.includes(obj.extension) === false) {
			fileList.files.splice(i, 1);
			i--;
		}
	}
	return fileList;
};

console.log(run(input));

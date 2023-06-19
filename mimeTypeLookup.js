const input = {
	mimeType: "image/jpeg",
};

const run = function (input) {
	return extList[input.mimeType].extensions[0];
};

const extList = {
	"image/jpeg": {
		source: "iana",
		compressible: false,
		extensions: ["jpeg", "jpg", "jpe"],
	},
	"image/png": {
		source: "iana",
		compressible: false,
		extensions: ["png"],
	},
	"image/gif": {
		source: "iana",
		compressible: false,
		extensions: ["gif"],
	},
	"image/bmp": {
		source: "iana",
		compressible: true,
		extensions: ["bmp", "dib"],
	},
	"image/tiff": {
		source: "iana",
		compressible: false,
		extensions: ["tif", "tiff"],
	},
	"application/postscript": {
		source: "iana",
		compressible: true,
		extensions: ["eps", "ps"],
	},
	"application/illustrator": {
		source: "iana",
		compressible: true,
		extensions: ["ai"],
	},
	"image/vnd.adobe.photoshop": {
		source: "iana",
		compressible: true,
		extensions: ["psd"],
	},
	"application/vnd.3gpp.pic-bw-small": {
		source: "iana",
		extensions: ["psb"],
	},
	"audio/wav": {
		compressible: false,
		extensions: ["wav"],
	},
	"audio/wave": {
		compressible: false,
		extensions: ["wav"],
	},
	"audio/mp3": {
		compressible: false,
		extensions: ["mp3"],
	},
	"audio/mp4": {
		source: "iana",
		compressible: false,
		extensions: ["m4a", "mp4a"],
	},
	"video/mp4": {
		source: "iana",
		compressible: false,
		extensions: ["mp4", "mp4v", "mpg4"],
	},
	"video/mpeg": {
		source: "iana",
		compressible: false,
		extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"],
	},
	"video/x-msvideo": {
		source: "apache",
		extensions: ["avi"],
	},
	"video/quicktime": {
		source: "iana",
		compressible: false,
		extensions: ["mov", "qt"],
	},
	"video/x-flv": {
		source: "apache",
		compressible: false,
		extensions: ["flv"],
	},
	"video/x-f4v": {
		source: "apache",
		extensions: ["f4v"],
	},
	"video/x-ms-wmv": {
		source: "apache",
		compressible: false,
		extensions: ["wmv"],
	},
	"video/x-ms-vob": {
		source: "apache",
		extensions: ["vob"],
	},
	"video/x-matroska": {
		source: "apache",
		compressible: false,
		extensions: ["mkv", "mk3d", "mks"],
	},
	"video/x-m4v": {
		source: "apache",
		extensions: ["m4v"],
	},
	"application/msword": {
		source: "iana",
		compressible: false,
		extensions: ["doc", "dot"],
	},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
		source: "iana",
		compressible: false,
		extensions: ["docx"],
	},
	"application/vnd.ms-powerpoint": {
		source: "iana",
		compressible: false,
		extensions: ["ppt", "pps", "pot"],
	},
	"application/vnd.openxmlformats-officedocument.presentationml.presentation": {
		source: "iana",
		compressible: false,
		extensions: ["pptx"],
	},
	"application/pdf": {
		source: "iana",
		compressible: false,
		extensions: ["pdf"],
	},
	"application/mxf": {
		source: "iana",
		extensions: ["mxf"],
	},
	"audio/3gpp": {
		source: "iana",
		compressible: false,
		extensions: ["3gpp"],
	},
	"video/3gpp": {
		source: "iana",
		extensions: ["3gp", "3gpp"],
	},
	"video/ogg": {
		source: "iana",
		compressible: false,
		extensions: ["ogv"],
	},
	"video/mp2t": {
		source: "iana",
		extensions: ["ts"],
	},
	"model/vnd.mts": {
		source: "iana",
		extensions: ["mts"],
	},
	"video/3gpp2": {
		source: "iana",
		extensions: ["3g2"],
	},
	"video/3gpp": {
		source: "iana",
		extensions: ["3gp", "3gpp"],
	},
	"video/webm": {
		source: "apache",
		compressible: false,
		extensions: ["webm"],
	},
	"image/webp": {
		source: "iana",
		extensions: ["webp"],
	},
	"image/svg+xml": {
		source: "iana",
		compressible: true,
		extensions: ["svg", "svgz"],
	},
};

console.log(run(input));

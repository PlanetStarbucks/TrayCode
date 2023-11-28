const input = {
	columnData: [
		{
			id: "subitems",
			title: "Subitems",
			text: "This is a sub item",
		},
		{
			id: "person",
			title: "Person",
			text: "",
		},
		{
			id: "status",
			title: "Status",
			text: "Send to Bynder",
		},
		{
			id: "date4",
			title: "Date",
			text: "2023-04-23",
		},
		{
			id: "file",
			title: "File",
			text: "https://bynder-space.monday.com/protected_static/16594756/resources/900470001/milad-fakurian-VVuWPED6SIY-unsplash.jpg",
		},
		{
			id: "text",
			title: "Marketing Copy",
			text: "this is some marketing stuff that some marketing guy wrote",
		},
		{
			id: "people",
			title: "Dude who Dun It",
			text: "The Dude Abides",
		},
		{
			id: "connect_boards",
			title: "Other board state",
			text: "link test",
		},
		{
			id: "formula",
			title: "Formula",
			text: "",
		},
		{
			id: "date_1",
			title: "Date 1",
			text: "",
		},
	],
	metadataMap: {
		"0A36E145-36E2-4141-A2D18C6BFE0B4B93": "people",
		"A7C97A41-FFBB-409E-B4B76DD234FFAE35": "text",
	},
	staticMetadataMap: {
		"metaproperty.6C2EA67D-9A96-4769-A743413AD87B32A9": "monday.com",
	},
	boardDataMap: {
		"655C6830-C177-470A-A6A9D3FA36294423": "https://{{slug}}.monday.com/boards/{{boardID}}/pulses/{{pulseID}}",
		"A5F07C43-4E23-4864-A2726A806DBDF91C": "https://{{slug}}.monday.com/boards/{{boardID}}/",
		"CBC634F4-C9F4-4B6C-857F00430EEAC7F2": "https://{{slug}}.monday.com/boards/{{boardID}}/pulses/{{pulseID}}?asset_id={{assetID}}",
	},
	eventData: {
		boardID: 4375050651,
		pulseID: 4375050713,
		assetID: "900197378",
		slug: "bynder-space",
	},
};

const run = function (input) {
	let res = {
		...dynamicFormat(input.metadataMap, input.columnData),
		...boardFormat(input.boardDataMap, input.eventData),
	};
	return res;
};

const dynamicFormat = function (map, columnData) {
	let res = {};
	Object.entries(map).forEach((val) => {
		const newKey = `metaproperty.${val[0]}`;
		res[newKey] = mpValue(val[1], columnData);
	});
	return res;
};

const boardFormat = function (map, eventData) {
	let res = {};
	Object.entries(map).forEach((val) => {
		const newKey = `metaproperty.${val[0]}`;
		const newVal = val[1]
			.replace(`{{slug}}`, eventData.slug)
			.replace(`{{pulseID}}`, eventData.pulseID)
			.replace(`{{assetID}}`, eventData.assetID)
			.replace(`{{boardID}}`, eventData.boardID);
		res[newKey] = newVal;
	});
	return res;
};

const mpValue = function (str, ary) {
	let result = "";
	ary.forEach((element) => {
		if (element.id === str) {
			result = element.text;
		}
	});
	return result;
};

console.log(run(input));

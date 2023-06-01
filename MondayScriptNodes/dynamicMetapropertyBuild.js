const input = {
	columnData: [
		{
			id: "subitems",
			title: "Subitems",
			text: "Another upload",
		},
		{
			id: "person",
			title: "Person",
			text: "Toni Aquino",
		},
		{
			id: "status",
			title: "Status",
			text: "Stuck",
		},
		{
			id: "date4",
			title: "Date",
			text: "2023-04-27",
		},
		{
			id: "file",
			title: "File",
			text: "https://bynder-space.monday.com/protected_static/16594756/resources/853063434/collaborate_with_others.png, https://bynder-space.monday.com/protected_static/16594756/resources/870305301/iStock-528919732.jpg",
		},
		{
			id: "text",
			title: "Marketing Copy",
			text: "this is some marketing",
		},
		{
			id: "people",
			title: "Dude who Dun It",
			text: "Bill Keiffer",
		},
		{
			id: "connect_boards",
			title: "Other board state",
			text: "",
		},
		{
			id: "formula",
			title: "Formula",
			text: "",
		},
		{
			id: "date_1",
			title: "Date 1",
			text: "2023-05-31",
		},
	],
	metadataMap: {
		"0A36E145-36E2-4141-A2D18C6BFE0B4B93": "person",
		"7433D302-246D-45C8-80C58841FF0BF8D0": "text",
	},
	staticMetadataMap: {
		"metaproperty.6C2EA67D-9A96-4769-A743413AD87B32A9": "Monday"
	}
};

const run = function (input) {
	let res = input.staticMetadataMap;
	Object.entries(input.metadataMap).forEach((val) => {
		const newKey = `metaproperty.${val[0]}`;
		res[newKey] = mpValue(val[1], input.columnData);
	});
	return res
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

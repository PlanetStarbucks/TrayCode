const input = {
	metadataMap: [
		{
			key: "person",
			value: "0A36E145-36E2-4141-A2D18C6BFE0B4B93",
		},
		{
			key: "text",
			value: "7433D302-246D-45C8-80C58841FF0BF8D0",
		},
		{
			key: "text",
			value: null,
		},
		{
			key: null,
			value: "7433D302-246D-45C8-80C58841FF0BF8D0",
		},
	],
	staticMetapropertyMap: {
		"6C2EA67D-9A96-4769-A743413AD87B32A9": "Monday",
	},
	bynderMetapropertyList: [
		{
			text: "Testing date ui",
			value: "D1F45D8B-B872-4322-B4A4A6F6517E1B7F",
		},
		{
			text: "Testing Multi select",
			value: "2F2DB080-C4FB-4758-92B3DCB85ED6B94C",
		},
		{
			text: "Related Package Assets",
			value: "96A2CFAD-0237-45CA-A64B41670B3C2144",
		},
		{
			text: "Testing Single select",
			value: "139D00C8-2116-4707-901221E9C6699719",
		},
		{
			text: "Lens",
			value: "9A8C9538-4DFD-4EA7-9761F3159BBA00C8",
		},
		{
			text: "Visibility",
			value: "20C08EC9-6061-4EC9-99418418393B1293",
		},
		{
			text: "Regions",
			value: "DD0FFCBD-E886-432A-8872E1767E181D5D",
		},
		{
			text: "File Type",
			value: "CF0B535A-6D7D-4007-A2944BF5B33497C0",
		},
		{
			text: "Workfront Task URL",
			value: "37709CEC-EBAD-42EF-9D5C68ACDB264389",
		},
		{
			text: "Edited In",
			value: "D76C8E41-6FE1-4574-AD83DE39152BC415",
		},
		{
			text: "Testing Date",
			value: "E5D67C91-4EB1-4C51-AD110D9069402828",
		},
		{
			text: "Language",
			value: "731047A5-E954-44ED-AD6371E4A48E8687",
		},
		{
			text: "Camera Model",
			value: "F0B52A25-863F-4876-BEFDF8E296CAEC02",
		},
		{
			text: "Asset Type",
			value: "FB6EA287-CAF3-4AC2-B2B90EDBB8AEC4FE",
		},
		{
			text: "Countries",
			value: "1734230F-A766-4924-B1C2EAB4A1469D2C",
		},
		{
			text: "Source",
			value: "6C2EA67D-9A96-4769-A743413AD87B32A9",
		},
		{
			text: "Related Assets",
			value: "66957907-0DB3-4AF1-A462138B00AC26B5",
		},
		{
			text: "Testing Search Text2",
			value: "C7C76CE5-A16A-4A92-B9CB1A5F2A8AEE26",
		},
		{
			text: "Description",
			value: "3CDA2A1F-AF7E-457C-8E4595B64BB28B16",
		},
		{
			text: "Testing text",
			value: "B1A4BE70-4401-4338-AF9A6FD4C682EE19",
		},
		{
			text: "Download Link",
			value: "77B98683-A921-4C0C-B0542AB4729B97EE",
		},
		{
			text: "Photographer",
			value: "0A36E145-36E2-4141-A2D18C6BFE0B4B93",
		},
		{
			text: "Workfront Document ID",
			value: "7433D302-246D-45C8-80C58841FF0BF8D0",
		},
		{
			text: "Workfront Document URL",
			value: "74F390E6-918E-4ACE-8C0CA00005540A97",
		},
		{
			text: "Photographer Portfolio",
			value: "66E5F5CE-BC19-45F0-B8FB6A1F6B9A90BD",
		},
		{
			text: "Workfront Version ID",
			value: "567F67F3-A1C1-47EE-A73FEAEC37D96979",
		},
		{
			text: "Testing Search Text",
			value: "A7C97A41-FFBB-409E-B4B76DD234FFAE35",
		},
		{
			text: "Blur Hash",
			value: "1B4E6F87-6F07-484A-BC3B68C3E4ED3D62",
		},
		{
			text: "Usage",
			value: "7D7FF3F1-1348-4F01-A3FB6FB3DC2351B1",
		},
	],
	configObj: {
        boardID: "4375050651",
        columnID: "status",
        triggerValue: "Send to Bynder"
    }
};

const run = function (input) {
	return {
		staticMetapropertyMap: dotFormat(input.staticMetapropertyMap),
		dynamicMetadataMap: mapBuild(removeNullArray(input.metadataMap)),
		configObj: {
			...input.configObj,
			boardID: Number(input.configObj.boardID)
		}
	};
};

//function to remove null values from input arrays
const removeNullArray = function (array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i].value === null || array[i].key === null) {
			array.splice(i, 1);
			i--;
		}
	}
	return array;
};

//function to remove null values from input objects
const dotFormat = function (obj) {
	Object.keys(obj).forEach((key) => {
		if (key == "null") {
			delete obj[key];
		} else {
			const newKey = `metaproperty.${key}`;
			obj[newKey] = obj[key];
			delete obj[key];
		}
	});
	return obj;
};

//function to build map in form of metaproperty.ID:value
const mapBuild = function (obj) {
	let resObj = {};
	for (let i = 0; i < obj.length; i++) {
		const keyValue = `${obj[i].value}`;
		resObj[keyValue] = obj[i].key;
	}
	return resObj;
};

console.log(run(input));

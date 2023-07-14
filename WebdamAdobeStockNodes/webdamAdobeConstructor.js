const input = {
	metadataMap: [
		{
			key: "description",
			value: "CAPTION",
		},
		{
			key: "title",
			value: "HEADLINE",
		},
	],
	staticMapInput: [
		{
			text: "Credit",
			value: "CREDIT",
		},
		{
			text: "City",
			value: "CITY",
		},
		{
			text: "Province/State",
			value: "STATE",
		},
		{
			text: "Country",
			value: "COUNTRYNAME",
		},
		{
			text: "Rights Usage Terms",
			value: "RIGHTSUSAGETERMS",
		},
		{
			text: "Caption/Description",
			value: "CAPTION",
		},
		{
			text: "Date Sent",
			value: "DATESENT",
		},
		{
			text: "Date Created",
			value: "CREDATE",
		},
		{
			text: "Creator Address",
			value: "CREATORADREXT",
		},
		{
			text: "Keywords",
			value: "KEYWORD",
		},
		{
			text: "TestField5",
			value: "CUSTOMFIELD100",
		},
		{
			text: "TestField1",
			value: "CUSTOMFIELD98",
		},
		{
			text: "sumpin werid",
			value: "CUSTOMFIELD99",
		},
		{
			text: "LSRs Very Special Field",
			value: "CUSTOMFIELD14",
		},
		{
			text: "Headline/Name",
			value: "HEADLINE",
		},
		{
			text: "Usage Terms",
			value: "USAGETERMS",
		},
		{
			text: "Category",
			value: "CATEGORY",
		},
		{
			text: "Contact",
			value: "CONTACT",
		},
		{
			text: "Creator Email",
			value: "CREATOREMAILWRK",
		},
		{
			text: "Creator Phone",
			value: "CREATORTELWRK",
		},
		{
			text: "Creator Postal Code",
			value: "CREATORADRPCODE",
		},
		{
			text: "Creator Website",
			value: "CREATORURLWRK",
		},
		{
			text: "Creator City",
			value: "CREATORCITY",
		},
		{
			text: "Browser URL",
			value: "CUSTOMFIELD40",
		},
		{
			text: "Photographer",
			value: "BYLINE",
		},
		{
			text: "Send to Getty",
			value: "SUBJECTCODE",
		},
		{
			text: "Upload Status",
			value: "CUSTOMFIELD17",
		},
	],
	dataMapInput: {
		RIGHTSUSAGETERMS: "Stock Plan",
		CREDIT: "Adobe Stock",
	},
};

const run = function (input) {
	const qObj = removeNullArray(input.metadataMap);
	qObj.forEach((element) => {
		queryObject[element.key] = element.key;
	});

	//create mapObject that will be used to merge metadata from assets into an object for the Bynder save asset call
	return {
		metaString: `[response.body.files.{` + compactString(qObj) + `}]`,
		queryString: queryBuild(removeNullArray(input.metadataMap)),
		queryObject,
		mapObject: {
			...mapBuild(removeNullArray(input.metadataMap)),
		},
		staticMeta: removeNullObject(input.dataMapInput),
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
const removeNullObject = function (obj) {
	Object.keys(obj).forEach((key) => {
		if (key == "null") {
			delete obj[key];
		} else {
			const newKey = `${key}`;
			obj[newKey] = obj[key];
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

//function to create compactify strings for the JSON transformer node
const compactString = function (obj) {
	let transformerString = `"id": id,"keywords": [keywords.name, id, 'Adobe Stock']`;
	obj.forEach((element) => {
		if (element.key === "category") {
			transformerString = transformerString.concat(`,"`, element.key, `":`, element.key, ".name");
		} else if (element.key === "category_hierarchy") {
			transformerString = transformerString.concat(`,"`, element.key, `": $join(`, element.key, `.name, ',' )`);
		} else if (element.key === "id" || element.key === null) {
			//skip
		} else {
			transformerString = transformerString.concat(`,"`, element.key, `":`, element.key);
		}
	});
	return transformerString;
};

//create the base queryObject
const queryObject = {
	id: "id",
	keywords: "[keywords.name, id, 'Shutterstock']",
	title: "title",
};

//format the query for API call.  This is the params for the call, in the format
//&result_colums[]=... for each of the values defined in the config
const queryBuild = function (obj) {
	let queryString = "";
	if (obj.length == 0) {
		queryString = "";
	} else {
		queryString = `&result_columns[]=${obj.map((obj) => obj.key).join("&result_columns[]=")}`;
	}
	return queryString;
};

console.log(run(input));

const input = {
	metadataMap: [
		{
			key: "description",
			value: "CUSTOMFIELD98",
		},
		{
			key: "image_type",
			value: "CUSTOMFIELD100",
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
		RIGHTSUSAGETERMS: "This is a stock image",
		CATEGORY: "this is a thing",
	},
	licenseMap: [
		{
			key: "job",
			value: "CUSTOMFIELD98",
		},
	],
};

const run = function (input) {
	const qObj = removeNullArray(input.metadataMap);
	qObj.forEach((element) => {
		queryObject[element.key] = element.key;
	});

	//create mapObject that will be used to merge metadata from assets into an object for the Bynder save asset call
	return {
		licenseString: compactString(removeNullArray(input.licenseMap), "") + `}]`,
		metaString: compactString(qObj, "") + `}]`,
		queryObject,
		mapObject: {
			...mapBuild(removeNullArray(input.metadataMap)),
			...mapBuild(removeNullArray(input.licenseMap)),
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
const compactString = function (obj, baseString) {
	obj.forEach((element) => {
		if (element.key === "id" || element.key === "description") {
			//skip
		} else if (element.key === "purchase_order" || element.key === "job" || element.key === "client" || element.key === "other") {
			baseString = baseString.concat(`,"`, element.key, `": metadata.`, element.key);
		} else if (element.key === "user") {
			baseString = baseString.concat(`,"`, element.key, `":`, element.key, `.username`);
		} else if (element.key === "contributor") {
			baseString = baseString.concat(`,"`, element.key, `":`, element.key, `.id`);
		} else if (element.key === "categories") {
			baseString = baseString.concat(`,"`, element.key, `":$join(`, element.key, `.name, ", ")`);
		} else {
			baseString = baseString.concat(`,"`, element.key, `":`, element.key);
		}
	});
	return baseString;
};

//create the base queryObject
const queryObject = {
	id: "id",
	keywords: "[keywords.name, id, 'Shutterstock']",
	title: "title",
};

console.log(run(input));

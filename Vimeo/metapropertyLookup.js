const input = [
	{ value: "content_rating", text: "Content Rating" },
	{ value: "hide_from_vimeo", text: "Private" },
	{ value: "license", text: "License" },
	{ value: "locale", text: "Language" },
	{ value: "password", text: "Password" },
	{ value: "privacy.add", text: "Add to List" },
	{ value: "privacy.comments", text: "Comments" },
	{ value: "privacy.download", text: "Download" },
	{ value: "privacy.embed", text: "Embedabble" },
	{ value: "privacy.view", text: "View Permissions" },
	{ value: "review_page.active", text: "Review" },
];

const run = function (input) {
	let res = {};
	for (let i = 0; i < input.length; i++) {
		res[`${input[i].value}`] = {
			metaproperty: {
				label: input[i].text,
				type: "select",
				name: input[i].value,
				isMultiselect: 0,
				isDisplayField: 1,
				isMultifilter: 0,
				isRequired: 0,
				isMainfilter: 1,
				isFilterable: 1,
				isApiField: 1,
				zindex: 90,
				isDrilldown: 1,
				isEditable: 1,
			},
			options: [],
			edit: {
				label: input[i].text,
				zindex: 91,
			},
		};
	}
	return res;
};

console.log(run(input));

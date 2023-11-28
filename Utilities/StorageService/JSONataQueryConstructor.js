const input = {
	fields: "id,category,keywords",
};

const run = function (input) {
	const items = input.fields.split(",");
	let queryString = `[result.{`;
	for (let i = 0; i < items.length; i++) {
		queryString = queryString + `"${items[i]}": ${items[i]}`;
		if (i !== items.length - 1) {
			queryString = queryString + `,`;
		}
	}
	queryString = queryString + `}]`;
	return queryString;
};

console.log(run(input));

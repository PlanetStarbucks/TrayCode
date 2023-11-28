const input = {
	queryResults: [{ id: 123 }, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
};

const run = function (input) {
	const res = input.queryResults.filter((element) => JSON.stringify(element) !== "{}");
	const items = res.length;
	return {
		result: res,
		items: items,
	};
};

console.log(run(input));

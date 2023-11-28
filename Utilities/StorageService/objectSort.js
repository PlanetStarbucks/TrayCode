const input = {
	list: [
		{
			id: 103406978347,
			desc: "lorem ipsum something something",
		},
		{
			id: 10340698347,
			desc: "lorem ipsum something something",
		},
		{
			id: 1098347,
			desc: "lorem ipsum something something",
		},
		{
			id: 188090806747,
			desc: "lorem ipsum something something",
		},
		{
			id: 18090806747,
			desc: "lorem ipsum something something",
		},
		{
			id: 180908067487,
			desc: "lorem ipsum something something",
		},
		"1644005355",
		"1287260425",
		"1183492053",
		true,
		null,
		{
			id: 103406978347,
			desc: "lorem ipsum something something",
		},
		{
			id: 103406978347,
			desc: "lorem ipsum something something",
		},
	],
};

const run = function (input) {
	const res = {
		objects: input.list.filter((element) => typeof element === "object"),
		other: input.list.filter((element) => typeof element !== "object"),
	};
	return res;
};

console.log(run(input));

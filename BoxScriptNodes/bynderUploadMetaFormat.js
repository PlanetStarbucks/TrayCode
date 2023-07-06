const input = {
	metadataMap: {
		id: ["8935EFA9-286A-42C7-8737D918D364796E", "lalala"],
		options: ["Artwork", "hahahaha"],
	},
};

const run = function (input) {
	const mapObject = [];
	input.metadataMap.id.forEach((value, index) => {
		mapObject.push({
			id: value,
			options: [input.metadataMap.options[index]],
		});
	});
	return mapObject;
};

console.log(run(input));

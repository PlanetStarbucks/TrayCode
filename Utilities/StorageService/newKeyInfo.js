const input = {
	newKey: {
		createNewKey: true,
		currentLength: 68,
		dataLength: 18,
		nextKey: "syncListTest-cfe7fdc0-cf0f-315b-9645-0483ec663445-2",
		newDataLength: 86,
	},
	keyObj: {
		subKeys: ["syncListTest-cfe7fdc0-cf0f-315b-9645-0483ec663445-1"],
		name: "syncListTest",
		items: 0,
		key: "cfe7fdc0-cf0f-315b-9645-0483ec663445",
		activeSubKey: "syncListTest-cfe7fdc0-cf0f-315b-9645-0483ec663445-1",
	},
};

const run = function (input) {
	input.keyObj.subKeys.push(input.newKey.nextKey);
	input.keyObj.activeSubKey = input.newKey.nextKey;
	return input.keyObj;
};

console.log(run(input));

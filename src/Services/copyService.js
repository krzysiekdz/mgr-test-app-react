export default class copyService  {

	copy(item) {
		const copy = {};
		for (var key in item) {
			// console.log(key, item[key]);
			copy[key] = item[key];
		}

		return copy;
	}
}
export default class ModelService {
	
	constructor() {
		this.model = model;
	}

	getData() {
		return this.model.data;
	}

	setData(data) {
		this.model.data = data;
	}

	getModel() {
		return this.model;
	}
}

var model = {
	data: []
};
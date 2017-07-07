import ModelService from './modelService';
import RandomService from './randomService';
import ParseValueService from './parseValueService';

export default class SwapService {

	constructor() {
		this.model = new ModelService().getModel();
	}

	swapFirst() {
		var data = this.model.data;
		if(data.length > 1) {
			var i = 0;
			var j = 1;
			this.swap(i, j);
		}

		return this.model.data.slice();
	}

	swapMid() {
		var data = this.model.data;
		if(data.length > 1) {
			var i = Math.floor(data.length / 2) - 1;
			var j = i+1;
			this.swap(i, j);
		}

		return this.model.data.slice();
	}

	swapLast() {
		var data = this.model.data;
		if(data.length > 1) {
			var i = data.length-2;
			var j = i+1;
			this.swap(i, j);
		}

		return this.model.data.slice();
	}

	swap(i, j) {
		var data = this.model.data;

		var temp = data[i];
		this.model.data[i] = data[j];
		this.model.data[j] = temp;
	}		

}
import ModelService from './modelService';
import RandomService from './randomService';
import ParseValueService from './parseValueService';

export default class AddService {

	constructor() {
		this.model = new ModelService().getModel();
		this.r = new RandomService();
		this.parse = new ParseValueService();

		this.min = 1;
		this.max = 5000;
	}

	addFirst(count) {
		var c = this.parse.parseValue(count, this.min, this.max);
		var newData = this.r.randomObjects(c);
		this.model.data = newData.concat(this.model.data);
		
		return this.model.data;
	}

	addMid(count) {
		var c = this.parse.parseValue(count, this.min, this.max);

		var newData = this.r.randomObjects(c);
		var mid = Math.floor(this.model.data.length / 2);
		var args = [mid, 0];//position mid, 0 removes - for splice function 
		args = args.concat(newData);//mid, 0 + newData -> args for splice
		Array.prototype.splice.apply(this.model.data, args);

		return this.model.data.slice(); //returning copy of array
	}

	addLast(count) {
		var c = this.parse.parseValue(count, this.min, this.max);

		var newData = this.r.randomObjects(c);
		this.model.data = this.model.data.concat(newData);

		return this.model.data;
	}

	clear() {
		this.model.data = [];
		this.r.resetId();

		return [];
	}


}
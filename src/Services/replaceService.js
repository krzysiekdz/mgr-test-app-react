import ModelService from './modelService';
import RandomService from './randomService';
import ParseValueService from './parseValueService';

export default class ReplaceService {

	constructor() {
		this.model = new ModelService().getModel();
		this.r = new RandomService();
		this.parse = new ParseValueService();

		this.min = 1;
		this.max = 5000;
	}

	replaceFirst(count) {
		var c = this.parse.parseValue(count, this.min, this.max);
		var data = this.model.data;
		if(data.length >= c) {
			var newData = this.r.randomObjects(c);	
			for(var i = 0; i < c; i++) {
				data[i] = newData[i];
			}
		}
		
		return this.model.data.slice();
	}

	
	replaceMid(count) {
		var c = this.parse.parseValue(count, this.min, this.max);

		var data = this.model.data;
		if(data.length >= c) {
			var newData = this.r.randomObjects(c);	
			var start = Math.floor(data.length / 2) - Math.floor(c/2);
			var end = start + c;
			for(var i = start, j = 0; i < end; i++, j++) {
				data[i] = newData[j];
			}
		}

		return this.model.data.slice(); 
	}


	replaceLast(count) {
		var c = this.parse.parseValue(count, this.min, this.max);

		var data = this.model.data;
		if(data.length >= c) {
			var newData = this.r.randomObjects(c);	
			var start = data.length - c;
			var end = start + c;
			for(var i = start, j = 0; i < end; i++, j++) {
				data[i] = newData[j];
			}
		}

		return this.model.data;
	}

}
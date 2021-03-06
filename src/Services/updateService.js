import ModelService from './modelService';
import RandomService from './randomService';
import ParseValueService from './parseValueService';

export default class UpdateService {

	constructor() {
		this.model = new ModelService().getModel();
		this.r = new RandomService();
		this.parse = new ParseValueService();

		this.min = 1;
		this.max = 5000;
	}

	updateFirst(count) {
		var c = this.parse.parseValue(count, this.min, this.max);
		var data = this.model.data;
		if(data.length >= c) {
			var newData = this.r.randomObjects(c);	
			for(var i = 0; i < c; i++) {
				var id = data[i].id
				data[i] = newData[i];
				data[i].id = id;
			}
		}
		
		return this.model.data.slice();
	}

	updateMid(count) {
		var c = this.parse.parseValue(count, this.min, this.max);

		var data = this.model.data;
		if(data.length >= c) {
			var newData = this.r.randomObjects(c);	
			var start = Math.floor(data.length / 2) - Math.floor(c/2);
			var end = start + c;
			for(var i = start, j = 0; i < end; i++, j++) {
				var id = data[i].id
				data[i] = newData[j];
				data[i].id = id;
			}
		}

		return this.model.data.slice(); 
	}


	updateLast(count) {
		var c = this.parse.parseValue(count, this.min, this.max);

		var data = this.model.data;
		if(data.length >= c) {
			var newData = this.r.randomObjects(c);	
			var start = data.length - c;
			var end = start + c;
			for(var i = start, j = 0; i < end; i++, j++) {
				var id = data[i].id
				data[i] = newData[j];
				data[i].id = id;
			}
		}

		return this.model.data.slice();
	}

	partialUpdate(every) {
		var e = this.parse.parseValue(every, this.min, 100);
		var data = this.model.data;
		var count = Math.ceil(data.length / e);
		if(data.length > 0) {
			var newData = this.r.randomObjects(count);
			for(var i = 0, j = 0; i < data.length; i+=e, j++) {
				var id = data[i].id
				data[i] = newData[j];
				data[i].id = id;
			}
		} 

		return this.model.data.slice();
	}

	editFirstEl(text) {
		var data = this.model.data, 
			first = this.model.data[0];
		if(data.length > 0) {
			var newData = {
				id: first.id,
				c1: text,
				c2: first.c2,
				c3: first.c3,
				c4: first.c4
			};
			this.model.data[0] = newData;
		}

		return data.slice();
		
	}

}
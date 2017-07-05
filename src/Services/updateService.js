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
				this.update(data[i], newData[i]);
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
				this.update(data[i], newData[j]);
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
				this.update(data[i], newData[j]);
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
				this.update(data[i], newData[j]);
			}
		} 

		return this.model.data.slice();
	}

	update(item, newItem) {
		item.id = newItem.id;
		item.c1 = newItem.c1;
		item.c2 = newItem.c2;
		item.c3 = newItem.c3;
		item.c4 = newItem.c4;
	}

}
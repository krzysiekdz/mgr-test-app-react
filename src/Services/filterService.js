import ModelService from './modelService';

export default class filterService {

	constructor() {
		this.model = new ModelService().getModel();
	}

	filter() {
		var data = this.model.data;

		for(var j = 0; j < data.length; j++) {
			var item = data[j];
			if(item.id % 10 !== 0) {
				this.model.data[j] = {  //creating new object - for shouldComponentUpdate in Item component
					id: item.id,   //using the same Item component - because of id (Item.key = id)
					c1 : item.c1,
					c2 : item.c2,
					c3 : item.c3,
					c4 : item.c4,
					hidden: true
				};
			}
		}

		return this.model.data.slice(); //new object for shouldComponentUpdate in ContentTable component
	}

	unfilter() {
		var data = this.model.data;

		for(var j = 0; j < data.length; j++) {
			var item = data[j];
			if(item.hidden) {
				this.model.data[j] = {  //creating new object - for shouldComponentUpdate in Item component
					id: item.id,
					c1 : item.c1,
					c2 : item.c2,
					c3 : item.c3,
					c4 : item.c4,
					hidden: false
				};
			}
		}

		return this.model.data.slice();
	}
}
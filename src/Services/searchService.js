import ModelService from './modelService';
import CopyService from './copyService';

export default class searchService {

	constructor() {
		this.model = new ModelService().getModel();
		this.copyService = new CopyService();
	}

	search(txt) {
		var col = ['c1', 'c2', 'c3', 'c4'];
		var data = this.model.data;

		for(var j = 0; j < data.length; j++) {
			var item = data[j];
			var copied = false;

			for(var i = 0; i < 4; i++) { //for props: c1,c2,c3,c4
				var prop = item[col[i]] + "";

				if(txt !== "" && prop.indexOf(txt) !== -1) {
					if(!copied) { //we need only one copy per object
						item = this.copyService.copy(item);
						this.model.data[j] = item;
						copied = true;
					}
					
					if(!item.search) {
						item.search = [null, null, null, null];
					}
					item.search[i] = txt;

				} else if (item.search && item.search[i]) {
					if(!copied) { //we need only one copy per object
						item = this.copyService.copy(item);
						this.model.data[j] = item;
						copied = true;
					}
					
					item.search[i] = null;
				}
				
			}
		}

		return this.model.data.slice();
	}

	
}
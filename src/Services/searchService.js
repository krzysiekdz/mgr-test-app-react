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
			for(var i = 0; i < 4; i++) {
				var prop = item[col[i]] + "";
				if(txt !== "" && prop.indexOf(txt) !== -1) {
					const copy = this.copyService.copy(item);
					this.model.data[j] = copy;

					if(!copy.search) {
						copy.search = [null, null, null, null];
					}
					copy.search[i] = txt;
				} else if (item.search && item.search[i]) {
					const copy = this.copyService.copy(item);
					this.model.data[j] = copy;
					copy.search[i] = null;
				}
				
			}
		}

		return this.model.data.slice();
	}

	
}
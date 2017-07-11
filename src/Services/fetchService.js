import ModelService from './modelService';
import RandomService from './randomService';
import http from 'superagent';

export default class fetchService {

	constructor() {
		this.model = new ModelService().getModel();
		this.r = new RandomService();
		this.dataUrl = 'http://localhost:8080/data-files/data';
	}

	fetch(count, app) {
		var dataUrl = this.dataUrl + count + '.json';
		var self = this;

		http.get(dataUrl)
			.end((err, res) => {
				if(err || !res.ok)
					console.log('something went wrong while getting', dataUrl);
				else {
					self.updateData(res.body, app);
				}
			});
	}

	updateData(data, app) {
		this.model.data = data;
		this.r.setId(data.length+1);
		app.setState({data: data.slice()});
	}


}
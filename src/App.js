import React from 'react';
import ContentTable from './Content/ContentTable';
import Menu from './Menu/Menu';
import AddService from './Services/addService';
import RandomService from './Services/randomService';

export default class App extends React.Component {

	constructor() {
		super();
		this.addService = new AddService();
		this.r = new RandomService();

		this.state = {
			data: this.r.randomObjects(5)
		};

		// console.log(this.state);
	}	


	render() {
		const {data} = this.state;
		// console.log('render: App');
		return (
			<div className="app">
		    	<Menu></Menu>
		        <ContentTable items={data} ></ContentTable> 
		     </div>
		);
	}
}
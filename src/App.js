import React from 'react';
import ContentTable from './Content/ContentTable';
import Menu from './Menu/Menu';
import AddService from './Services/addService';

export default class App extends React.Component {

	constructor() {
		super();
		this.addService = new AddService();

		this.state = {
			data: []
		};
	}	

	initElements(count) { 
		this.setState({
			data: this.addService.addFirst(count),
		});
	}


	render() {
		const {data} = this.state;
		console.log('render: App');
		return (
			<div className="app">
		    	<Menu
		    		init={this.initElements.bind(this)}
		    	></Menu>
		        <ContentTable items={data} ></ContentTable> 
		     </div>
		);
	}
}
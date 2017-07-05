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
		this.setState({data: this.addService.addFirst(count)});
	}

	addFirst(count) {
		this.setState({data: this.addService.addFirst(count)});
	}

	addMid(count) {
		this.setState({data: this.addService.addMid(count)});
	}

	addLast(count) {
		this.setState({data: this.addService.addLast(count)});
	}

	clear() {
		this.setState({data: this.addService.clear()});
	}

	render() {
		const {data} = this.state;
		// console.log('render: App');
		return (
			<div className="app">
		    	<Menu
		    		init={this.initElements.bind(this)}
		    		addFirst={this.addFirst.bind(this)}
		    		addMid={this.addMid.bind(this)}
		    		addLast={this.addLast.bind(this)}
		    		clear={this.clear.bind(this)}
		    	></Menu>
		        <ContentTable items={data} ></ContentTable> 
		     </div>
		);
	}
}
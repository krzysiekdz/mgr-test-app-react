import React from 'react';
import ContentTable from './Content/ContentTable';
import Menu from './Menu/Menu';
import AddService from './Services/addService';
import ReplaceService from './Services/replaceService';
import UpdateService from './Services/updateService';
import SwapService from './Services/swapService';

export default class App extends React.Component {

	constructor() {
		super();
		this.addService = new AddService();
		this.replaceService = new ReplaceService();
		this.updateService = new UpdateService();
		this.swapService = new SwapService();

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

	replaceFirst(count) {
		this.setState({data: this.replaceService.replaceFirst(count)});
	}

	replaceMid(count) {
		this.setState({data: this.replaceService.replaceMid(count)});
	}

	replaceLast(count) {
		this.setState({data: this.replaceService.replaceLast(count)});
	}

	updateFirst(count) {
		this.setState({data: this.updateService.updateFirst(count)});
	}

	updateMid(count) {
		this.setState({data: this.updateService.updateMid(count)});
	}

	updateLast(count) {
		this.setState({data: this.updateService.updateLast(count)});
	}

	partialUpdate(every) {
		this.setState({data: this.updateService.partialUpdate(every)});
	}

	swapFirst() {
		this.setState({data: this.swapService.swapFirst()});
	}

	swapMid() {
		this.setState({data: this.swapService.swapMid()});
	}

	swapLast() {
		this.setState({data: this.swapService.swapLast()});
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
		    		replaceFirst={this.replaceFirst.bind(this)}
		    		replaceMid={this.replaceMid.bind(this)}
		    		replaceLast={this.replaceLast.bind(this)}
		    		updateFirst={this.updateFirst.bind(this)}
		    		updateMid={this.updateMid.bind(this)}
		    		updateLast={this.updateLast.bind(this)}
		    		partialUpdate={this.partialUpdate.bind(this)}
		    		swapFirst={this.swapFirst.bind(this)}
		    		swapMid={this.swapMid.bind(this)}
		    		swapLast={this.swapLast.bind(this)}
		    	></Menu>
		        <ContentTable items={data} ></ContentTable> 
		     </div>
		);
	}
}
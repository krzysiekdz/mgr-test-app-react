import React from 'react';
import ContentTable from './ContentTable';
import Menu from './Menu/Menu';

export default class App extends React.Component {

	constructor() {
		super();
	}	


	render() {
		
		return (
			<div className="app">
		    	<Menu></Menu>
		        <ContentTable></ContentTable> 
		     </div>
		);
	}
}
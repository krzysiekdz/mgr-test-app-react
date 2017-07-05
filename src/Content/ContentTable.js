import React from 'react';
import Item from './Item';

export default class ContentTable extends React.Component {

	constructor() {
		super();
	}	

	renderItems() {
		var items = [];
		this.props.items.forEach(item => {
			items.push(<Item 
				item={item} 
				key= {item.id}
			/>);
		});
		return items;
	}


	render() {
		// console.log('render: ContentTable');
		return (
			<div className="content">
		    	<table className="table" name="tableWrap">

		    		<thead>
			            <tr>
			                <th>Id</th>
			                <th>Name</th>
			                <th>Surname</th>
			                <th>Job</th>
			                <th>Salary</th>
			            </tr>
			        </thead>

			        <tbody name="table" >
			        	{this.renderItems()}
			        </tbody>

		    	</table>
		     </div>
		);
	}
}
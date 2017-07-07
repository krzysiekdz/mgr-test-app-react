import React from 'react';
import Item from './Item';

export default class ContentTable extends React.Component {

	constructor() {
		super();
	}	

	renderItems() {
		var items = []; //tu beda umieszczane komponenty wirtualne
		this.props.items.forEach((item, i) => {
			items.push(<Item 
				item={item} 
				key= {item.id}
				id={item.id}
			/>);
		});
		// console.log('virtual items:', items);
		return items;
	}

	// shouldComponentUpdate(props, state) { //moge sprawdzic cala tablice tutaj, albo w metodach shouldCompoUdpt dla Item; tutaj nie oplaca sie sprawdzac, lepiej zrobic to w metodzie Item
	// 	// console.log('should update table', props, state);
	// 	return true;
	// }


	render() {
		console.log('render: ContentTable');
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
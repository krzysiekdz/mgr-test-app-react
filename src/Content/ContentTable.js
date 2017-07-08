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

	shouldComponentUpdate(nextProps, state) { //jesli tablica z danymi items jest inna to dopiero wtedy robimy render
		if(nextProps.items !== this.props.items || 
				this.props.filterChecked !== nextProps.filterChecked)
			return true;
		else 
			return false;
	}


	render() {
		const {filterChecked} = this.props;
		console.log('render: ContentTable');

		const filteredClass = filterChecked ? 'filtered' : '';
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

			        <tbody name="table" className={filteredClass} >
			        	{this.renderItems()}
			        </tbody>

		    	</table>
		     </div>
		);
	}
}
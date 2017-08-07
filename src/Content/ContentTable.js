import React from 'react';
import Item from './Item';

export default class ContentTable extends React.Component {

	constructor() {
		super();
		this.state = {
			selectedItem: null,
		};
	}	

	renderItems() {
		var items = []; //tu beda umieszczane komponenty wirtualne
		this.props.items.forEach((item, i) => {
			items.push(<Item 
				item={item} 
				key= {item.id}
				id={item.id}
				selectItem={this.selectItem.bind(this)}
				selected={this.state.selectedItem}
				removeItem={this.props.removeItem}
			/>);
		});
		// console.log('virtual items:', items);
		return items;
	}

	shouldComponentUpdate(nextProps, state) { //jesli tablica z danymi items jest inna to dopiero wtedy robimy render
		if(nextProps.items !== this.props.items || 
				this.props.filterChecked !== nextProps.filterChecked || 
				this.state.selectedItem !== state.selectItem) //spr czy samo sprawdzenie obiektu state wystarczy - bo chyba robi sie inny
			return true;
		else 
			return false;
	}

	selectItem(item) {
		if(item === this.state.selectedItem) {
			this.setState({selectedItem: null});
		} else {
			this.setState({selectedItem: item});
		}
	}


	render() {
		const {filterChecked} = this.props;
		// console.log('render: ContentTable');

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
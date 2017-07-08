import React from 'react';


export default class Filter extends React.Component {

	constructor() {
		super();
	}	

	filterItems() {
		this.props.filterItems();
	}
	

	render() {
		const checked = this.props.filterChecked;
		console.log('render: filter component');
		return (
			 <div className="container-action">
			    <div className="checkbox">
			        <label> 
			            <input type="checkbox" name="checkbox-filter" checked={checked} onChange={this.filterItems.bind(this)} /> 
			            filter
			        </label> 
			    </div>
			</div>         
		);
	}
}
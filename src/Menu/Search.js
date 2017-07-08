import React from 'react';


export default class Search extends React.Component {

	constructor() {
		super();
	}	

	handleChange(e) {
		this.props.searchAction(e.target.value);
	}

	render() {
		const {searchText} = this.props;
		return (
			 <div className="input-group">
			    <input type="text" className="form-control" placeholder="search for..." name="input-search" 
			    	value={searchText} onChange={this.handleChange.bind(this)} />
			    <span className="input-group-btn">
			        <button className="btn btn-default" name="btn-search" >
			        	search
			        </button>
			    </span>
			</div>   
		);
	}
}
import React from 'react';


export default class Fetch extends React.Component {

	constructor() {
		super();
	}	

	fetch(count) {
		this.props.fetch(count);
	}
	

	render() {
		return (
			 <div className="container-action">
			    <button className="btn btn-default btn-menu" name="fetch1" onClick={this.fetch.bind(this, 1000)} >  
			               
			    	fetch 1k
			    </button>
			    <button className="btn btn-default btn-menu" name="fetch2" onClick={this.fetch.bind(this, 2000)} >             
			    	fetch 2k
			    </button>
			</div>
		);
	}
}
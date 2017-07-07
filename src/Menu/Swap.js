import React from 'react';


export default class Swap extends React.Component {

	constructor() {
		super();
	}	

	swapFirst() {
		this.props.swapFirst();
	}

	swapMid() {
		this.props.swapMid();
	}

	swapLast() {
		this.props.swapLast();
	}


	render() {

		return (
			<div className="container-action">
			    <button className="btn btn-default btn-menu" name="swapFirst" onClick={this.swapFirst.bind(this)} >
					swap I
				</button>
			    <button className="btn btn-default btn-menu" name="swapMid" onClick={this.swapMid.bind(this)} >             
			    	swap II
			    </button>
			    <button className="btn btn-default btn-menu" name="swapLast" onClick={this.swapLast.bind(this)} >             
			    	swap III
			    </button>
			</div>
		);
	}
}
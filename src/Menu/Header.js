import React from 'react';


export default class Header extends React.Component {

	constructor() {
		super();
	}	

	clear() {
		this.props.clear();
	}

	render() {
		var {title} = this.props;
		return (
			<div className="div-header">
		        <span className="label label-info header">
		        	{ title }
		        </span>    
		        <button className="btn btn-default btn-clear" name="clear" onClick={this.clear.bind(this)} >
		        	clear
		        </button> 
		    </div>
		);
	}
}
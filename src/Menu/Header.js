import React from 'react';


export default class Header extends React.Component {

	constructor() {
		super();
	}	


	render() {
		var {title} = this.props;
		return (
			<div className="div-header">
		        <span className="label label-info header">
		        	{ title }
		        </span>    
		        <button className="btn btn-default btn-clear" name="clear">
		        	clear
		        </button> 
		    </div>
		);
	}
}
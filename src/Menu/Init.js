import React from 'react';


export default class Init extends React.Component {

	constructor() {
		super();
	}	


	render() {
		return (
			<div className="input-group">
			    <input type="text" className="form-control" placeholder="init..." name="input-init" />
			    <span className="input-group-btn">
			        <button className="btn btn-default" name="btn-init" >
			        	init
			        </button>
			    </span>
			</div>
		);
	}
}
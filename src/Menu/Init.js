import React from 'react';


export default class Init extends React.Component {

	constructor() {
		super();
	}	

	handleClick() {
		const count = this.refs.inputInit.value;
		this.props.init(count);
	}

	render() {
		return (
			<div className="input-group">
			    <input type="text" className="form-control" placeholder="init..." name="input-init" ref="inputInit" />
			    <span className="input-group-btn">
			        <button className="btn btn-default" name="btn-init" onClick={this.handleClick.bind(this)} >
			        	init
			        </button>
			    </span>
			</div>
		);
	}
}
import React from 'react';


export default class Input extends React.Component {

	constructor() {
		super();
	}	

	handleInput(e) {
		this.props.editAction(e.target.value);
	}

	handleClick() {
		this.props.editAction(this.props.editProp);
	}

	render() {
		const {editProp} = this.props;
		// console.log('render: edit component');
		return (
			<div className="input-group">
			    <input type="text" className="form-control" placeholder="edit..." name="input-edit" 
			    	onChange={this.handleInput.bind(this)} value={editProp} />
			    <span className="input-group-btn">
			        <button className="btn btn-default" name="btn-edit" onClick={this.handleClick.bind(this)} >
			        	edit
			        </button>
			    </span>
			</div>
		);
	}
}
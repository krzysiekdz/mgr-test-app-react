import React from 'react';


export default class Input extends React.Component {

	constructor() {
		super();
	}	

	handleInput(e) {
		this.props.inputAction(e.target.value);
	}

	shouldComponentUpdate(props) {
		if(props.inputProp !== this.props.inputProp) {
			return true;
		} else {
			return false;
		}
	}

	render() {
		const {inputProp} = this.props;
		console.log('render: input component');
		return (
			<div>
				 <div className="input-group">
				    <span className="input-group-addon">
				    	input:
				    </span>
				    <input type="text" className="form-control" placeholder="input..." name="input-input" value={inputProp} onChange={this.handleInput.bind(this)} />
				</div>

				<div className="container-action">
					{inputProp}
				</div>
			</div>
		);
	}
}
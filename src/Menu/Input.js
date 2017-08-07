import React from 'react';


export default class Input extends React.Component {

	constructor() {
		super();
		this.state = {
			inputProp: ''
		}
	}	

	handleInput(e) {
		// this.props.inputAction(e.target.value);
		this.setState({inputProp: e.target.value});
	}

	shouldComponentUpdate(props, state) {
		// if(props.inputProp !== this.props.inputProp) {
		// 	return true;
		// } else {
		// 	return false;
		// }

		if(state.inputProp !== this.state.inputProp) {
			return true;
		} else {
			return false;
		}
	}

	render() {
		const {inputProp} = this.state;
		// console.log('render: input component');
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
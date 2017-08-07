import React from 'react';


export default class Add extends React.Component {

	constructor() {
		super();
	}	

	shouldComponentUpdate(props) {
		if(props.addFirst.toString() !== this.props.addFirst.toString()) {
			return true;
		} else {
			return false;
		}
	}

	addFirst() {
		const count = this.refs.inputAdd.value;
		this.props.addFirst(count);
	}

	addMid() {
		const count = this.refs.inputAdd.value;
		this.props.addMid(count);
	}

	addLast() {
		const count = this.refs.inputAdd.value;
		this.props.addLast(count);
	}


	render() {
		// console.log('render: add component');
		return (
			 <div className="container-action">
			    <button className="btn btn-default btn-menu" name="addFirst" onClick={this.addFirst.bind(this)} >
			    	add I
			    </button>
			    <button className="btn btn-default btn-menu" name="addMid"  onClick={this.addMid.bind(this)} >
					add II
				</button>
			    <button className="btn btn-default btn-menu" name="addLast" onClick={this.addLast.bind(this)} >
			    	add III
			    </button>
			    <div> 
			        add:
			        <input type="text" className="form-control input100" name="input-add" ref="inputAdd" />
			        elements
			    </div>
			</div>
		);
	}
}
import React from 'react';


export default class Update extends React.Component {

	constructor() {
		super();
	}	

	updateFirst() {
		const count = this.refs.inputUpdate.value;
		this.props.updateFirst(count);
	}

	updateMid() {
		const count = this.refs.inputUpdate.value;
		this.props.updateMid(count);
	}

	updateLast() {
		const count = this.refs.inputUpdate.value;
		this.props.updateLast(count);
	}

	partialUpdate() {
		const every = this.refs.inputUpdateEvery.value;
		this.props.partialUpdate(every);
	}


	render() {
		console.log('render: Update');
		return (
			<div className="container-action">
			    <button className="btn btn-default btn-menu" name="updateFirst" onClick={this.updateFirst.bind(this)} >           
			    	update I
			    </button>
			    <button className="btn btn-default btn-menu" name="updateMid" onClick={this.updateMid.bind(this)} >           
			    	update II
			    </button>
			    <button className="btn btn-default btn-menu" name="updateLast" onClick={this.updateLast.bind(this)} >           
			    	update III
			    </button>
			    <div className="menu-block">
			        update: 
			        <input type="text" className="form-control input150"  name="input-update" ref="inputUpdate" /> 
			        elements
			    </div>

			    <div>
			        <button className="btn btn-default btn-menu" name="updateEvery" onClick={this.partialUpdate.bind(this)} >            
			        	update
			        </button>
			        every
			        <input type="text" className="form-control input50"  name="input-update-every" ref="inputUpdateEvery" />
			        th element
			    </div>
			</div>
		);
	}
}
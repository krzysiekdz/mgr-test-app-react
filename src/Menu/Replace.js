import React from 'react';


export default class Replace extends React.Component {

	constructor() {
		super();
	}	

	replaceFirst() {
		const count = this.refs.inputReplace.value;
		this.props.replaceFirst(count);
	}

	replaceMid() {
		const count = this.refs.inputReplace.value;
		this.props.replaceMid(count);
	}

	replaceLast() {
		const count = this.refs.inputReplace.value;
		this.props.replaceLast(count);
	}


	render() {

		return (
			 <div className="container-action">
			    <button className="btn btn-default btn-menu" name="replaceFirst" onClick={this.replaceFirst.bind(this)} >        
			    	replace I
			    </button>
			    <button className="btn btn-default btn-menu" name="replaceMid" onClick={this.replaceMid.bind(this)} >         
			    	replace II
			    </button>
			    <button className="btn btn-default btn-menu" name="replaceLast" onClick={this.replaceLast.bind(this)} >         
			    	replace III
			    </button>
			    <div> 
			        replace:
			        <input type="text" className="form-control input100" name="input-replace" ref="inputReplace" />
			        elements
			    </div>
			</div>
		);
	}
}
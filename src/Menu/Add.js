import React from 'react';


export default class Add extends React.Component {

	constructor() {
		super();
	}	


	render() {

		return (
			 
			 <div className="container-action">
			    <button className="btn btn-default btn-menu" name="addFirst" >
			    	add I
			    </button>
			    <button className="btn btn-default btn-menu" name="addMid" >
					add II
				</button>
			    <button className="btn btn-default btn-menu" name="addLast" >
			    	add III
			    </button>
			    <div> 
			        add:
			        <input type="text" className="form-control input100" name="input-add"  />
			        elements
			    </div>
			</div>
		);
	}
}
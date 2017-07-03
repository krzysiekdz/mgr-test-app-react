import React from 'react';
import Header from './Header';
import Init from './Init';
import Add from './Add';

export default class Menu extends React.Component {

	constructor() {
		super();
	}	


	render() {
		
		return (
			<div className="menu">
		    	<div>
		    		<Header title="ReactJS" ></Header>
		    		<Init />
		    		<Add />
		    	</div>
		     </div>
		);
	}
}
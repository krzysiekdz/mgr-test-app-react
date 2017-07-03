import React from 'react';


export default class ContentTable extends React.Component {

	constructor() {
		super();
	}	


	render() {
		
		return (
			<div className="content">
		    	<table className="table" name="tableWrap">

		    		<thead>
			            <tr>
			                <th>Id</th>
			                <th>Name</th>
			                <th>Surname</th>
			                <th>Job</th>
			                <th>Salary</th>
			            </tr>
			        </thead>

			        <tbody name="table" >
			        	 <tr>
			        	 	<td class="col-md-1"  >
	                        1
	                    </td>
	                    <td class="col-md-2"   >
	                        Tom
	                    </td>
	                    <td class="col-md-2"  >
	                        Jerry
	                    </td>
	                    <td class="col-md-2"  >
	                        Friends
	                    </td>
	                    <td class="col-md-2"  >
	                        10 000
	                    </td>
	                    <td>
	                        <button class="btn btn-default" >
	                            <span class="glyphicon glyphicon-remove"></span>
	                        </button>
	                    </td>
			        	 </tr>
			        </tbody>

		    	</table>
		     </div>
		);
	}
}
import React from 'react';


export default class Item extends React.Component {

	constructor() {
		super();
	}	


	render() {
		const {item} = this.props;
		return (
			<tr>
				<td className="col-md-1"  >
                    {item.id}
                </td>
                <td className="col-md-2" >
                    {item.c1}
                </td>
                <td className="col-md-2"  >
                    {item.c2}
                </td>
                <td className="col-md-2"  >
                    {item.c3}
                </td>
                <td className="col-md-2" >
                    {item.c4}
                </td>
                <td>
                    <button className="btn btn-default">
                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
                </td>
			</tr>
		);
	}
}
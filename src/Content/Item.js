import React from 'react';


export default class Item extends React.Component {

	constructor() {
		super();
	}	

    // componentDidMount() {
    //     console.log('component did mount', this.props.id);    
    // }

    // componentWillReceiveProps() {
    //     console.log('component will receive props', this.props.id);    
    // }

    shouldComponentUpdate(nextProps, nextState) { //jesli zwracamy true, oznacza to, ze komponent rzeczywisty nalezy zrenderowac ponownie (przy pomocy render) i porównac jego drzewo ze starym drzewem
        // console.log('should component update', this.props.id);
        // console.log('should update:', this.props.id, nextProps, nextState);

        if(nextProps.item !== this.props.item)
            return true;
        else 
            return false;
    }

    // componentWillUpdate() {
    //     console.log('component will update', this.props.id);
    // }

    // componentDidUpdate() {
    //     console.log('component did update', this.props.id);
    // }

    // componentWillUnmount() {
    //     console.log('unmounting: ', this.props.id);
    // }
   

	render() {
		const {item} = this.props;
        console.log('render item:', this.props.id);

        const visibility = item.hidden ? 'visible-off':'';
		return (
			<tr className={visibility} >
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
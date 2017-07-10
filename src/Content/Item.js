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

        if(nextProps.item !== this.props.item ||
            (nextProps.selected === this.props.item) || 
            (this.props.selected === this.props.item) )
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
   
    isSearchPass(search, i) {
        return search && search[i];
    }

    isSelected(item) {
        return this.props.item === item;
    }

    handleClick() {
        this.props.selectItem(this.props.item);
    }

	render() {
		const {item} = this.props;
        console.log('render item:', this.props.id);

        const visibility = item.hidden ? ' visible-off ':'';
        const selected = this.isSelected(this.props.selected)? ' selected ' : '' ;
        const s = item.search;
        // console.log(s);
		return (
			<tr className={visibility + selected}  onClick={this.handleClick.bind(this)} >
				<td className="col-md-1"  >
                    {item.id}
                </td>
                <td className={"col-md-2 " + (this.isSearchPass(s, 0)? ' search-selected ':'')} >
                    {item.c1}
                </td>
                <td className={"col-md-2 " + (this.isSearchPass(s, 1)? ' search-selected ':'')}  >
                    {item.c2}
                </td>
                <td className={"col-md-2 " + (this.isSearchPass(s, 2)? ' search-selected ':'')}  >
                    {item.c3}
                </td>
                <td className={"col-md-2 " + (this.isSearchPass(s, 3)? ' search-selected ':'')} >
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
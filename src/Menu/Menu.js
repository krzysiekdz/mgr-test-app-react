import React from 'react';
import Header from './Header';
import Init from './Init';
import Add from './Add';
import Replace from './Replace';
import Update from './Update';
import Swap from './Swap';
import Fetch from './Fetch';
import Input from './Input';
import Edit from './Edit';
import Filter from './Filter';
import Search from './Search';

export default class Menu extends React.Component {

	constructor() {
		super();
	}	


	render() {
		const {init, addFirst, addMid, addLast, clear,
			replaceFirst, replaceMid, replaceLast ,
			updateFirst, updateMid, updateLast, partialUpdate,
			swapFirst, swapMid, swapLast,
			fetch,
			editAction, editProp,
			filterChecked, filterItems,
			searchText, searchAction,
			} = this.props;
		return (
			<div className="menu">
		    	<div>
		    		<Header title="ReactJS" clear={clear} ></Header>
		    		<Init init={init} />
		    		<Add addFirst={addFirst} addMid={addMid} addLast={addLast} />
		    		<Replace replaceFirst={replaceFirst} replaceMid={replaceMid} replaceLast={replaceLast} />
		    		<Update  updateFirst={updateFirst} updateMid={updateMid} updateLast={updateLast} partialUpdate={partialUpdate} />
		    		<Swap swapFirst={swapFirst} swapMid={swapMid} swapLast={swapLast} />
		    		<Fetch fetch={fetch} />
		    		<Input />
		    		<Edit editAction={editAction} editProp={editProp} />
		    		<Filter filterChecked={filterChecked} filterItems={filterItems} />
		    		<Search searchText={searchText}  searchAction={searchAction} />
		    	</div>
		     </div>
		);
	}
}
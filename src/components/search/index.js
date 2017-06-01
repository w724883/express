import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import * as actions from '../../actions';


class Search extends React.Component{
	constructor(props) {
	  	super(props);
	}
	handleSubmit(e){
		e.persist();
		e.preventDefault();
		let key = this.refs.key.value;
		let {dispatch,history} = this.props;
		dispatch(actions.fetchList("page=1&key="+key));
		history.push({
		  pathname: '/list',
		  search: '?key='+key
		});
		
	}
	render(){
		return (
			<form action="/list" method="get" className="search" onSubmit={this.handleSubmit.bind(this)}><input type="search" name="key" ref="key" /><button>搜索</button></form>
		);
	}
}
export default connect((state) => ({state}))(Search);

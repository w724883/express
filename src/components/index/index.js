import React from 'react';
import { connect } from 'react-redux';

import List from '../list';

if(typeof __CLIENT__ != 'undefined'){
	require('./index.scss');
}

class Index extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		let {state} = this.props;
		return (
			<div className="index">
				<List />
			</div>
		);
	}
}
Index = connect((state) => ({state}))(Index);
export default Index;

// <% if(user){ %>
// 	<span>你好 <%=user.username %></span>
// 	<a href="/logout">退出</a>
// <% }else{ %>
// 	<a href="/login">登录</a>
// 	<a href="/register">注册</a>
// <% } %>
// <form action="/list" method="get"><input type="search" name="key" /><button>搜索</button></form>
// <% if(user){ %>
// 	<a href="/list/add">添加</a>
// <% } %>
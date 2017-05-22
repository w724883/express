import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import List from '../list';
import './index.scss';

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

export default connect((state) => ({state}))(Index);

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
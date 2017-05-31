import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class Register extends React.Component{

	render(){
		let {session} = this.props.state;
		return (
			<div className="register">
				<Link to="/login">登录</Link>
				<form action="/register" method="post">					
					<p>用户名：<input type="text" name="username" /></p>
					<p>密码：<input type="password" name="password" /></p>
					<button type="submit">注册</button>
				</form>
			</div>
		);
	}
}
export default connect((state) => ({state}))(Register);

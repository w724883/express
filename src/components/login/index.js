import React from 'react';
import { connect } from 'react-redux';




class Login extends React.Component{

	render(){
		let {session} = this.props.state;
		return (
			<div className="login">
				<form action="/login" method="post">					
					<p>用户名：<input type="text" name="username" /></p>
					<p>密码：<input type="password" name="password" /></p>
					<button type="submit">登陆</button>
				</form>
			</div>
		);
	}
}
export default connect((state) => ({state}))(Login);

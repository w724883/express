import React from 'react';
// import { connect } from 'react-redux';

class Login extends React.Component{
	constructor(props) {
	  	super(props);
	}
	handleSubmit(e){
		e.persist();
		e.preventDefault();

		
	}
	render(){

		return (
			<div className="login">
				<form action="/login" method="post" onSubmit={this.handleSubmit.bind(this)}>
					<p>用户名：<input type="text" ref="username" /></p>
					<p>密码：<input type="password" ref="password" /></p>
					<button type="submit">登陆</button>
				</form>
			</div>
		);
	}
}
export default Login;

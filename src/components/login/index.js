import React from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import config from '../../config';


class Login extends React.Component{
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		error:''
	  	};
	}
	handleSubmit(e){
		e.persist();
		e.preventDefault();

		let username = this.refs.username.value;
		let password = this.refs.password.value;
		// var data = new FormData();

		fetch(config.api.login,{
			method:"POST",
			credentials: "same-origin",
			headers: {
	          'Content-Type': 'application/x-www-form-urlencoded'
	        },
			// mode: "cors",
			body: 'username='+username+'&password='+password,
		}).then((res) => {
			return res.json();
		}).then((res) => {
			if(res.error){
				this.setState({
					error:res.message
				});
			}
			window.location.href = '/';
		});
		// return false;
		
	}
	render(){
		let {session} = this.props.state;
		return (
			<div className="login">
				<form action="/login" method="post" onSubmit={this.handleSubmit.bind(this)}>					
					<p>用户名：<input type="text" ref="username" /></p>
					<p>密码：<input type="password" ref="password" /></p>
					<button type="submit">登陆</button>
				</form>
				<span>{this.state.error}</span>
			</div>
		);
	}
}
export default connect((state) => ({state}))(Login);

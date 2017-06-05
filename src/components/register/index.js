import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import config from '../../config';
if(typeof __CLIENT__ != 'undefined'){
	require('./index.scss');
}
class Register extends React.Component{
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

		fetch(config.api.register,{
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
			}else{
				window.location.href = '/';
			}
		});
		// return false;
		
	}
	render(){
		let {session} = this.props.state;
		return (
			<div className="register">
				<Link to="/login">登录</Link>
				<form action="/register" method="post" onSubmit={this.handleSubmit.bind(this)}>					
					<p>用户名：<input type="text" name="username" ref="username" /></p>
					<p>密码：<input type="password" name="password" ref="password" /></p>
					<button type="submit">注册</button>
				</form>
				<span>{this.state.error}</span>
			</div>
		);
	}
}
Register = connect((state) => ({state}))(Register);
export default Register;
module.exports = Register;

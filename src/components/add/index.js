import React from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import { Link } from 'react-router-dom';
import config from '../../config';
if(typeof __CLIENT__ != 'undefined'){
	require('./index.scss');
}
class Add extends React.Component{
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		error:''
	  	};
	}
	handleSubmit(e){
		e.persist();
		e.preventDefault();

		let title = this.refs.title.value;
		let descriptions = this.refs.descriptions.value;
		// var data = new FormData();

		fetch(config.api.add,{
			method:"POST",
			credentials: "same-origin",
			headers: {
	          'Content-Type': 'application/x-www-form-urlencoded'
	        },
			// mode: "cors",
			body: 'title='+title+'&descriptions='+descriptions,
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
			<div className="login">
				<form action="/add" method="post" onSubmit={this.handleSubmit.bind(this)}>
					<p><input type="text" name="title" ref="title" /></p>
					<p><textarea name="descriptions" ref="descriptions" /></p>
					<button type="submit">添加</button>
				</form>
				<span>{this.state.error}</span>
			</div>
		);
	}
}

Add = connect((state) => ({state}))(Add);
export default Add;
module.exports = Add;
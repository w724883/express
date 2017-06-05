import React from 'react';
import { Route } from 'react-router';
import Index from '../components/index';
// import Login from '../components/login';
// import Register from '../components/register';
// import Add from '../components/add';
// import List from '../components/list';

if(typeof __CLIENT__ == 'undefined'){
	var Login = require('../components/login');
	var Register = require('../components/register');
	var Add = require('../components/add');
	var List = require('../components/list');
}else{
	let Bundle = require('./bundle');
	var Login = () => (
	  <Bundle load={require('bundle-loader?lazy!../components/login')}>
	    {(Login) => <Login />}
	  </Bundle>
	);
	var Register = () => (
	  <Bundle load={require('bundle-loader?lazy!../components/register')}>
	    {(Register) => <Register />}
	  </Bundle>
	);
	var Add = () => (
	  <Bundle load={require('bundle-loader?lazy!../components/add')}>
	    {(Add) => <Add />}
	  </Bundle>
	);
	var List = () => (
	  <Bundle load={require('bundle-loader?lazy!../components/list')}>
	    {(List) => <List />}
	  </Bundle>
	);
}

export default () => (
	<div>
		<Route exact path="/"  component={ Index } />
		<Route path="/login" component={ Login } />
		<Route path="/register" component={ Register } />
		<Route path="/add" component={ Add } />
		<Route path="/list" component={ List } />
	</div>
);
import React from 'react';
import { Route } from 'react-router';
import Index from '../components/index';
import Login from '../components/login';
export default () => (
	<div>
		<Route exact path="/"  component={ Index } />
		<Route path="/login" component={ Login } />
	</div>
);
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import Index from '../components/index';
export default (
	<Router>
		<Route path="/" component={ Index } />
	</Router>
);
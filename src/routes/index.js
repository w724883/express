import React from 'react';
import { Route } from 'react-router';
import Index from '../components/index';
export default () => (
	<Route>
		<Route path="/" component={ Index } />
	</Route>
);
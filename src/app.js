// import React,{Component} from 'react';
// // import {bindActionCreators} from 'redux';
// import { connect } from 'react-redux';
// // import * as Actions from '../actions';
// // import 'babel-polyfill';

// class App extends Component{
// 	render(){
// 		let {state,dispatch} = this.props;
// 		// let boundActionCreators = bindActionCreators(Actions, dispatch);
// 		return (
// 			<div>
// 				{this.props.children}
// 			</div>
// 		);
// 	}

// }

// App = connect((state) => ({state}))(App);

// export default App;


import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';

import Routes from './routes';
import App from './components/app';
// import 'babel-polyfill';
// require('./b.js');
require.ensure(['./b.js'], function(require){
    require('./c.js');
});
render(
    <App>
        <Router>
        	<Routes />
        </Router>
    </App>,
    document.getElementById('app')
);


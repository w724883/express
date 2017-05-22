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
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import store from './store';

import Index from './components/index';
// import 'babel-polyfill';
// import { createStore } from 'redux';
// import reducers from './reducers';
// import { Router, browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
// const store = createStore(reducers);
// const history = syncHistoryWithStore(browserHistory, store);
store.subscribe(() => {
	let _state = store.getState();
	console.log(_state);
});
const routes = (
	<Route>
		<Route path="/" component={ Index } />
	</Route>
)
render(
    <Provider store={store}>
        <Router routes={routes}></Router>
    </Provider>,
    document.getElementById('app')
);


import React from 'react';
import {Route} from 'react-router';
import { Provider } from 'react-redux';
import store from '../store';
store.subscribe(() => {
	let _state = store.getState();
	// console.log(_state);
});


export default class App extends React.Component{
	render(){
		return (
			<Provider store={store}>
			    {this.props.children}
			</Provider>
		)
	}
}

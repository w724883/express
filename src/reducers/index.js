import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const list = (state = {}, action) => {
	switch (action.type) {
		case 'SET_LIST':
			return action.data;break;
		default:
      		return state;
	}
}
const session = (state = {}, action) => {
	switch (action.type) {
		case 'SET_SESSION':
			return action.data;break;
		default:
      		return state;
	}
}
export default combineReducers({
	list,
	session,
	routing: routerReducer
});


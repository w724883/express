import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import reducers from '../reducers';
let store = (typeof __CLIENT__ == 'undefined') ? undefined : window.__store;
// const Store = (state) => (createStore(reducers,state));
export default compose(applyMiddleware(thunk))(createStore)(reducers,store);
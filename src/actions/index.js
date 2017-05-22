import fetch from 'isomorphic-fetch';
import config from '../config';
export const fetchList = (params) => {
	params = params || "";
	return (dispatch,state) => {
		return fetch(config.api.list+"?"+params,{
			mode:"cors"
		}).then(res => {
			return res.json();
		}).then(json => {
			if(json.error == 0){
				let data = json.data;
				// if(typeof __CLIENT__ != 'undefined'){
				// 	let list = state().list.data;
					
				// 	data = list ? list.concat(data) : data;
				// }
				if(data.num){
					return dispatch({
				    	type: 'SET_LIST',
				    	data
				  	});
				}
				
			}else{
				console.log(json.message);
			}
			
		}).catch(err => {
			console.log(err);
		});
	}
}
export const setLoading = (data) => {
	return (dispatch) => {
		return dispatch({
	    	type: 'SET_LOADING',
	    	data: data
	  	});
	}
}
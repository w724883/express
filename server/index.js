import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router';
import Routes from '../src/routes';
import App from '../src/components/app';
import store from '../src/store';
import * as actions from '../src/actions';

export default (req,res) => {
	let tasks = [];
	switch (req.params[0]){
		case '/': tasks.push(store.dispatch(actions.fetchList("page=1")));break;
	}
	
	store.dispatch(actions.setSession(req.session));
	Promise.all(tasks).then(() => {
	  	const context = {};
	  	const markup = ReactDOMServer.renderToString(
	  		<App>
	  	  		<StaticRouter
	  	    		location={req.url}
	  	    		context={context}
	  	  		>
	  	    		<Routes />
	  	  		</StaticRouter>
	  	  	</App>
	  	);
	  	if (context.url) {
		    res.writeHead(301, {
		      Location: context.url
		    })
		    res.end();
	  	} else {
		    res.render('index', { data: markup, store:JSON.stringify(store.getState())});
		    // res.end();
	  	}
	});
}
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router';
import url from 'url';
import Routes from '../src/routes';
import App from '../src/components/app';
import store from '../src/store';
import * as actions from '../src/actions';

export default (req,res) => {
	let tasks = [];
	let params = url.parse(req.url,true);
	switch (params.pathname){
		case '/':
		case '/list':
		tasks.push(store.dispatch(actions.fetchList(params.search.replace(/\?/g,''))));break;
	}

	store.dispatch(actions.setSession(req.session.user || {}));
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
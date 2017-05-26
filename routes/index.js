import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router';
import {logger} from '../src/log4js';
import App from '../src/components/app';
import Routes from '../src/routes';
import store from '../src/store';
import * as actions from '../src/actions';
var express = require('express');
var router = express.Router();
var List = require('../models/list');
var User = require('../models/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  	// List.find(req,function(err, obj){
  	// 	if(err){
			// logger('index').error(err);
  	// 	}
  	// 	res.render('index', { data: obj});
  	// });
  	store.dispatch(actions.setSession(req.session));
	Promise.all([
	  store.dispatch(actions.fetchList("page=1"))
	]).then(() => {
	  	const context = {}
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
		    res.end();
	  	}
	});

  	
  	// res.render('index', { data: markup, store:'1'});
});




// login
router.get('/login', function(req, res, next) {
	if(req.session.user){
		return res.redirect('/');
	}
	req.session.message = '';
  	res.render('login');
});
router.post('/login', function(req, res, next) {
	var username = req.body.username;
	var password = req.body.password;
	if(username.trim() && password.trim()){
		User.find(username,function(err, result){
			if(result){
				if(password === result.password){
					req.session.user = {
						username,
					};
					return res.redirect('/');
				}else{
					req.session.message = '用户名或密码错误';
					return res.redirect('/login');
				}
			}else{
				req.session.message = '您未注册';
				return res.redirect('/register');
			}
	  		if(err){
				logger('login').error(err);
	  		}
		});
	}else{
		req.session.message = '请输入用户名或密码';
		return res.redirect('/login');
	}
	
});
// register
router.get('/register', function(req, res, next) {
	if(req.session.user){
		return res.redirect('/');
	}
	req.session.message = '';
  	res.render('register');
});
router.post('/register', function(req, res, next) {
	var username = req.body.username;
	var password = req.body.password;
	if(username.trim() && password.trim()){
		User.save(req.body, function(err){
			if(err) {
				res.send({'success':false,'err':err});
		  		if(err){
					logger('register').error(err);
		  		}
			} else {
				req.session.user = {
					username,
				};
				res.redirect('/');
			}
		});
	}else{
		req.session.message = '用户名或密码不能为空';
		return res.redirect('/register');
	}
	
});
router.get('/logout', function(req, res, next) {
	req.session.user = null;
  	return res.redirect('/');
});
// list
router.get('/list', function(req, res, next) {
	
	List.find(req, function(err, obj){
		// console.log(obj);
		// res.render('list', { data: obj, title: 'Express' });
		res.send({'error':0,'data':obj,'message':'success'});
  		if(err){
			logger('list').error(err);
  		}
  		res.end();
	});
});

// add
router.get('/list/add', function(req, res, next) {
	if(req.session.user){
		res.render('add');
	}else{
		res.redirect('/');

	}	
});
router.post('/list/add', function(req, res, next) {
	var json = req.body;
	List.save(json, function(err){
		if(err) {
			res.send({'success':false,'err':err});
	  		if(err){
				logger('list/add').error(err);
	  		}
		} else {
			res.redirect('/list');
		}
	});
	// res.redirect('/list');
});
export default router;

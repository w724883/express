import {logger} from '../src/log4js';
import renderIndex from '../server/index';

var express = require('express');
var router = express.Router();
var List = require('../models/list');
var User = require('../models/user');

// router.get('/', index);

router.get('*', function(req,res,next){
	var path = req.params[0];
	switch (path){
		case '/':
		case '/login':
		case '/register':renderIndex(req,res);break;
		default:next();
	}
});

// login
// router.get('/login', function(req, res, next) {
// 	if(req.session.user){
// 		return res.redirect('/');
// 	}
// 	req.session.message = '';
//   	res.render('login');
// });

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
					res.send({'error':0,'message':'success'});
					// return res.redirect('/');
				}else{
					res.send({'error':1001,'message':'用户名或密码错误'});
				}
			}else{
				res.send({'error':1002,'message':'您未注册'});
			}
	  		if(err){
				logger('login').error(err);
	  		}
		});
	}else{
		res.send({'error':1003,'message':'请输入用户名或密码'});
	}
	
});
// register
// router.get('/register', function(req, res, next) {
// 	if(req.session.user){
// 		return res.redirect('/');
// 	}
// 	req.session.message = '';
//   	res.render('register');
// });
router.post('/register', function(req, res, next) {
	var username = req.body.username;
	var password = req.body.password;
	if(username.trim() && password.trim()){
		User.save(req.body, function(err){
			if(err) {
				res.send({'error':1004,'message':'注册失败'});
		  		if(err){
					logger('register').error(err);
		  		}
			} else {
				req.session.user = {
					username,
				};
				res.send({'error':0,'message':'success'});
			}
		});
	}else{
		res.send({'error':1005,'message':'用户名或密码不能为空'});
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
  		// res.end();
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

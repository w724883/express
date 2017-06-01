import {logger} from '../src/log4js';
import renderIndex from '../server/index';

var express = require('express');
var router = express.Router();
var List = require('../models/list');
var User = require('../models/user');

// router.get('/', index);

router.get('/', function(req,res,next){
	renderIndex(req,res);
});
router.get('/login', function(req,res,next){
	renderIndex(req,res);
});
router.get('/register', function(req,res,next){
	renderIndex(req,res);
});
router.get('/list', function(req,res,next){
	renderIndex(req,res);
});
router.get('/add', function(req,res,next){
	if(req.session.user){
		renderIndex(req,res);
	}else{
		res.redirect('/login?from=/add');
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
	  		if(err){
				logger('login').error(err);
				res.send({'error':1004,'message':'登录失败'});
	  		}else{
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
		User.save(req.body, function(err, result){
			if(err) {
				res.send({'error':1004,'message':'注册失败'});
				logger('register').error(err);
			} else {
				if(result){
					res.send({'error':1006,'message':'用户名已存在'});
				}else{
					req.session.user = {
						username,
					};
					res.send({'error':0,'message':'success'});
				}
				
			}
		});
	}else{
		res.send({'error':1005,'message':'用户名或密码不能为空'});
	}
	
});
router.post('/add', function(req, res, next) {
	var body = req.body;
	var title = body.title;
	var descriptions = body.descriptions;
	if(title.trim() && descriptions.trim()){
		body.author = req.session.user.username;
		List.save(body, function(err){
			if(err) {
				res.send({'error':1007,'message':'提交失败'});
				logger('add').error(err);
			} else {
				res.redirect('/list');
			}
		});
	}else{
		res.send({'error':1008,'message':'标题和描述不为空'});
	}
	
	// res.redirect('/list');
});
router.get('/logout', function(req, res, next) {
	req.session.destroy(function(err) {
		res.redirect('/');
	});
});
// list
router.get('/getlist', function(req, res, next) {
	
	List.find(req, function(err, obj){
		// console.log(obj);
		// res.render('list', { data: obj, title: 'Express' });
		
  		if(err){
  			res.send({'error':1009,'message':'列表获取失败'});
			logger('list').error(err);
  		}else{
  			res.send({'error':0,'data':obj,'message':'success'});
  		}
  		// res.end();
	});
});

// add
// router.get('/list/add', function(req, res, next) {
// 	if(req.session.user){
// 		res.render('add');
// 	}else{
// 		res.redirect('/');

// 	}	
// });

export default router;

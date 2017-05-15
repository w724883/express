var express = require('express');
var router = express.Router();
var List = require('../models/list');
var User = require('../models/user');
var logger = require('../log4js/index').logger;
/* GET home page. */
router.get('/', function(req, res, next) {
  	List.find(req,function(err, obj){
  		if(err){
			logger('index').error(err);
  		}
  		res.render('index', { data: obj, title: 'Express' });
  	});
});
// login
router.get('/login', function(req, res, next) {
	if(req.session.user){
		return res.redirect('/');
	}
	req.session.message = '';
  	res.render('login', { title: 'Express' });
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
						password:result.password
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
  	res.render('register', { title: 'Express' });
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
					password
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
		res.render('list', { data: obj, title: 'Express' });
  		if(err){
			logger('list').error(err);
  		}
	});
});

// add
router.get('/list/add', function(req, res, next) {
	if(req.session.user){
		res.render('add', { title: 'Express' });
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
module.exports = router;

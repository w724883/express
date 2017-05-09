var express = require('express');
var router = express.Router();
var List = require('../models/list');
/* GET home page. */
router.get('/', function(req, res, next) {
  	
  	List.find(function(err, obj){
  		res.render('index', { list: obj, title: 'Express' });
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

  	var user = {
  		username:'admin',
  		password:'admin'
  	};
  	if(req.body.username === user.username && req.body.password === user.password){
  		req.session.user = user;
  		return res.redirect('/');
  	}else{
  		req.session.message = '用户名或密码错误';
  		return res.redirect('/login');
  	}
});
router.get('/logout', function(req, res, next) {
	req.session.user = null;
  	return res.redirect('/');
});
// list
router.get('/list', function(req, res, next) {
	var key = req.query.key;
	key = key ? {$or:[{title:new RegExp(key)},{descriptions:new RegExp(key)}]} : null;
	List.find(key, function(err, obj){
		// console.log(obj);
		res.render('list', { list: obj, title: 'Express' });
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
		} else {
			res.redirect('/list');
		}
	});
	// res.redirect('/list');
});
module.exports = router;

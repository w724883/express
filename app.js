import routes from './routes';
import {logger} from './src/log4js';
var http = require('http');
var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require('express-session');
// var Store = require('connect-mongo')(session);
// var log4js = require('log4js');

// console.log(logger)
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// session中间件配置
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

// session赋值
app.use(function(req, res, next) {
  res.locals.user = req.session.user;
  res.locals.message = req.session.message;
  // console.log(res.locals);
  next();
});

// 路由
app.use('/', routes);

// 加载日志
// app.use(log.log4js.connectLogger(log.logger(), {level:'auto', format:':method :url'}));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;

  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  logger('app').error(err);
  res.render('error');
});

export default app;

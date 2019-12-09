var createError = require('http-errors');
var express = require('express');
var history = require('connect-history-api-fallback');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var homeRouter = require('./routes/home');
var buildingRouter = require('./routes/building');
var unitRouter = require('./routes/unit');
var companyRouter = require('./routes/company');
var enterpriseRouter = require('./routes/enterprise');
var authorizedRouter = require('./routes/authorized');

//add logger
var fs = require('fs');
var accessLog = fs.createWriteStream('access.log', {flags: 'a'});
var errorLog = fs.createWriteStream('error.log', {flags: 'a'});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(history());
app.use(logger('dev'));
app.use(logger({stream: accessLog}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./dist'));
app.use(function (err, req, res, next) {
  var meta = '[' + new Date() + '] ' + req.url + '\n';
  errorLog.write(meta + err.stack + '\n');
  next();
});


//设置跨域访问
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Cache-Control","no-cache");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


app.use('/guixi_app/server/home', homeRouter);
app.use('/guixi_app/server/building', buildingRouter);
app.use('/guixi_app/server/unit', unitRouter);
app.use('/guixi_app/server/company', companyRouter);
app.use('/guixi_app/server/enterprise', enterpriseRouter);
app.use('/guixi_app/server/authorized', authorizedRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

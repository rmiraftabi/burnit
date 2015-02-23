'use strict';

var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var controller = require('./lib/controller');
var routes = require('./routes/index');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var sess = {
  secret: 'K4NVWC4+ufnb',
  resave: false,
  saveUninitialized: true,
  rolling: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 90 }
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  // TODO https for site - sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess));

var loc = require('loc')({
  getLocaleFrom: ['path', 'query', 'cookie'],
  storeLocaleTo: ['cookie'],
  storage: 'file',
  locales: ['en', 'fi'],
  directory: './locales',
  extension: '.json',
  excludeList: ['.css', '.js', '.png', '.jpg', '.gif', '/javascripts/', '/stylesheets', '/images/']
});

app.use(loc.loc());

app.use(loc.pathRewrite());

//loc.writeLocaleCache();

app.use('/', routes);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error(req.i18n.__('Not Found'));
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      title: req.i18n.__("BurnIt - Something went wrong"),
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    title: req.i18n.__("BurnIt - Something went wrong"),
    message: err.message,
    error: {}
  });
});

module.exports = app;

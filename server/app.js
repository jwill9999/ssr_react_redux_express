require('ignore-styles')
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const fs = require('fs');

require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app']
})

// routes
const index = require('./routes/index')
const api = require('./routes/api')
const universalLoader = require('./universal')

//express app
const app = express();


//middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));


app.use('/', index);

//static path for build files
app.use(express.static(path.resolve(__dirname, '..', 'build')))


app.use('/api', api);
app.use('/', universalLoader)

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
  res.render('error');
});

module.exports = app;



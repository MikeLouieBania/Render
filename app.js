var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var loginRouter = require('./routes/index');
var registerRouter = require('./routes/register'); 
var adminRouter = require('./routes/adminhome'); 
var managerRouter = require('./routes/managerhome'); 
var userRouter = require('./routes/userhome'); 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginRouter); 
app.use('/', registerRouter);  
app.use('/', adminRouter);  
app.use('/', managerRouter);  
app.use('/', userRouter);  

module.exports = app;

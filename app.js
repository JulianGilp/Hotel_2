var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Ejemplo de Middleware de aplicación!!!
app.use('/api/habitaciones',function (req, res, next) {
    let Nombre= 'Julian !';
    console.log('Acceso a habitacione:', Nombre);
    next();
  });

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

// require different packages
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');

// connect to mongoose
mongoose.connect('mongodb://localhost/loginapp');
var db = mongoose.connection;

// making the routes for the web page
var routes = require('./routes/index');
var users = require('./routes/users');

// initialize app
var app = express();

// view engine
// set folder to handle the views
// tell express which engine to use
app.set('views', path.join(__dirname, 'views'));
// Tell Express that for files with extension html you would like to call the exphbs function to render them 
app.engine('handlebars', exphbs({defaultLayout : 'layout'}));
app.set('view engine', 'handlebars');

//Body pareser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

// set static folder to hold style sheets, images, jquery
// stuff that is public to the browser
app.use()
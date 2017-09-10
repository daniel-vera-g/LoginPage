var mongoose = require('mongoose');
// require bcrypt to encrypt the password with hashes
var bcrypt = require('bcrypt');

//connect mongoose with the mongo db database
mongoose.connect('mongodb://localhost/loginapp');

// variable for the mongoose connection
var db = mongoose.connection;

// create a shema for the sample user
var UserSchema = mongoose.Schema({
  username:{
    type: String,
    index: true
  },
  password:{
    type: String
  },
  email:{
    type: String
  },
  Name:{
    type: String
  }
});

//create a variable that can be accessible outside of the file
var User = module.exports = mongoose.model('User', UserSchema);

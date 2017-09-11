var mongoose = require('mongoose');
// require bcrypt to encrypt the password with hashes
var bcrypt = require('bcryptjs');

//connect mongoose with the mongo db database
mongoose.connect('mongodb://localhost/loginapp');

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

//create user
module.exports.createUser  = function(newUser, callback){
  //user bcrypt to hash Passwords
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
        // Store hash in your password DB.
        newUser.password = hash;
        newUser.save(callback);
    });
  });
}

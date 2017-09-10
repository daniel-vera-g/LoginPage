var express = require('express');
var router = express.Router();

// add register route
router.get('/register', function(req, res){
  res.render('register');
});

// add login route
router.get('/login', function(req, res){
  res.render('login');
});

// add register route
router.post('/register', function(req, res){
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;

  //get some vlaidation
  req.checkBody("name", "Name is required").notEmpty();
  req.checkBody("email", "Email is required").notEmpty();
  req.checkBody("email", "Email is valid").isEmail();
  req.checkBody("username", "Username is required").notEmpty();
  req.checkBody("password", "password is required").notEmpty();
  req.checkBody("password2", "Passwords does not match").equals(req.body.password);


  //check for some error
  var errors = req.validationErrors();
  //check if there are any errors
  if (errors) {
    //if there are errors re-render the form
    res.render('register', {errors:errors});
  } else {
    console.log('PASSED');
  }
});

module.exports = router;

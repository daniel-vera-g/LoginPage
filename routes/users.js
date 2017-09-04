var express = require('express');
var router = require(router);

// add register route
router.get('/register', function(req, res){
  res.render('register');
});

// add login route
router.get('/login', function(req, res){
  res.render('login');
});

module.exports = router;

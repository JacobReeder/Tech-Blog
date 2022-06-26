const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
  res.render('homepage', {
  loggedIn: req.session.loggedIn,
});
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) { // if already logged in. Add logout first before uncommenting
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

module.exports = router;
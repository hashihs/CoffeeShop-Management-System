const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
//const Message = require('../models/message');

// signup
router.post('/signup', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});

// Authenticate
router.post('/login', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // 1 week
        });
 
        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

//get data
router.route('/').get(function(req, res){
  User.find(function(err, users){
    if(err){
        console.log(err);
    }
    else {
        
        res.json(users);
    }      
  });
});

//message
/*
router.post('/message', (req, res, next) => {
  let newMess = new Message({
    name: req.body.name,
    email: req.body.email,
    messages: req.body.message
  });

  Message.addMess(newMess, (err, message) => {
    if(err){
      res.json({success: false, msg:'Failed to send message'});
    } else {
      res.json({success: true, msg:'Message Sent'});
    }
  });
});*/

module.exports = router;

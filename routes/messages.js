const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
const config = require('../config/database');
const Message = require('../models/message');


//message

 /* router.post('/message', (req, res) => {
    var newMsg = new Message(req.body);
    newMsg.save()
    .then(item =>{
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });*/
  
  //save data
  router.post('/message', (req, res) => {
    var newMsg = Message(req.body).save(function(err,data){
      if(err) throw err;
      res.json(data);
    });
  });

  //get data
  router.route('/').get(function(req, res){
    Message.find(function(err, messages){
      if(err){
          console.log(err);
      }
      else {
          res.json(messages);
      }      
    });
  });

  //delete
  router.delete('/:id', function(req, res, next){
    Message.findByIdAndRemove(req.params.id, req.body, function (err, post){
      if (err) return next(err);
      res.json(post);
    });
  });

  module.exports = router;
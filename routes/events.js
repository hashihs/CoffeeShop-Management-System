const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Events = require('../models/event');

//add event
router.post('/event', (req, res) => {
    var newevent = Events(req.body).save(function(err,data){
      if(err) throw err;
      res.json(data);
    });
});

//get data
router.route('/').get(function(req, res){
    Events.find(function(err, events){
      if(err){
          console.log(err);
      }
      else {
          res.json(events);
      }      
    });
});

//delete
router.delete('/:id', function(req, res, next){
    Events.findByIdAndRemove(req.params.id, req.body, function (err, post){
      if (err) return next(err);
      res.json(post);
    });
});
  
module.exports = router;

const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Concession = require('../models/concession');

//request
router.post('/concession', (req, res) => {
    var newcon = Concession(req.body).save(function(err,data){
      if(err) throw err;
      res.json(data);
    });
});

//get data
router.route('/').get(function(req, res){
    Concession.find(function(err, concessions){
      if(err){
          console.log(err);
      }
      else {
          res.json(concessions);
      }      
    });
});

//delete
router.delete('/:id', function(req, res, next){
    Concession.findByIdAndRemove(req.params.id, req.body, function (err, post){
      if (err) return next(err);
      res.json(post);
    });
});
  
module.exports = router;
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Table = require('../models/table');

//reserve
router.post('/table', (req, res) => {
  var newTbl = Table(req.body).save(function(err,data){
    if(err) throw err;
    res.json(data);
  });
});

//get data
router.route('/').get(function(req, res){
  Table.find(function(err, tables){
    if(err){
        console.log(err);
    }
    else {
        res.json(tables);
    }      
  });
});

//delete
router.delete('/:id', function(req, res, next){
  Table.findByIdAndRemove(req.params.id, req.body, function (err, post){
    if (err) return next(err);
    res.json(post);
  });
});

  module.exports = router;
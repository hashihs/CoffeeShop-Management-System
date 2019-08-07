const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Snacks = require('../models/snack');

//add snack
router.post('/snack', (req, res) => {
    var newsnack = Snacks(req.body).save(function(err,data){
      if(err) throw err;
      res.json(data);
    });
});

//get data
router.route('/').get(function(req, res){
    Snacks.find(function(err, snacks){
      if(err){
          console.log(err);
      }
      else {
          res.json(snacks);
      }      
    });
});

//delete
router.delete('/:id', function(req, res, next){
    Snacks.findByIdAndRemove(req.params.id, req.body, function (err, post){
      if (err) return next(err);
      res.json(post);
    });
});
  
router.route('/sname').get(function(req, res){
    var snack = []

    //Drinks.find({},{dname:true, _id:false});
    Snacks.find(function(err, snacks){
      if(err){
          console.log(err);
      }
      else {
          
          for(i=0;i<snacks.length;i++){
              console.log('ds',snacks[i].sname);
              snack[i]= snacks[i].sname; 
          }
          res.json(snack);
          console.log('tgghd',snack);

      }      
    });
   
});
module.exports = router;

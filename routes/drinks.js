const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Drinks = require('../models/drink');

//add drink
router.post('/drink', (req, res) => {
    var newdrink = Drinks(req.body).save(function(err,data){
      if(err) throw err;
      res.json(data);
    });
});

//get data
router.route('/').get(function(req, res){
    Drinks.find(function(err, drinks){
      if(err){
          console.log(err);
      }
      else {
          
          res.json(drinks);
      }      
    });
});

//delete
router.delete('/:id', function(req, res, next){
    Drinks.findByIdAndRemove(req.params.id, req.body, function (err, post){
      if (err) return next(err);
      res.json(post);
    });
});

router.route('/name').get(function(req, res){
    var drink = []

    //Drinks.find({},{dname:true, _id:false});
    Drinks.find(function(err, drinks){
      if(err){
          console.log(err);
      }
      else {
          
          for(i=0;i<drinks.length;i++){
              console.log('ds',drinks[i].dname);
              drink[i]= drinks[i].dname; 
          }
          res.json(drink);
          console.log('tgd',drink);

          //res.json(drinks);
          //console.log('tgd',drinks);
      }      
    });
   
});
  
module.exports = router;

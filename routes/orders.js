const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
const config = require('../config/database');
const Order = require('../models/order');


//save data
router.post('/order', (req, res) => {
    console.log("fdfgh",req.body);
    var newOrder = Order(req.body).save(function(err,data){
      if(err) throw err;
      res.json(data);
    });
  });

//get data
router.route('/').get(function(req, res){
    Order.find(function(err, orders){
        if(err){
            console.log(err);
        }
        else {
            res.json(orders);
        }      
    });
});


//edit
router.route('/edit/:id').get(function(req, res){
    let id = req.params.id;
    Order.findById(id, function (err, order){
      res.json(order);
    });
});

//update
router.route('/update/:id').post(function(req, res){
    Order.findById(req.params.id, function(err, order) {
        if (!order)
          return next(new Error('Could not load Document'));
        else {
            order.cofItem = req.body.cofItem;
            adUnit.cQuantity = req.body.cQuantity;
    
            order.save().then(order => {
              res.json('Update complete');
          })
          .catch(err => {
                res.status(400).send("unable to update the database");
          });
        }
      });  
});

//delete
router.delete('/:id', function(req, res, next){
    Order.findByIdAndRemove(req.params.id, req.body, function (err, post){
        if (err) return next(err);
        res.json(post);
    });
});


module.exports = router;
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
const config = require('../config/database');
const Product = require('../models/product');


//save data
router.post('/product', (req, res) => {
    //console.log("fdfgh",req.body);
    var newProduct = Product(req.body).save(function(err,data){
      if(err) throw err;
      res.json(data);
    });
  });

//get data
router.route('/').get(function(req, res){
    Product.find(function(err, products){
        if(err){
            console.log(err);
        }
        else {
            res.json(products);
        }      
    });
});


//edit
router.route('/edit/:id').get(function(req, res){
    let id = req.params.id;
    Product.findById(id, function (err, product){
      res.json(product);
    });
});

//update
router.route('/update/:id').post(function(req, res){
    Product.findById(req.params.id, function(err, order) {
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
    Product.findByIdAndRemove(req.params.id, req.body, function (err, post){
        if (err) return next(err);
        res.json(post);
    });
});


module.exports = router;
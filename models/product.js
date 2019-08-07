const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//order schema
const ProductSchema = mongoose.Schema({
  
    coffeeProducts:[{
        cof: {
            type: String
        },
        pquantity: {
            type: Number
        }

    }],
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

const Product = module.exports = mongoose.model('Product', ProductSchema);
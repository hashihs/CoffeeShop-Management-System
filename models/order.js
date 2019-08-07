const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//order schema
const OrderSchema = mongoose.Schema({
   
    coffeeDrinks:[{
        coffee: {
            type: String
        },
        cquantity: {
            type: Number
        }

    }],
   /* foodsnacks:[{
        food: {
            type: String
        },
        fquantity: {
            type: Number
        }
    }],*/
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

const Order = module.exports = mongoose.model('Order', OrderSchema);
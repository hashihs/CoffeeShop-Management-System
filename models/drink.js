const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const DrinkSchema = mongoose.Schema({
    dname: {
        type: String,
        required: true
    },
    dprice: {
        type: Number,
        required: true
    },
    ddescript: {
        type: String,
        required: true
    },
    image:String
});

const Drink = module.exports = mongoose.model('Drink', DrinkSchema);
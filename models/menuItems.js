const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//menu Items schema
const menuItemsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    item_typeID: {
        type: Number,
        required: true
    }
});
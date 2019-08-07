const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const SnackSchema = mongoose.Schema({
    sname: {
        type: String,
        required: true
    },
    sprice: {
        type: Number,
        required: true
    },
    sdescript: {
        type: String,
        required: true
    },
    image:String
});

const Snack = module.exports = mongoose.model('Snack', SnackSchema);
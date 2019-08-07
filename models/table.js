const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//table schema
const TableSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    hour: {
        type: String,
        required: true
    },
    tableNo: {
        type: Number,
        required: true
    },
    persons: {
        type: String,
        required: true
    },
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
    }

});

const Table = module.exports = mongoose.model('Table', TableSchema);

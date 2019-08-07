const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const ConcessionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    institute: {
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
    event: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    }
});

const Concession = module.exports = mongoose.model('Concession', ConcessionSchema);
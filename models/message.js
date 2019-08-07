const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//message schema
const messageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    messages: {
        type: String,
        required: true
    }
});

const Message = module.exports = mongoose.model('Message', messageSchema);

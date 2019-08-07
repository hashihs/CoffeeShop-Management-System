const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const EventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    descript: {
        type: String,
        required: true
    }
});

const Event = module.exports = mongoose.model('Event', EventSchema);
//pastEventsSchema2024.js


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pastEventsSchema = new Schema({
    PastTitle: {
        type: String,
        required: true
    },
    PastDate: {
        type: String,
        required: true
    },
    PastLocation: {
        type: String,
        required: true
    },
    PastUrl: {
        type: String,
        required: true
    },
    PastImg: {
        type: String,
        required: true
    },
    Past1: {
        type: String,
        required: true
    },
    Past2: {
        type: String,
        required: true
    },
    Past3: {
        type: String,
        required: true
    },
    PmRankDisplay: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

const pastSchema = mongoose.model('PastEvents2024', pastEventsSchema)

module.exports = pastEventsSchema;
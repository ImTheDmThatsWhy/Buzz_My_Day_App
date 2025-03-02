const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
    displayname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: true
    },
    coffee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coffee', // Reference to the Coffee model
        required: true
    },
    account_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account', // Reference to the Account model
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Reviews', reviewsSchema);
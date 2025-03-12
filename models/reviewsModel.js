// model for coffee shop reviews
// contains review data and user references
const mongoose = require('mongoose');

// schema definition for reviews
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

// export the model
module.exports = mongoose.model('Reviews', reviewsSchema);
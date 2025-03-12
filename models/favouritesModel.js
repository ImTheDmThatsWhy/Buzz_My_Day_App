// model for user favorites
// contains user's saved items and preferences
const mongoose = require('mongoose');

// schema definition for favorites
const favouritesSchema = new mongoose.Schema({
    coffee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coffee',
        required: true
    },
    account_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    }
}, { timestamps: true });

// export the model
module.exports = mongoose.model('Favourites', favouritesSchema);
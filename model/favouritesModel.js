const mongoose = require('mongoose');

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

module.exports = mongoose.model('Favourites', favouritesSchema);
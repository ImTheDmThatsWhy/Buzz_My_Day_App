const mongoose = require('mongoose');

const forumSchema = new mongoose.Schema({
    displayname: {
        type: String,
        required: true
    },
    post_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    account_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Forum', forumSchema);
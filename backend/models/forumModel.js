// model for forum discussions
// contains forum posts and user interactions
const mongoose = require('mongoose');

// schema definition for forum
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

// export the model
module.exports = mongoose.model('Forum', forumSchema);
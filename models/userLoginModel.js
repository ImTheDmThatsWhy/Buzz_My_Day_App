// models/UserLogin.js
const mongoose = require('mongoose');

const userLoginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    account_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('UserLogin', userLoginSchema);
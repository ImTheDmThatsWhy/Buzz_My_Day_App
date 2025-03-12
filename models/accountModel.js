// model for user accounts
// contains user profile information
const mongoose = require("mongoose");

// schema definition for accounts
const accountSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        displayname: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: false,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

// export the model
module.exports = mongoose.model("Account", accountSchema);

const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        displayname: {
            type: [String],
            required: true,
            validate: [
                displaynameValidation(),
                "displayname must be between 2-12 characters",
            ],
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
function displaynameValidation() {
    return function (value) {
        if (value.length != 1) return false;
        username = value[0];
        if (username.length < 2) {
            return false;
        }
        if (username.length > 12) {
            return false;
        }
    };
}
module.exports = mongoose.model("Account", accountSchema);

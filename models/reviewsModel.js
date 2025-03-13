const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema(
    {
        displayname: {
            type: [String],
            required: true,
            validate: [
                displaynameValidation(),
                "displayname must be between 2-12 characters",
            ],
        },
        description: {
            type: String,
            required: false,
        },
        rating: {
            type: Number,
            required: true,
        },
        coffee_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Coffee", // Reference to the Coffee model
            required: true,
        },
        account_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Account", // Reference to the Account model
            required: true,
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

module.exports = mongoose.model("Reviews", reviewsSchema);

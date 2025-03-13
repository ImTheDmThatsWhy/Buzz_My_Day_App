const mongoose = require("mongoose");
const validator = require("../function/validator");

const reviewsSchema = new mongoose.Schema(
    {
        displayname: {
            type: String,
            required: true,
            validate: {
                validator: validator.displaynameValidation(),
                message: "displayname must be between 2-12 characters",
            },
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

module.exports = mongoose.model("Reviews", reviewsSchema);

const mongoose = require("mongoose");
const validator = require("../function/validator");
const coffeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        cost: {
            type: Number,
            required: true,
            validate: {
                validator: validator.costValidation(),
                message: "cost must be numerical only",
            },
        },
        rating: {
            type: Number,
            required: false,
            min: 0,
            max: 5,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Coffee", coffeeSchema);

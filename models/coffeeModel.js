// model for coffee shop information
// contains coffee shop details and metadata
const mongoose = require("mongoose");

// schema definition for coffee shops
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

// export the model
module.exports = mongoose.model("Coffee", coffeeSchema);

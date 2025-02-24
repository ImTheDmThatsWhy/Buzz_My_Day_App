const mongoose = require("mongoose");

// Make a schema with data properties
const CoffeeSchema = new mongoose.Schema({
    _coffeeId: { type: String, index: true },
    name: { type: String, required: true },
    brand: String,
    type: String,
    description: String,
    cost: Number,
    rating: { type: Number, required: true },
});

// Make a model that uses the schema
const CoffeeModel = mongoose.model("Coffee", CoffeeSchema);

// Export the model
module.exports = {};

const mongoose = require("mongoose");

// Make a schema with data properties
const User_Login_Schema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    account_id: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
});

// Make a model that uses the schema
const User_Login_Model = mongoose.model("User", User_Login_Schema);

// Export the model
module.exports = {};

const mongoose = require("mongoose");

// Make a schema with data properties
const AccountSchema = new mongoose.Schema({
    _AccountId: { type: String, index: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    displayname: { type: String, required: true, unique: true },
    photo: String,
    decription: String,
});

// Make a model that uses the schema
const AccountModel = mongoose.model("Account", AccountSchemaSchema);

// Export the model
module.exports = {};

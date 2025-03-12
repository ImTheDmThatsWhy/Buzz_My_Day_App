// model for user login and authentication
// contains user credentials and account reference
const mongoose = require("mongoose");

// schema definition for user login
const userLoginSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: false,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        account_id: {
             type: mongoose.Schema.Types.ObjectId,
             ref: "Account",
             required: false,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

// export the model
module.exports = mongoose.model("UserLogin", userLoginSchema);
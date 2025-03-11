// models/UserLogin.js
const mongoose = require("mongoose");

const userLoginSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            // validate: [usernameValidation],
            required: true,
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
// function usernameValidation(username) {
//     if (username.length < 2) {
//         return "username must be longer";
//     }
//     if (username.length > 12) {
//         return "Username needs to be shorter";
//     }
//     const pattern = /^[A-Za-z][A-Za-z ]+$/;
//     if (!pattern.test(username)) {
//         return "Username invalid only spaces and lower and upper case letters allowed";
//     } else return "Username valid";
// }
module.exports = mongoose.model("UserLogin", userLoginSchema);

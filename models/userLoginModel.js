// models/UserLogin.js
const mongoose = require("mongoose");

const userLoginSchema = new mongoose.Schema(
    {
        username: {
            type: [String],
            validate: [
                usernameValidation(),
                "username must be between 2-12 characters and can only contain letters underscores, and spaces",
            ],
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
            type: [String],
            validate: [
                passwordValidation(),
                "password must be between 2-12 characters and can only contain letters, underscores, spaces, and the following special characters !#$%&?",
            ],
            required: true,
        },
    },
    { timestamps: true }
);
function passwordValidation() {
    return function (value) {
        if (value.length != 1) return false;
        username = value[0];
        if (username.length < 2) {
            return false;
        }
        if (username.length > 12) {
            return false;
        }
        const pattern = /^[A-Za-z0-9!#$%&?][A-Za-z_0-9!#$%&?]+$/;
        if (!pattern.test(username)) {
            return false;
        } else return true;
    };
}
function usernameValidation() {
    return function (value) {
        if (value.length != 1) return false;
        username = value[0];
        if (username.length < 2) {
            return false;
        }
        if (username.length > 12) {
            return false;
        }
        const pattern = /^[A-Za-z0-9][A-Za-z_0-9 ]+$/;
        if (!pattern.test(username)) {
            return false;
        } else return true;
    };
}
module.exports = mongoose.model("UserLogin", userLoginSchema);

// model for user login and authentication
// contains user credentials and account reference
const mongoose = require("mongoose");
const validator = require("../function/validator");

// schema definition for user login
const userLoginSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            validate: {
                validator: usernameValidation(),
                message:
                    "username must be between 2-12 characters and can only contain letters underscores, and spaces",
            },
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
        is_admin: {
            type: Boolean,
        },
    },
    { timestamps: true }
);
function usernameValidation() {
    return function (username) {
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

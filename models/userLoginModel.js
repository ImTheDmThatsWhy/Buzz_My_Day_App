// model for user login and authentication
// contains user credentials and account reference
const mongoose = require("mongoose");
const validator = require("../function/validator");

// schema definition for user login
const userLoginSchema = new mongoose.Schema(
    {
        displayname: {
            type: String,
            validate: {
                validator: displaynameValidation(),
                message:
                    "displayname must be between 2-12 characters and can only contain letters underscores, and spaces",
            },
            required: true,
            unique: true,
            ref: "Account",
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
function displaynameValidation() {
    return function (displayname) {
        if (displayname.length < 2) {
            return false;
        }
        if (displayname.length > 12) {
            return false;
        }
        const pattern = /^[A-Za-z0-9][A-Za-z_0-9 ]+$/;
        if (!pattern.test(displayname)) {
            return false;
        } else return true;
    };
}
module.exports = mongoose.model("UserLogin", userLoginSchema);

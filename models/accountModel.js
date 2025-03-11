const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            // validate: [
            //     minStringLength(5),
            //     "email must have at least five characters.",
            // ],
            required: true,
            unique: true,
        },
        displayname: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: false,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);
// function minStringLength(min) {
//     return function (value) {
//         return value.length >= min;
//     };
// }

module.exports = mongoose.model("Account", accountSchema);

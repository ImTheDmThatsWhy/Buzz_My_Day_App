const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userLoginModel");

async function registerUser(user) {
    try {
        const existingEmail = await User.findOne({
            email: user.email,
        });
        if (existingEmail) {
            return { error: "Email already in use" };
        }

        const existingUser = await User.findOne({
            username: user.username,
        });
        if (existingUser) {
            return { error: "Username already in use" };
        }

        const pattern = /^[A-Za-z0-9!#$%&?][A-Za-z_0-9!#$%&?]+$/;
        if (user.password.length < 2 || user.password.length > 12) {
            return { error: "password must be 2-12 characters in length" };
        } else if (!pattern.test(user.password)) {
            return {
                error: "password can only contain letters, underscores, spaces, and the following special characters !#$%&?",
            };
        }

        //create a hashed password 10 indicates 2^10 number of times password is hashed, the hashed password is stored in the database.
        const hashedPassword = await bcrypt.hash(user.password, 10);
        //user creation
        console.log(hashedPassword);
        console.log();
        const userCreated = await User.create({
            username: user.username,
            email: user.email,
            password: hashedPassword,
            is_admin: false,
        });
        //create jsonwebtoken
        const payload = {
            id: userCreated._id,
        };
        const token = jwt.sign(payload, "secret");
        return { token: token, user_id: userCreated._id };
    } catch (err) {
        if (err.errors) return { error: err.errors };
        else return { error: err };
    }
}
// }
async function loginUser(user) {
    // check existence of user
    const existingUser = await User.findOne({ email: user.email });
    if (!existingUser) {
        return { error: "Incorrect email or password" };
    }
    //password match check
    const isMatch = await bcrypt.compare(user.password, existingUser.password);
    if (!isMatch) {
        return { error: "Incorrect email or password" };
    }
    // jsw token creation
    const payload = {
        id: existingUser._id,
    };
    const token = jwt.sign(payload, "secret");
    return { token, user_id: existingUser._id };
}

module.exports = {
    registerUser,
    loginUser,
};

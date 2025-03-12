const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userLoginModel");

async function registerUser(user) {
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

    //create a hashed password 10 indicates 2^10 number of times password is hashed, the hashed password is stored in the database.
    const hashedPassword = await bcrypt.hash(user.password, 10);
    //user creation
    try {
        const userCreated = await User.create({
            username: user.username,
            email: user.email,
            password: hashedPassword,
        });
        //create jsonwebtoken
        const payload = {
            id: userCreated._id,
        };
        const token = jwt.sign(payload, "secret");
        return { token: token, user_id: userCreated._id };
    } catch (err) {
        return { error: err.errors };
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

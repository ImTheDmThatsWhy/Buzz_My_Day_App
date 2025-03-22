const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userLoginModel");

async function updateDisplayname(oldDisplayname, newDisplayname) {
    try {
        const user = await User.findOne({ displayname: oldDisplayname });
        user.displayname = newDisplayname;
        const updatedUser = await User.findOneAndUpdate(
            { displayname: oldDisplayname },
            user,
            {
                new: true,
            }
        );
        return updatedUser;
    } catch (err) {
        return { error: err.errors };
    }
}

async function getUsers() {
    const users = await User.find();
    return users;
}

async function getUser(userId) {
    if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
        // mongoose ids must match this regex
        return false;
    }
    const user = await User.findById(userId);
    return user;
}
async function registerUser(user) {
    try {
        const existingEmail = await User.findOne({
            email: user.email,
        });
        if (existingEmail) {
            return { error: "Email already in use" };
        }

        const existingUser = await User.findOne({
            displayname: user.displayname,
        });
        if (existingUser) {
            return { error: "displayname already in use" };
        }

        const pattern = /^[A-Za-z0-9!#$%&?][A-Za-z_0-9!#$%&?]+$/;
        if (!user.password) {
            return { error: "passsword missing" };
        } else if (user.password.length < 2 || user.password.length > 12) {
            return { error: "password must be 2-12 characters in length" };
        } else if (!pattern.test(user.password)) {
            return {
                error: "password can only contain letters, underscores, spaces, and the following special characters !#$%&?",
            };
        }

        //create a hashed password 10 indicates 2^10 number of times password is hashed, the hashed password is stored in the database.
        const hashedPassword = await bcrypt.hash(user.password, 10);
        //user creation
        const userCreated = await User.create({
            displayname: user.displayname,
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
    try {
        // check existence of user
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser || !user.password) {
            return { error: "Incorrect email or password" };
        }
        //password match check
        const isMatch = await bcrypt.compare(
            user.password,
            existingUser.password
        );
        if (!isMatch) {
            return { error: "Incorrect email or password" };
        }
        // jsw token creation
        const payload = {
            id: existingUser._id,
        };
        const token = jwt.sign(payload, "secret");
        return { token, user_id: existingUser._id };
    } catch (err) {
        console.log(err);
        return { error: err };
    }
}

module.exports = {
    getUser,
    getUsers,
    registerUser,
    loginUser,

    updateDisplayname,
};

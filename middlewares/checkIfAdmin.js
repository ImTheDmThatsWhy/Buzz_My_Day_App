const jwt = require("jsonwebtoken");

const User = require("../models/userLoginModel");

const checkIfAdmin = async (req, res, next) => {
    let token = req.get("authorization"); // Bearer the-actual-token
    token = token?.split(" ")?.[1]; // the-actual-token
    if (!token) {
        return res.status(401).json({ error: "Unauthenticated" });
    }
    try {
        const payload = jwt.verify(token, "secret");
        const user = await User.findById(payload.id);
        if (!user.is_admin) {
            throw new Error();
        }
        req.userId = payload.id;
        next();
    } catch (err) {
        console.log(err);
        return res
            .status(401)
            .json({ error: "Unauthenticated / not an admin" });
    }
};

module.exports = checkIfAdmin;

const jwt = require("jsonwebtoken");

function authorization(req, res, next) {
    // token structure is the Bearer at the front then actual token token will then be split to take the actual token
    let token = req.get("authorization");
    //split token on the space and take the second value which is the actual token
    token = token?.split(" ")[1];
    //error if there is no authenticated token
    if (!token) {
        return res.status(401).json({ error: "Unauthenticated Token" });
    }
    // Attempt to verify token using secret key, if verification successful, then payload received
    // To handle errors if token has been tampered with try block has been used
    try {
        const payload = jwt.verify(token, "secret");
        req.userID = payload.id;
        next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({ error: "Unauthenticated Token" });
    }
}
module.exports = authorization;

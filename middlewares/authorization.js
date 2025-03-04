const jwt = require("jsonwebtoken")

function auth(req, res, next) {
    let token = req.get("authorization") // Bearer the-actual-token
    token = token?.split(" ")?.[1] // the-actual-token
    if (!token) {
        return res.status(401).json({ error: "Unauthenticated" })
    }
    try {
        const payload = jwt.verify(token, "secret")
        req.userId = payload.id
        next()
    } catch(err) {
        console.log(err)
        return res.status(401).json({ error: "Unauthenticated" })
    }
}

module.exports = auth
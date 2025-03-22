const express = require("express");

const {
    getUsers,
    getUser,
    registerUser,
    loginUser,
} = require("../controllers/userController");
const authorization = require("../middleware/authorization");

const userRouter = express.Router();
userRouter.get("/", async (req, res) => {
    const users = await getUsers();
    res.json(users);
});

userRouter.get("/:userId", authorization, async (req, res) => {
    const user = await getUser(req.params.userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({
            error: `user with id ${req.params.userId} not found`,
        });
    }
});
userRouter.post("/register", async (req, res) => {
    const bodyData = {
        displayname: req.body.displayname,
        email: req.body.email,
        password: req.body.password,
    };
    const token = await registerUser(bodyData);
    if (token.error) {
        res.status(409).json(token);
    } else {
        res.json(token);
    }
});

userRouter.post("/login", async (req, res) => {
    const bodyData = {
        email: req.body.email,
        password: req.body.password,
    };
    const token = await loginUser(bodyData);
    if (token.error) {
        res.status(401).json(token);
    } else {
        res.json(token);
    }
});

module.exports = userRouter;

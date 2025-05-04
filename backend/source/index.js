const express = require("express");
const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");
const cors = require("cors");
require("dotenv").config({path: ".env.local"});

const accountRouter = require("../routes/accountRoute");
const coffeeRoutes = require("../routes/coffeeRoutes");
const favouriteRoutes = require("../routes/favouriteRoutes");
const postRoute = require("../routes/postRoute");
const reviewRoute = require("../routes/reviewRoute");
const userRoute = require("../routes/userRoute");
const commentRoute = require("../routes/commentRoute");

const app = express();

const whitelist = [
    "http://localhost:5137",
    "https://buzz-my-day-app-xaqh.onrender.com",
];
let corsOption = {
    // origin: function (origin, callback) {
    //     if (whitelist.indexOf(origin) !== -1) {
    //         callback(null, true);
    //     } else {
    //         callback(new Error("Not allowed by CORS"));
    //     }
    // },
    credentials: true,
    preflightContinue: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
};
app.use(express.json());
app.use(cors(corsOption));

app.post(
    "/user/register",
    body("email").isEmail().normalizeEmail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // Using return and response together stops the rest of the route
            // because responding twice would cause a server error.
            let allErrors = "";
            for (let error of errors.array()) {
                allErrors += error.path + ": " + error.msg + "\n";
            }
            allErrors = allErrors.slice(0, -1);
            return res.status(400).json({ error: allErrors });
        }

        next();
    }
);
app.post(
    "/account",
    body("email").isEmail().normalizeEmail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // Using return and response together stops the rest of the route
            // because responding twice would cause a server error.
            let allErrors = "";
            for (let error of errors.array()) {
                allErrors += error.path + ": " + error.msg + "\n";
            }
            allErrors = allErrors.slice(0, -1);
            return res.status(400).json({ error: allErrors });
        }

        next();
    }
);
app.patch(
    "/account/:accountId",
    body("email").isEmail().normalizeEmail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // Using return and response together stops the rest of the route
            // because responding twice would cause a server error.
            let allErrors = "";
            for (let error of errors.array()) {
                allErrors += error.path + ": " + error.msg + "\n";
            }
            allErrors = allErrors.slice(0, -1);
            return res.status(400).json({ error: allErrors });
        }

        next();
    }
);

app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(error.status || 500).json({ message: "internal server error" });
});

app.use("/account", accountRouter);
app.use("/coffee", coffeeRoutes);
app.use("/favourite", favouriteRoutes);
app.use("/post", postRoute);
app.use("/review", reviewRoute);
app.use("/user", userRoute);
app.use("/comment", commentRoute);

const server = app.listen(process.env.PORT, async () => {
    console.log("Server started");
    await mongoose.connect(
        process.env.DATABASE_URL
    );
    console.log("Database connected");
});
//The code below is to catch incorrect routes for example cofee instead of coffee
app.get("*", (request, response) => {
    console.log("User attempted to visit" + request.path);
    response.json({
        message: "page not found",
        attemptedPath: request.path,
    });
});

module.exports = server
const express = require("express");
const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");

const accountRouter = require("../routes/accountRoute");
const coffeeRoutes = require("../routes/coffeeRoutes");
const favouriteRoutes = require("../routes/favouriteRoutes");
const postRoute = require("../routes/postRoute");
const reviewRoute = require("../routes/reviewRoute");
const userRoute = require("../routes/userRoute");

const app = express();

app.use(express.json());

app.post(
    "/user/register",
    body("email").isEmail().normalizeEmail(),
    (request, response, next) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            // Using return and response together stops the rest of the route
            // because responding twice would cause a server error.
            return response.status(400).json({ errors: errors.array() });
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

app.listen(3000, async () => {
    console.log("Server started");
    await mongoose.connect(
        "mongodb+srv://jackvassallo01:Xd39FxnSMQETljKV@cluster0.h2v5a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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

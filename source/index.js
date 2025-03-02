<<<<<<< HEAD
// Import the configured server
// and run it
app.use("/coffee", coffeeRouter);
const dotenv = require("dotenv");
dotenv.config();

const { app } = require(".");
const coffeeRouter = require("../routes/coffeeRoutes");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
=======
// Create and configure the server
// and all of its endpoints

const express = require("express");

// Create an instance of the Express system
const app = express();

app.get("/", (request, response) => {
    response.json({
        message: "Server started!",
    });
>>>>>>> routes
});

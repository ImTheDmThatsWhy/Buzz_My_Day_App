// Create and configure the server
// and all of its endpoints

const express = require("express");

// Create an instance of the Express system
const app = express();

app.get("/", (request, response) => {
    response.json({
        message: "Server started!",
    });
});

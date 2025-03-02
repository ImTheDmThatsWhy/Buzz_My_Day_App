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
});

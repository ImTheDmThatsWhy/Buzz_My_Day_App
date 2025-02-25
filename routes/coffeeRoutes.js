const express = require("express");
const {
    getCoffees,
    getCoffee,
    createCoffee,
    updateCoffee,
    deleteCoffee,
} = require("../controllers/coffee_controller");

const coffeeRouter = express.Router();

coffeeRouter.get("/", async (req, res) => {
    const coffees = await getCoffees();
    res.json(coffees);
});

coffeeRouter.get("/:coffeeId");

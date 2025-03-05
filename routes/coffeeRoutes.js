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

coffeeRouter.get("/:coffeeId", async (req, res) => {
    const coffee = await getCoffee(req.params.coffeeId);
    if (coffee) {
        res.json(coffee);
    } else {
        res.status(404).json({
            error: `Coffee with id ${req.params.coffeeId} not found`,
        });
    }
});

coffeeRouter.post("/", async (req, res) => {
    const bodyData = {
        title: req.body.title,
        description: req.body.description,
    };
    const newCoffee = await createCoffee(bodyData);
    res.status(201).json(newCoffee);
});

coffeeRouter.patch("/:coffeeId", async (req, res) => {
    const deletedCoffee = await deleteCoffee(req.params.coffeeId);
    if (deletedCoffee) {
        res.json(deletedCoffee);
    } else {
        res.status(404).json({
            error: `Coffee with id ${req.params.coffeeId} not found`,
        });
    }
});
module.exports = coffeeRouter;

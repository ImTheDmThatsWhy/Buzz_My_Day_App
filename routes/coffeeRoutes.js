const express = require("express");
const {
    getCoffees,
    getCoffee,
    createCoffee,
    updateCoffee,
    deleteCoffee,
} = require("../controllers/coffeeController");

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
        name: req.body.name,
        brand: req.body.brand,
        type: req.body.type,
        description: req.body.description,
        cost: req.body.cost,
        rating: req.body.rating,
    };
    const newCoffee = await createCoffee(bodyData);
    res.status(201).json(newCoffee);
});

coffeeRouter.patch("/:coffeeId", async (req, res) => {
    const bodyData = {
        name: req.body.name,
        brand: req.body.brand,
        type: req.body.type,
        description: req.body.description,
        cost: req.body.cost,
        rating: req.body.rating,
    };
    const updatedCoffee = await updateCoffee(
        req.params.coffeeId,
        bodyData,
        req.userId
    );
    if (!updatedCoffee) {
        res.status(404).json({
            error: `coffee with id ${req.params.coffeeId} not found`,
        });
    } else if (updatedCoffee.error) {
        res.status(403).json(updatedCoffee);
    } else {
        res.json(updatedCoffee);
    }
});
coffeeRouter.delete("/:coffeeId", async (req, res) => {
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

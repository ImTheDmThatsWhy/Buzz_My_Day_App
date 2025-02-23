const Coffee = require("../models/coffee_model");

async function getCoffees() {
    const coffees = await Coffee.find();
    return coffees;
}

async function getCoffee(coffeeId) {
    const coffee = await Coffee.findbyId(coffeeId);
    return coffee;
}

async function createCoffee(coffee) {
    const newCoffee = await Coffee.create(coffee);
    return newCoffee;
}

async function updateCoffee(CoffeeId, coffee) {
    const updatedCoffee = await Category.findByIdandUpdate(coffeeId, coffee, {
        new: true,
    });
    return updatedCoffee;
}
async function deleteCoffee(coffeeId) {
    const deletedCoffee = await Coffee.findByIdAndDelete(coffeeID);
    return deletedCoffee;
}
module.exports = {
    getCoffees,
    getCoffee,
    createCoffee,
    updateCoffee,
    deleteCoffee,
};

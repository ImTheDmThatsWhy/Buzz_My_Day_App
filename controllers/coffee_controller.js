const Coffee = require("../models/coffee_model");

async function getCoffees() {
    const coffees = await Coffee.find();
    return categories;
}

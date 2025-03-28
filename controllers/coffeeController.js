const Coffee = require("../models/coffeeModel");

async function getCoffees() {
    const coffees = await Coffee.find();
    return coffees;
}

async function getCoffeesById(favouriteCoffees) {
    const coffees = [];
    for (const favouriteCoffee of favouriteCoffees) {
        const coffeeId = String(favouriteCoffee.coffee);
        if (!coffeeId.match(/^[0-9a-fA-F]{24}$/)) {
            console.log("coffee id is invalid: " + coffeeId);
            continue;
        }

        try {
            const coffee = await Coffee.findById(coffeeId);
            if (coffee) {
                coffees.push({ _id: favouriteCoffee._id, coffee: coffee });
            } else {
                console.log("Invalid coffee id: " + coffeeId);
            }
        } catch (err) {
            console.log(err.errors);
        }
    }

    return coffees;
}

async function getCoffee(coffeeId) {
    if (!coffeeId.match(/^[0-9a-fA-F]{24}$/)) {
        // mongoose ids must match this regex
        return false;
    }
    const coffee = await Coffee.findById(coffeeId);
    return coffee;
}

async function createCoffee(coffee) {
    try {
        const existingCoffee = await Coffee.findOne({
            name: coffee.name,
            type: coffee.type,
            brand: coffee.brand,
        });
        if (existingCoffee) {
            return {
                error: "coffee with that brand, name, and type already exists",
            };
        }

        const newCoffee = await Coffee.create(coffee);
        return newCoffee;
    } catch (err) {
        return { error: err.errors };
    }
}
async function updateCoffee(coffeeId, coffee) {
    try {
        if (!coffeeId.match(/^[0-9a-fA-F]{24}$/)) {
            // mongoose ids must match this regex
            return false;
        }
        const existingCoffee = await Coffee.findOne({
            name: coffee.name,
            type: coffee.type,
            brand: coffee.brand,
        });
        if (existingCoffee) {
            return {
                error: "coffee with that brand, name, and type already exists",
            };
        }

        const updatedCoffee = await Coffee.findByIdAndUpdate(coffeeId, coffee, {
            new: true,
        });
        return updatedCoffee;
    } catch (err) {
        return { error: err.errors };
    }
}
async function deleteCoffee(coffeeId) {
    if (!coffeeId.match(/^[0-9a-fA-F]{24}$/)) {
        // mongoose ids must match this regex
        return false;
    }
    const deletedCoffee = await Coffee.findByIdAndDelete(coffeeId);
    return deletedCoffee;
}
module.exports = {
    getCoffees,
    getCoffee,
    getCoffeesById,
    createCoffee,
    updateCoffee,
    deleteCoffee,
};

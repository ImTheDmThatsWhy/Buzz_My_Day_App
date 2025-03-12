const Favourite = require("../models/favouritesModel");

async function getFavourites() {
    const favourites = await Favourite.find();
    return favourites;
}

async function getFavourite(favouriteId) {
    const favourite = await Favourite.findOne(favouriteId);
    return favourite;
}

async function createFavourite(favourite) {
    const existingFavourite = await Favourite.findById({
        favourite: favourite.coffeeId,
    });
    if (existingFavourite) {
        return { error: "coffee with that id already in favourites" };
    }

    const newFavourite = await Favourite.create(favourite);
    return newFavourite;
}

async function updateFavourite(favouriteId, favourite) {
    const updatedFavourite = await Favourite.findByIdAndUpdate(
        favouriteId,
        favourite,
        {
            new: true,
        }
    );
    return updatedFavourite;
}
async function deleteFavourite(favouriteId) {
    const deletedFavourite = await Favourite.findByIdAndDelete(favouriteId);
    return deletedFavourite;
}
module.exports = {
    getFavourites,
    getFavourite,
    createFavourite,
    updateFavourite,
    deleteFavourite,
};

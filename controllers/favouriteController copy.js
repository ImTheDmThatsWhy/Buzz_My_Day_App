const Favourite = require("../models/FavouritesModel");

async function getFavourites() {
    const favourites = await Favourite.find();
    return favourites;
}

async function getFavourite(favouriteId) {
    const favourite = await Favourite.findbyId(favouriteId);
    return favourite;
}

async function createFavourite(favourite) {
    const newFavourite = await Favourite.create(favourite);
    return newFavourite;
}

async function updateFavourite(favouriteId, favourite) {
    const updatedFavourite = await Favourite.findByIdandUpdate(
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

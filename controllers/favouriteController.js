const Favourite = require("../models/favouritesModel");

async function getFavourites() {
    const favourites = await Favourite.find();
    return favourites;
}

async function getFavourite(favouriteId) {
    if (!favouriteId.match(/^[0-9a-fA-F]{24}$/)) {
        // mongoose ids must match this regex
        return false;
    }
    const favourite = await Favourite.findById(favouriteId);
    return favourite;
}

async function createFavourite(favourite) {
    // if (!coffee_id.match(/^[0-9a-fA-F]{24}$/)) {
    //     // mongoose ids must match this regex
    //     return false;
    // }
    // if (!account_id.match(/^[0-9a-fA-F]{24}$/)) {
    //     // mongoose ids must match this regex
    //     return false;
    // }
    // const existingFavourite = await Favourite.findById({
    //     coffee_id: favourite.coffee_id,
    //     account_id: favourite.account_id,
    // });
    // if (existingFavourite) {
    //     return { error: "coffee with that id already in favourites" };
    // }
    const newFavourite = await Favourite.create(favourite);
    return newFavourite;
}

async function updateFavourite(favouriteId, favourite) {
    if (!favouriteId.match(/^[0-9a-fA-F]{24}$/)) {
        // mongoose ids must match this regex
        return false;
    }
    // if (!coffee_id.match(/^[0-9a-fA-F]{24}$/)) {
    //     // mongoose ids must match this regex
    //     return false;
    // }
    // if (!account_id.match(/^[0-9a-fA-F]{24}$/)) {
    //     // mongoose ids must match this regex
    //     return false;
    // }
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
    if (!favouriteId.match(/^[0-9a-fA-F]{24}$/)) {
        // mongoose ids must match this regex
        return false;
    }
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

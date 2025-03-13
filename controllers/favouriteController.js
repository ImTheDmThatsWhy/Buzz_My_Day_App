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
    try {
        if (!favourite.coffee_id.match(/^[0-9a-fA-F]{24}$/)) {
            // mongoose ids must match this regex
            return {
                error: "input must be a 24 character hex string, 12 byte Uint8Array, or an integer",
            };
        }
        if (!favourite.account_id.match(/^[0-9a-fA-F]{24}$/)) {
            // mongoose ids must match this regex
            return {
                error: "input must be a 24 character hex string, 12 byte Uint8Array, or an integer",
            };
        }
        const existingFavourite = await Favourite.findOne({
            coffee_id: favourite.coffee_id,
            account_id: favourite.account_id,
        });
        if (existingFavourite) {
            return { error: "coffee with that id already in favourites" };
        }
        const newFavourite = await Favourite.create(favourite);
        return newFavourite;
    } catch (err) {
        return { error: err.errors };
    }
}

async function updateFavourite(favouriteId, favourite) {
    try {
        if (!favourite.coffee_id.match(/^[0-9a-fA-F]{24}$/)) {
            // mongoose ids must match this regex
            return {
                error: "input must be a 24 character hex string, 12 byte Uint8Array, or an integer",
            };
        }
        if (!favourite.account_id.match(/^[0-9a-fA-F]{24}$/)) {
            // mongoose ids must match this regex
            return {
                error: "input must be a 24 character hex string, 12 byte Uint8Array, or an integer",
            };
        }
        const existingFavourite = await Favourite.findOne({
            coffee_id: favourite.coffee_id,
            account_id: favourite.account_id,
        });
        if (existingFavourite) {
            return { error: "coffee with that id already in favourites" };
        }
        const updatedFavourite = await Favourite.findByIdAndUpdate(
            favouriteId,
            favourite,
            {
                new: true,
            }
        );
        return updatedFavourite;
    } catch (err) {
        return { error: err.errors };
    }
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

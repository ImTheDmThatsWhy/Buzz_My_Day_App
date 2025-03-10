const express = require("express");

const {
    getFavourites,
    getFavourite,
    createFavourite,
    updateFavourite,
    deleteFavourite,
} = require("../controllers/favouriteController");
const authorization = require("../middleware/authorization");

const favouriteRouter = express.Router();
//get all favourites
favouriteRouter.get("/", authorization, async (req, res) => {
    const favourites = await getFavourites();
    res.json(favourites);
});

favouriteRouter.get("/:favouriteId", authorization, async (req, res) => {
    const favourite = await getFavourite(req.params.favouriteId);
    if (favourite) {
        res.json(favourite);
    } else {
        res.status(404).json({
            error: `favourite with id ${req.params.favouriteId}`,
        });
    }
});
favouriteRouter.post("/", authorization, async (req, res) => {
    const bodyData = {
        coffee_id: req.body.coffee_id,
        account_id: req.body.account_id,
    };
    const newFavourite = await createFavourite(bodyData);
    res.status(201).json(newFavourite);
});
favouriteRouter.patch("/:favouriteId", authorization, async (req, res) => {
    const bodyData = {
        coffee_id: req.body.coffee_id,
        account_id: req.body.account_id,
    };
    const updatedFavourite = await updateFavourite(
        req.params.favouriteId,
        bodyData,
        req.userId
    );
    if (!updatedFavourite) {
        res.status(404).json({
            error: `favourite with id ${req.params.favouriteId} not found`,
        });
    } else if (updatedFavourite.error) {
        res.status(403).json(updatedFavourite);
    } else {
        res.json(updatedFavourite);
    }
});
// Delete favourite
favouriteRouter.delete("/:favouriteId", authorization, async (req, res) => {
    const deletedFavourite = await deleteFavourite(req.params.favouriteId);
    if (deletedFavourite) {
        res.json(deletedFavourite);
    } else {
        res.status(404).json({
            error: `Favourite with id ${req.params.favouriteId} not found`,
        });
    }
});

module.exports = favouriteRouter;

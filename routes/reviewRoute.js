const express = require("express");

module.exports = {
    getFavourites,
    getFavourite,
    createFavourite,
    updateFavourite,
    deleteFavourite,
} = require("../controllers/reviews_controller");

const reviewRouter = express.Router();

//get reviews
reviewRouter.get("/", async (req, res) => {
    const reviews = await getReviews();
    res.json(reviews);
});
// get single review
reviewRouter.get("/: reviewId", async (req, res) => {
    const review = await this.getReview(req.params.reviewId);
    if (review) {
        res.json(review);
    } else {
        res.status(404).json({
            error: `review with id ${req.params.reviewId} not found`,
        });
    }
});
// post create review
reviewRouter.post("/", async (req, res) => {
    const bodyData = {
        displayname: req.body.displayname,
        description: req.body.description,
        rating: req.body.rating,
        coffee_id: req.body.coffee_id,
        account_id: req.body.account_id,
    };
    const newReview = await createReview(bodyData);
    res.status(201).json(newReview);
});
//patch review
reviewRouter.patch("/:reviewId", async (req, res) => {
    const bodyData = {
        displayname: req.body.displayname,
        description: req.body.description,
        rating: req.body.rating,
        coffee_id: req.body.coffee_id,
        account_id: req.body.account_id,
    };
    const updatedReview = await this.updateReview(
        req.params.reviewId,
        bodyData,
        req.displayname
    );
});
// Delete review
reviewRouter.delete("/:reviewId", async (req, res) => {
    const deletedReview = await this.deleteReview(req.params.reviewId);
    if (deletedReview) {
        res.json(deletedReview);
    } else {
        res.status(404).json({
            error: `review with id ${req.params.reviewId} not found`,
        });
    }
});

const express = require("express");

const {
    getReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview,
} = require("../controllers/reviews");
const authorization = require("../middlewares/authorization");

const reviewRouter = express.Router();

//get reviews
reviewRouter.get("/", async (req, res) => {
    const reviews = await getReviews();
    res.json(reviews);
});
// get single review
reviewRouter.get("/:reviewId", async (req, res) => {
    const review = await getReview(req.params.reviewId);
    if (review) {
        res.json(review);
    } else {
        res.status(404).json({
            error: `review with id ${req.params.reviewId} not found`,
        });
    }
});
// post create review
reviewRouter.post("/", authorization, async (req, res) => {
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
reviewRouter.patch("/:reviewId", authorization, async (req, res) => {
    const bodyData = {
        displayname: req.body.displayname,
        description: req.body.description,
        rating: req.body.rating,
        coffee_id: req.body.coffee_id,
        account_id: req.body.account_id,
    };
    const updatedReview = await updateReview(
        req.params.reviewId,
        bodyData,
        req.displayname
    );
});
// Delete review
reviewRouter.delete("/:reviewId", authorization, async (req, res) => {
    const deletedReview = await deleteReview(req.params.reviewId);
    if (deletedReview) {
        res.json(deletedReview);
    } else {
        res.status(404).json({
            error: `review with id ${req.params.reviewId} not found`,
        });
    }
});

module.exports = reviewRouter;

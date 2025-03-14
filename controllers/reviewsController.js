const Review = require("../models/reviewsModel");
const { findById } = require("../models/userLoginModel");

async function getReviews() {
    const reviews = await Review.find();
    return reviews;
}

async function getReview(reviewId) {
    if (!reviewId.match(/^[0-9a-fA-F]{24}$/)) {
        // mongoose ids must match this regex
        return false;
    }
    const review = await Review.findById(reviewId);
    return review;
}

async function createReview(review) {
    try {
        const existingReview = await Review.findOne({
            displayname: review.displayname,
            coffee_id: review.coffee_id,
        });
        if (existingReview) {
            return {
                error: "review with that displayname and coffee already exists",
            };
        }
        const newReview = await Review.create(review);
        return newReview;
    } catch (err) {
        return { error: err.errors };
    }
}

async function updateReview(reviewId, review) {
    try {
        if (!reviewId.match(/^[0-9a-fA-F]{24}$/)) {
            // mongoose ids must match this regex
            return false;
        }
        const updatedReview = await Review.findByIdAndUpdate(reviewId, review, {
            new: true,
        });
        return updatedReview;
    } catch (err) {
        return { error: err.errors };
    }
}
async function deleteReview(reviewId) {
    if (!reviewId.match(/^[0-9a-fA-F]{24}$/)) {
        // mongoose ids must match this regex
        return false;
    }
    const deletedReview = await Review.findByIdAndDelete(reviewId);
    return deletedReview;
}
module.exports = {
    getReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview,
};

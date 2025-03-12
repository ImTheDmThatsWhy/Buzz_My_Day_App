const Review = require("../models/reviewsModel");
const { findById } = require("../models/userLoginModel");

async function getReviews() {
    const reviews = await Review.find();
    return reviews;
}

async function getReview(reviewId) {
    const review = await Review.findById(reviewId);
    return review;
}

async function createReview(review) {
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
}

async function updateReview(reviewId, review) {
    const updatedReview = await Review.findByIdAndUpdate(reviewId, review, {
        new: true,
    });
    return updatedReview;
}
async function deleteReview(reviewId) {
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

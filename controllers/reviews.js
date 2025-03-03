const Review = require("../models/reviewsModel");
const { findById } = require("../models/userLoginModel");

async function getReviews() {
    const reviews = await Review.find();
    return reviews;
}

async function getReview(reviewId) {
    const review = await Review.findbyId(reviewId);
    return review;
}

async function createReview(review) {
    const newReview = await Review.create(review);
    return newReview;
}

async function updateReview(reviewId, review, userId) {
    const ReviewToUpdate = await Review.findById(reviewId);
    if (ReviewToUpdate.user_id.toString() !== userId) {
        return { error: "Action not allowed" };
    }
    const updatedReview = await Review.findByIdandUpdate(reviewId, review, {
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

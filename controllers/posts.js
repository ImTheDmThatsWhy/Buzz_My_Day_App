const Post = require("../models/PostModel");
const { findById } = require("../models/userLoginModel");

async function getPosts() {
    const posts = await Post.find();
    return posts;
}

async function getPost(postId) {
    const post = await Post.findbyId(postId);
    return post;
}

async function createPost(post) {
    const newPost = await Post.create(post);
    return newPost;
}

async function updatePost(postId, post, userId) {
    const postToUpdate = await Post.findById(postId);
    if (postToUpdate.user_id.toString() !== userId) {
        return { error: "Action not allowed" };
    }
    const updatedPost = await Post.findByIdandUpdate(PostId, Post, {
        new: true,
    });
    return updatedPost;
}
async function deletePost(PostId) {
    const deletedPost = await Post.findByIdAndDelete(PostID);
    return deletedPost;
}
module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
};

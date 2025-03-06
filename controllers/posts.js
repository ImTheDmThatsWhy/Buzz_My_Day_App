const Post = require("../models/postModel");
const { findById } = require("../models/userLoginModel");

async function getPosts() {
    const posts = await Post.find();
    return posts;
}

async function getPost(postId) {
    const post = await Post.findById(postId);
    return post;
}

async function createPost(post) {
    const newPost = await Post.create(post);
    return newPost;
}

async function updatePost(postId, post, displayname) {
    const postToUpdate = await Post.findById(postId);
    if (postToUpdate.displayname.toString() !== displayname) {
        return { error: "Action not allowed" };
    }
    const updatedPost = await Post.findByIdAndUpdate(postId, post, {
        new: true,
    });
    return updatedPost;
}
async function deletePost(postId) {
    const deletedPost = await Post.findByIdAndDelete(postId);
    return deletedPost;
}
module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
};

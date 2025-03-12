const Post = require("../models/postModel");

async function getPosts() {
    const posts = await Post.find();
    return posts;
}

async function getPost(postId) {
    const post = await Post.findById(postId);
    return post;
}

async function createPost(post) {
    // const existingPost = await Post.find({
    //     post: title.content.displayname,
    // });
    // if (existingPost) {
    //     return {
    //         error: "Post with that title, content, and displayname already exists",
    //     };
    // }
    const newPost = await Post.create(post);
    return newPost;
}

async function updatePost(postId, post) {
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

const Post = require("../models/postModel");

async function getPosts() {
    const posts = await Post.find();
    return posts;
}

async function getPost(postId) {
    if (!postId.match(/^[0-9a-fA-F]{24}$/)) {
        // mongoose ids must match this regex
        return false;
    }
    const post = await Post.findById(postId);
    return post;
}

async function createPost(post) {
    const existingPost = await Post.findOne({
        title: post.title,
        content: post.content,
        displayname: post.displayname,
    });
    if (existingPost) {
        return {
            error: "Post with that title, content, and displayname already exists",
        };
    }
    const newPost = await Post.create(post);
    return newPost;
}

async function updatePost(postId, post) {
    if (!postId.match(/^[0-9a-fA-F]{24}$/)) {
        // mongoose ids must match this regex
        return false;
    }
    const updatedPost = await Post.findByIdAndUpdate(postId, post, {
        new: true,
    });
    return updatedPost;
}
async function deletePost(postId) {
    if (!postId.match(/^[0-9a-fA-F]{24}$/)) {
        // mongoose ids must match this regex
        return false;
    }
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

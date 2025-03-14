const { Post, Comment } = require("../models/postModel");

async function createComment(comment, postId) {
    try {
        if (!postId.match(/^[0-9a-fA-F]{24}$/)) {
            // mongoose ids must match this regex
            return {
                error: "input must be a 24 character hex string, 12 byte Uint8Array, or an integer",
            };
        }
        const post = await Post.findById(postId);
        if (!post) {
            return { error: "Post not found" };
        }
        const newComment = new Comment(comment);
        post.comments.push(newComment);
        await post.save();
        return newComment;
    } catch (err) {
        console.log(err);
        return { error: err.errors };
    }
}

async function deleteComment(commentId, postId) {
    try {
        if (!postId.match(/^[0-9a-fA-F]{24}$/)) {
            // mongoose ids must match this regex
            return {
                error: "input must be a 24 character hex string, 12 byte Uint8Array, or an integer",
            };
        }
        const post = await Post.findById(postId);
        if (!post) {
            return { error: "Post not found" };
        }
        const deletedComment = post.comments.id(commentId);
        if (deletedComment) {
            await deletedComment.deleteOne();
            await post.save();
        }
        return deletedComment;
    } catch (err) {
        console.log(err);
        return { error: err.errors };
    }
}

module.exports = {
    createComment,
    deleteComment,
};

const { Post, Comment } = require("../models/postModel");

async function createComment(comment, postId) {
    try {
        const post = await Post.findById(postId);
        if (!post) {
            return { error: "Post not found" };
        }
        const newComment = new Comment(comment);
        post.comments.push(newComment);
        await post.save();
        return newComment;
    } catch (err) {
        return { error: err.errors };
    }
}

async function deleteComment(commentId, postId) {
    try {
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
        return { error: err.errors };
    }
}

module.exports = {
    createComment,
    deleteComment,
};

const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
    message: String,
});

const PostSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    displayname: { type: String, required: true },
    is_published: Boolean,

    comments: [CommentSchema],
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
});

const Comment = mongoose.model("Comment", CommentSchema);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;

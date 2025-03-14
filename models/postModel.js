const mongoose = require("mongoose");
const validator = require("../function/validator");
const CommentSchema = mongoose.Schema({
    message: String,
});

const PostSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    displayname: {
        type: String,
        required: true,
        validate: {
            validator: validator.displaynameValidation(),
            message: "displayname must be between 2-12 characters",
        },
    },
    is_published: Boolean,

    comments: [CommentSchema],
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
});

const Comment = mongoose.model("Comment", CommentSchema);

const Post = mongoose.model("Post", PostSchema);

module.exports = { Comment, Post };

const mongoose = require("mongoose");
const CommentSchema = mongoose.Schema({
    message: String,
});

const PostSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    displayname: {
        type: [String],
        required: true,
        validate: [
            displaynameValidation(),
            "displayname must be between 2-12 characters",
        ],
    },
    is_published: Boolean,

    comments: [CommentSchema],
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
});
function displaynameValidation() {
    return function (value) {
        if (value.length != 1) return false;
        username = value[0];
        if (username.length < 2) {
            return false;
        }
        if (username.length > 12) {
            return false;
        }
    };
}

const Comment = mongoose.model("Comment", CommentSchema);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;

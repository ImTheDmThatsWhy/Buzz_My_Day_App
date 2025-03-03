const mongoose = require("mongoose")

const CommentSchema = mongoose.Schema({
    message: String
})

const PostSchema = mongoose.Schema({
    title: String,
    body: String,
    is_published: Boolean,
    category_id: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    comments: [CommentSchema],
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})



const Comment = mongoose.model("Comment", CommentSchema)

const Post = mongoose.model("Post", PostSchema)

module.exports = {
    Comment,
    Post
}
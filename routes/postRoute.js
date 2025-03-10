const express = require("express");

const {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
} = require("../controllers/postsControllers");
const authorization = require("../middleware/authorization");
const postRouter = express.Router();
// Get all posts
postRouter.get("/", async (req, res) => {
    const posts = await getPosts();
    res.json(posts);
});

// get a single post
postRouter.get("/:postId", async (req, res) => {
    const post = await getPost(req.params.postId);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({
            error: `post with id ${req.params.postId} not found`,
        });
    }
});

// Post
postRouter.post("/", authorization, async (req, res) => {
    const bodyData = {
        title: req.body.title,
        content: req.body.content,
        displayname: req.body.displayname,
        category_id: req.body.category_id,
    };
    const newPost = await createPost(bodyData);
    res.status(201).json(newPost);
});

//patch posts
postRouter.patch("/:postId", authorization, async (req, res) => {
    const bodyData = {
        title: req.body.title,
        content: req.body.content,
        displayname: req.body.displayname,
        category_id: req.body.category_id,
    };
    const updatedPost = await updatePost(
        req.params.postId,
        bodyData,
        req.body.displayname
    );
    if (!updatedPost) {
        res.status(404).json({
            error: `Post with id ${req.params.postId} not found`,
        });
    } else if (updatedPost.error) {
        res.status(403).json(updatedPost);
    } else {
        res.json(updatedPost);
    }
});

// Delete posts/id
postRouter.delete("/:postId", authorization, async (req, res) => {
    const deletedPost = await deletePost(req.params.postId);
    if (deletedPost) {
        res.json(deletedPost);
    } else {
        res.status(404).json({
            error: `Post with id ${req.params.postId}not found`,
        });
    }
});

module.exports = postRouter;

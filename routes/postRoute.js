const express = require("express");

const {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
} = require("../controllers/postControllers");

const postRouter = express.Router();
// Get all posts
postRouter.get("/", async (req, res) => {
    const posts = await getPosts();
    res.json(posts);
});

// get a single post
postRouter.get("/: postId", async (req, res) => {
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
postRouter.post("/", async (req, res) => {
    const bodyData = {
        title: req.body.title,
        body: req.body.body,
        is_published: req.body.is_published,
        user_id: req.userId,
    };
    const newPost = await createPost(bodyData);
    res.status(201).json(newPost);
});

//patch posts
postRouter.patch("/:postId", async (req, res) => {
    const bodyData = {
        title: req.body.title,
        body: req.body.body,
        is_published: req.body.is_published,
        post_id: req.body_post_id,
        user_id: req.userId,
    };
    const updatedPost = await updatePost(
        req.params.postId,
        bodyData,
        req.userId
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
postRouter.delete("/:postId", async (req, res) => {
    const deletedPost = await deletePost(req.params.postId);
    if (deletedPost) {
        res.json(deletedPost);
    } else {
        res.status(404).json({
            error: `Post with id ${req.params.postId}not found`,
        });
    }
});

exports = postRouter;

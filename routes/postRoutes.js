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
        post_id: req.body.post_id,
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
    };
});

const express = require("express");

const {
    createComment,
    deleteComment,
} = require("../controllers/commentController");

const commentRouter = express.Router();

commentRouter.post("/", async (req, res) => {
    const bodyData = {
        message: req.body.message,
    };
    const newComment = await createComment(bodyData, req.body.post_id);
    if (newComment.error) {
        res.status(404).json(newComment);
    } else {
        res.json(newComment);
    }
});

commentRouter.delete("/:commentId", async (req, res) => {
    const deletedComment = await deleteComment(
        req.params.commentId,
        req.body.post_id
    );

    if (!deletedComment) {
        res.status(404).json({
            error: `Comment with id ${req.params.commentId} does not exist on the post`,
        });
    } else if (deletedComment.error) {
        res.status(404).json(deletedComment);
    } else {
        res.json(deletedComment);
    }
});

module.exports = commentRouter;

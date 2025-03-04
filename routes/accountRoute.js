const express = require("express");
const accountRouter = require("./accountRoute");

module.exports = {
    getAccounts,
    getAccount,
    createAccount,
    updateAccount,
    deleteAccount,
} = require("../controllers/account_controller");
// use middleware so users must be authorised before updating the account
const authorization = require("../middleware/authorization");

const accountRouter = express.Router();
// get accounts
accountRouter.get("/", async (requestAnimationFrame, res) => {
    const account = await getAccounts();
    res.json(accounts);
});

// get single account
accountRouter.get("/: accountId", async (req, res) => {
    const account = await this.getAccount(req.params.accountId);
    if (account) {
        res.json(account);
    } else {
        res.status(404).json({
            error: `account with id ${req.params.accountId} not found`,
        });
    }
});
// create an account
accountRouter.post("/", async (req, res) => {
    const bodyData = {
        email: req.body.email,
        displayname: req.body.displayname,
        photo: req.body.photo,
        name: req.body.name,
        description: req.body.description,
    };
    const newAccount = await createAccount(bodyData);
    res.status(201).json(newAccount);
});
// update account

accountRouterRouter.patch("/:accountId", authorization, async (req, res) => {
    const bodyData = {
        email: req.body.email,
        displayname: req.body.displayname,
        photo: req.body.photo,
        name: req.body.name,
        description: req.body.description,
    };
    const updatedAccount = await updateAccount(
        req.params.accountId,
        bodyData,
        req.displayname
    );
    if (!updatedAccount.error) {
        res.status(404).json({
            error: `account with id ${req.params.accountId} not found`,
        });
    } else if (updatedAccount.error) {
        res.status(403).json(updatedAccount);
    } else {
        res.json(updatedAccount);
    }
});
accountRouter.delete("/:accountId", authorization, async (req, res) => {
    const deletedReview = await deleteReview(req.params.accountId);
    if (deletedAccount) {
        res.json(deletedAccount);
    } else {
        res.status(404).json({
            error: `Account with id ${req.params.accountId} not found`,
        });
    }
});

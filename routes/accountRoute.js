const express = require("express");

const {
    getAccounts,
    getAccount,
    createAccount,
    updateAccount,
    deleteAccount,
} = require("../controllers/accountController");
// use middleware so users must be authorised before updating the account
const authorization = require("../middleware/authorization");

const accountRouter = express.Router();

// get accounts
accountRouter.get("/", async (req, res) => {
    const accounts = await getAccounts();
    res.json(accounts);
});

// get single account
accountRouter.get("/:accountId", async (req, res) => {
    const account = await getAccount(req.params.accountId);
    if (account) {
        res.json(account);
    } else {
        res.status(404).json({
            error: `Account with id ${req.params.accountId} not found`,
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
accountRouter.patch("/:accountId", async (req, res) => {
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
    if (!updatedAccount) {
        res.status(404).json({
            error: `Account with id ${req.params.accountId} not found`,
        });
    } else {
        res.json(updatedAccount);
    }
});

// delete account
accountRouter.delete("/:accountId", async (req, res) => {
    const deletedAccount = await deleteAccount(req.params.accountId);

    if (!deletedAccount) {
        res.status(404).json({
            error: `Account with id ${req.params.accountId} does not exist`,
        });
    } else {
        res.json(deletedAccount);
    }
});

module.exports = accountRouter;

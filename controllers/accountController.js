const Account = require("../models/accountModel");

async function getAccounts() {
    const accounts = await Account.find();
    return accounts;
}

async function getAccount(accountId) {
    if (!accountId.match(/^[0-9a-fA-F]{24}$/)) {
        // mongoose ids must match this regex
        return false;
    }
    const account = await Account.findById(accountId);
    return account;
}

async function createAccount(account) {
    try {
        const existingEmail = await Account.findOne({
            email: account.email,
        });
        if (existingEmail) {
            return { error: "Account with that email already exists" };
        }

        const existingDisplayname = await Account.findOne({
            displayname: account.displayname,
        });
        if (existingDisplayname) {
            return { error: "Account with that displayname already exists" };
        }
        const newAccount = await Account.create(account);
        return newAccount;
    } catch (err) {
        return { error: err.errors };
    }
}

async function updateAccount(accountId, account) {
    try {
        if (!accountId.match(/^[0-9a-fA-F]{24}$/)) {
            // mongoose ids must match this regex
            return false;
        }
        const existingEmail = await Account.findOne({
            email: account.email,
        });
        if (existingEmail && existingEmail._id != accountId) {
            return { error: "Account with that email already exists" };
        }

        const existingDisplayname = await Account.findOne({
            displayname: account.displayname,
        });
        if (existingDisplayname && existingDisplayname._id != accountId) {
            return { error: "Account with that displayname already exists" };
        }
        const updatedAccount = await Account.findByIdAndUpdate(
            accountId,
            account,
            {
                new: true,
            }
        );
        return updatedAccount;
    } catch (err) {
        return { error: err.errors };
    }
}

async function deleteAccount(accountId) {
    if (!accountId.match(/^[0-9a-fA-F]{24}$/)) {
        // mongoose ids must match this regex
        return false;
    }
    const deletedAccount = await Account.findByIdAndDelete(accountId);
    return deletedAccount;
}

module.exports = {
    getAccounts,
    getAccount,
    createAccount,
    updateAccount,
    deleteAccount,
};

const Account = require("../models/accountModel");

async function getAccounts() {
    const accounts = await Account.find();
    return accounts;
}

async function getAccount(displayname) {
    const account = await Account.findOne({ displayname: displayname });
    return account;
}

async function createAccount(account) {
    try {
        console.log(account);
        const existingEmail = await Account.findOne({
            email: account.email,
        });
        console.log(existingEmail);
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

async function updateAccount(displayname, account) {
    try {
        const existingEmail = await Account.findOne({
            email: account.email,
        });
        if (existingEmail && existingEmail.displayname != displayname) {
            return { error: "Account with that email already exists" };
        }

        const existingDisplayname = await Account.findOne({
            displayname: account.displayname,
        });
        if (
            existingDisplayname &&
            existingDisplayname.displayname != displayname
        ) {
            return { error: "Account with that displayname already exists" };
        }
        const updatedAccount = await Account.findOneAndUpdate(
            { displayname: displayname },
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

async function deleteAccount(displayname) {
    const deletedAccount = await Account.findOneAndDelete({
        displayname: displayname,
    });
    return deletedAccount;
}

module.exports = {
    getAccounts,
    getAccount,
    createAccount,
    updateAccount,
    deleteAccount,
};

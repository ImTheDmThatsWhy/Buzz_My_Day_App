const Account = require("../models/accountModel");

async function getAccounts() {
    const accounts = await Account.find();
    return accounts;
}

async function getAccount(accountId) {
    const account = await Account.findById(accountId);
    return account;
}

async function createAccount(accountData) {
    const newAccount = await Account.create(accountData);
    return newAccount;
}

async function updateAccount(accountId, accountData) {
    const updatedAccount = await Account.findByIdAndUpdate(accountId, accountData, {
        new: true,
    });
    return updatedAccount;
}

async function deleteAccount(accountId) {
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

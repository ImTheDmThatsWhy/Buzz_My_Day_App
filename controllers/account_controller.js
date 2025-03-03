const Account = require("../models/accountModel");

async function getAccounts() {
    const accounts = await Account.find();
    return accounts;
}

async function getAccount(accountId) {
    const account = await Account.findbyId(accountId);
    return account;
}

async function createAccount(account) {
    const newAccount = await account.create(account);
    return newAccount;
}

async function updateAccount(accountId, account) {
    const updatedAccount = await Account.findByIdandUpdate(accountId, account, {
        new: true,
    });
    return updatedAccount;
}
async function deleteAccount(accountId) {
    const deletedAccount = await account.findByIdAndDelete(accountID);
    return deletedAccount;
}
module.exports = {
    getAccounts,
    getAccount,
    createAccount,
    updateAccount,
    deleteAccount,
};

function displaynameValidation() {
    return function (username) {
        if (username.length < 2) {
            return false;
        }
        if (username.length > 12) {
            return false;
        }
    };
}
module.exports = {
    displaynameValidation,
};

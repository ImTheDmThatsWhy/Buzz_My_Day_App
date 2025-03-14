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
function costValidation() {
    return function (cost) {
        if (Number(cost) === NaN) {
            return false;
        } else return true;
    };
}

module.exports = {
    displaynameValidation,
    costValidation,
};

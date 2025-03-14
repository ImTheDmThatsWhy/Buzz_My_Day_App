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
        const pattern = /^[0-9.][0-9.]+$/;
        if (!pattern.test(cost)) {
            return false;
        } else return true;
    };
}

module.exports = {
    displaynameValidation,
    costValidation,
};

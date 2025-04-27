function displaynameValidation() {
    return function (displayname) {
        if (displayname.length < 2) {
            return false;
        }
        if (displayname.length > 12) {
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

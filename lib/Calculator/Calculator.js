'use strict';

function add(string) {
    if (string === '') {
        return 0;
    }
    const result = parseInt(string);
    if (isNaN(result)) {
        const err = new TypeError('Argument to add must be a string with comma-delimeted numbers');
        throw err;
    }
    return result;
}

module.exports = {
    add,
};

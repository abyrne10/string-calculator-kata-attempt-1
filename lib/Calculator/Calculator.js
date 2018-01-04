'use strict';

function add(string) {
    if (string === '') {
        return 0;
    }
    return parseInt(string);
}

module.exports = {
    add,
};

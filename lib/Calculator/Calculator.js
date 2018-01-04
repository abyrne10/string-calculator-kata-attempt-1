'use strict';

function add(string) {
    if (string === '') {
        return 0;
    }
    const numbers = getNumbersFromString(string);
    const result = getSumOfNumbers(numbers);
    return result;
}

function getNumbersFromString(string) {
    const split = string.split(',');
    const numbers = [];
    for (var i = 0; i < split.length; i++) {
        const number = split[i];
        const integer = getIntegerValue(number);
        numbers.push(integer);
    }
    return numbers;
}

function getSumOfNumbers(numbers) {
    let result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

function getIntegerValue(string) {
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

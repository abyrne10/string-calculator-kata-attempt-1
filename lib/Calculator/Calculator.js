'use strict';

function add(numbers) {
    if (typeof numbers !== 'string') {
        const err = new TypeError('Argument \'numbers\' must be of type string');
        throw err;
    }
    if (numbers === '') {
        return 0;
    }
    const integers = getNumbersFromString(numbers);
    const result = getSumOfNumbers(integers);
    return result;
}

function getNumbersFromString(string) {
    if (typeof string !== 'string') {
        const err = new TypeError('Argument \'string\' must be of type string');
        throw err;
    }
    const splitOnComma = string.split(',');
    const integers = getIntegers(splitOnComma);
    return integers;
}

function getIntegers(array) {
    if (Array.isArray(array) === false) {
        const err = new TypeError('Argument \'array\' must be of type array');
        throw err;
    }
    const integers = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].includes('\n')) {
            const splitOnNewline = array[i].split('\n');
            for (var j = 0; j < splitOnNewline.length; j++) {
                const integer = getIntegerValue(splitOnNewline[j]);
                integers.push(integer);
            }
        } else {
            const integer = getIntegerValue(array[i]);
            integers.push(integer);
        }
    }
    return integers;
}

function getSumOfNumbers(numbers) {
    if (Array.isArray(numbers) === false) {
        const err = new TypeError('Argument \'numbers\' must be of type array');
        throw err;
    }
    let result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

function getIntegerValue(string) {
    if (typeof string !== 'string') {
        const err = new TypeError('Argument \'string\' must be of type string');
        throw err;
    }
    const result = parseInt(string);
    if (isNaN(result)) {
        const err = new TypeError('Argument to add must be a string with comma-delimeted numbers');
        throw err;
    }
    return result;
}

function logJson(description, arg) {
    if (typeof description !== 'string') {
        const err = new TypeError('Argument \'description\' must be of type string');
        throw err;
    }
    console.log(`${description}:`);
    console.log(JSON.stringify(arg));
}

module.exports = {
    add,
};

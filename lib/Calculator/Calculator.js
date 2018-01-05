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
    const splitOnComma = string.split(',');
    const integers = getIntegers(splitOnComma);
    return integers;
}

function getIntegers(array) {
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
    let result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

function getIntegerValue(string) {
    logJson('string', string);
    const result = parseInt(string);
    if (isNaN(result)) {
        const err = new TypeError('Argument to add must be a string with comma-delimeted numbers');
        throw err;
    }
    return result;
}

function logJson(description, arg) {
    console.log(`${description}:`);
    console.log(JSON.stringify(arg));
}

module.exports = {
    add,
};

'use strict';

const customDelimiterIndicator = '//';
const Type = {
    'undefined': 'undefined',
    'Null': 'object',
    'boolean': 'boolean',
    'number': 'number',
    'string': 'string',
    'symbol': 'symbol',
    'function': 'function',
    'object': 'object',
    'array': 'array'
};

function add(numbers) {
    checkArgIsOfType(numbers, Type.string);
    if (numbers === '') {
        return 0;
    }
    let strings;
    const customDelimiterSpecified = checkForCustomDelimiter(numbers);
    if (customDelimiterSpecified) {
        const delimiter = getCustomDelimiter(numbers);
        strings = getStringsWithCustomDelimiter(numbers, delimiter);
    } else {
        strings = getStringsWithStandardDelimiters(numbers);
    }
    const ints = getIntsInArrayOfStrings(strings);
    checkForNegatives(ints);
    const sum = getSumOfIntsInArray(ints);
    return sum;
}

function checkForNegatives(ints) {
    checkArgIsOfType(ints, Type.array);
    const negatives = containsNegatives(ints);
    if (negatives) {
        const err = new Error();
        err.message = 'negatives not allowed';
        err.negatives = JSON.stringify(negatives);
        throw err;
    }
}

function containsNegatives(ints) {
    let negatives = [];
    checkArgIsOfType(ints, Type.array);
    for (var i = 0; i < ints.length; i++) {
        if (ints[i] < 0) {
            negatives.push(ints[i]);
        }
    }
    if (negatives.length === 0) {
        negatives = null;
    }
    return negatives;
}

function getCustomDelimiter(numbers) {
    checkArgIsOfType(numbers, Type.string);
    const delimiterStarts = customDelimiterIndicator.length;
    const delimiterEnds = numbers.indexOf('\n');
    const delimiter = numbers.slice(delimiterStarts, delimiterEnds);
    return delimiter;
}

function getStringsWithCustomDelimiter(numbers, delimiter) {
    checkArgIsOfType(numbers, Type.string);
    checkArgIsOfType(delimiter, Type.string);
    const startOfStringToSum = numbers.indexOf('\n') + '\n'.length;
    const endOfStringToSum = numbers.length;
    const stringToSum = numbers.slice(startOfStringToSum, endOfStringToSum);
    if (stringToSum.includes(',') || stringToSum.includes('\n')) {
        throw new TypeError('When using custom delimiter, you can\'t use a comma or a newline as a delimiter');
    }
    const splitOnDelimiter = stringToSum.split(delimiter);
    return splitOnDelimiter;
}

function getSumOfIntsInArray(ints) {
    checkArgIsOfType(ints, Type.array);
    let sum = 0;
    for (var i = 0; i < ints.length; i++) {
        sum += ints[i];
    }
    return sum;
}

function getIntsInArrayOfStrings(strings) {
    checkArgIsOfType(strings, Type.array);
    const ints = [];
    for (var i = 0; i < strings.length; i++) {
        const int = getIntegerValue(strings[i]);
        ints.push(int);
    }
    return ints;
}

function getStringsWithStandardDelimiters(numbers) {
    checkArgIsOfType(numbers, Type.string);
    const strings = [];
    const splitOnComma = numbers.split(',');
    for (var i = 0; i < splitOnComma.length; i++) {
        if (splitOnComma[i].includes('\n')) {
            const splitOnNewline = splitOnComma[i].split('\n');
            for (var j = 0; j < splitOnNewline.length; j++) {
                strings.push(splitOnNewline[j]);
            }
        } else {
            strings.push(splitOnComma[i]);
        }
    }
    return strings;
}

function checkForCustomDelimiter(numbers) {
    checkArgIsOfType(numbers, Type.string);
    if (!numbers.includes('\n')) {
        return false;
    }
    let result;
    const splitOnNewline = numbers.split('\n');
    if (splitOnNewline[0].includes(customDelimiterIndicator)) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

function getIntegerValue(string) {
    checkArgIsOfType(string, Type.string);
    const result = parseInt(string);
    if (isNaN(result)) {
        const err = new Error('Argument to add must be a string with comma-delimeted numbers');
        throw err;
    }
    return result;
}

function checkArgIsOfType(arg, type) {
    if (type === Type.array) {
        if (Array.isArray(arg) === false) {
            throw new TypeError(`Argument must be of type ${type}, ${typeof arg} given`);
        }
    } else {
        if (typeof arg !== type) {
            throw new TypeError(`Argument must be of type ${type}, ${typeof arg} given`);
        }
    }
}

function logJson(description, arg) {
    checkArgIsOfType(description, Type.string);
    console.log(`${description}:`);
    console.log(JSON.stringify(arg));
}

module.exports = {
    add,
};

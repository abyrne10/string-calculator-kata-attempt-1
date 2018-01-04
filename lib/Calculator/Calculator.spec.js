'use strict';

const Calculator = require('./Calculator');
const expect = require('chai').expect;

describe('Calculator module', () => {
    describe('"add"', () => {
        it('should export a function', () => {
            expect(Calculator.add).to.be.a('function');
        });
        it('should return 0 for an empty string', () => {
            expect(Calculator.add('')).to.equal(0);
        });
        it('should return the same number when only one number is input', () => {
            expect(Calculator.add('1')).to.equal(1);
        });
        it('should throw a TypeError when the input is not a number', () => {
            expect(() => { Calculator.add('hello'); }).to.throw(TypeError);
        });
    });
});

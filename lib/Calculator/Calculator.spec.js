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
        it('should return 1 when 1 is input', () => {
            expect(Calculator.add('1')).to.equal(1);
        });
        it('should return 2 when 2 is input', () => {
            expect(Calculator.add('2')).to.equal(2);
        });
        it('should throw a TypeError when the input is not a number', () => {
            expect(() => { Calculator.add('hello'); }).to.throw(Error);
        });
        it('should add 1 and 2 to equal 3', () => {
            expect(Calculator.add('1,2')).to.equal(3);
        });
        it('should add 3 and 4 to equal 7', () => {
            expect(Calculator.add('3,4')).to.equal(7);
        });
        it('should throw an Error when the input includes a number and a string', () => {
            expect(() => { Calculator.add('1,hello,2'); }).to.throw(Error);
        });
        it('should add 1, 2, 3 and 4 to equal 10', () => {
            expect(Calculator.add('1,2,3,4')).to.equal(10);
        });
        it('should accept a newline as a delimeter as well as a comma', () => {
            expect(Calculator.add('1\n2,3')).to.equal(6);
        });
        it('should accept a newline as a delimeter', () => {
            expect(Calculator.add('1\n2\n3\n4')).to.equal(10);
        });
        it('should accept a newline as a delimeter as well as a comma with multiple of each', () => {
            expect(Calculator.add('3,4\n5\n6,7,8\n9')).to.equal(42);
        });
        it('should use the delimiter specified in the first line of the string', () => {
            expect(Calculator.add('//;\n1;2')).to.equal(3);
        });
        it('should use the delimiter specified in the first line of the string', () => {
            expect(Calculator.add('// \n1 2 3 4 5 6')).to.equal(21);
        });
        it('should throw when a custom delimiter is passed as well as commas or newlines', () => {
            expect(() => { Calculator.add('//;\n1;2;3,4,5'); }).to.throw(TypeError);
        });
        it('should throw when a custom delimiter is passed as well as commas or newlines', () => {
            expect(() => { Calculator.add('//;\n1;2;3\n4,5'); }).to.throw(TypeError);
        });
    });
});

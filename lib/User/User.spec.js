'use strict';

const User = require('./User');
const expect = require('chai').expect;

describe('User module', () => {
  describe('"up"', () => {
    it('should export a function', () => {
      expect(User.up).to.be.a('function');
    });
    it('should return a promise', () => {
      const usersUpResult = User.up();
      expect(usersUpResult.then).to.be.a('function');
      expect(usersUpResult.catch).to.be.a('function');
    });
  });
});

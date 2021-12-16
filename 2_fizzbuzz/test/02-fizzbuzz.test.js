const chai = require('chai');
const fizzbuzz = require('../02-fizzbuzz');
const assert = chai.assert;

describe('array', () => {
    it('should return array', () => {
        assert.isArray(fizzbuzz());
    })
}) 

describe('length', () => {
    it('should return length of array', () => {
        assert.lengthOf(fizzbuzz(), 1);
    })
})

describe('index 0', () => {
    it('should return index 0 is a number', () => {
        assert.isNumber(fizzbuzz()[0]);
    })
})

describe('index 2', () => {
    it('should return index 2 is a not number', () => {
        assert.isNotNumber(fizzbuzz()[2]);
    })
})





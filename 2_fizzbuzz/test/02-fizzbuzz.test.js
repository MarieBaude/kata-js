const chai = require('chai');
const fizzbuzz = require('../02-fizzbuzz');
const assert = chai.assert;

// describe('array', () => {
//     it('should return array', () => {
//         assert.isArray(fizzbuzz());
//     })
// }) 

describe('index', () => {
    it('should ...', () => {
        assert.lengthOf(fizzbuzz()[0], 1);
    })
})
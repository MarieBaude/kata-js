import chai from 'chai'; 
const assert = chai.assert;
import {fizzbuzz} from '../02-fizzbuzz.js';

describe('array', () => {
    it('should return array', () => {
        assert.isArray(fizzbuzz());
    })
}) 

describe('length', () => {
    it('should return length of array', () => {
        assert.lengthOf(fizzbuzz(), 100);
    })
})

describe('index 0', () => {
    it('should return index 0 is a number', () => {
        assert.isNumber(fizzbuzz()[0]);
    })
})

describe('index 2', () => {
    it('should return index 2 (ligne 3) is a not number', () => {
        assert.isNotNumber(fizzbuzz()[2]);
    })
})





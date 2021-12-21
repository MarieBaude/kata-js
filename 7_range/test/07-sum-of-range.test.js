import chai from 'chai';
const assert = chai.assert;
import {range} from '../07-sum-of-range.js';
import {sum} from '../07-sum-of-range.js';

describe('range', () => {
    it('should return is ok', () => {
        assert.isOk(range(1, 10));
    }),
    it('should return is a array', () => {
        assert.isArray(range(1, 10));
    }), 
    it('should return index 0 is equal to 1', () => {
        assert.equal(range(1, 10)[0], 1);
    }),
    it('should return index 6 is equal to 7', () => {
        assert.equal(range(1, 10)[6], 7);
    })
}) 

describe('sum', () => {
    it('should return is ok', () => {
        assert.isOk(sum());
    }),
    it('should return is a number', () => {
        assert.isNumber(sum());
    })
}) 
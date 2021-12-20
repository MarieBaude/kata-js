import chai from 'chai';
const assert = chai.assert;
import {isEven} from '../05-recursion.js';

describe('isEven', () => {
    it('should return is ok', () => {
        assert.isOk(isEven(50));
    }),
    it('should return is a boolean', () => {
        assert.isBoolean(isEven(50));
    }),
    it('should return 50 is true', () => {
        assert.equal(isEven(50), true);
    }),
    it('should return 75 is false', () => {
        assert.equal(isEven(75), false);
    }),
    it('should return -1 is a string', () => {
        assert.isString(isEven(-1));
    })
}) 
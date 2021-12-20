import chai from 'chai';
const assert = chai.assert;
import {minimum} from '../04-minimum.js';

describe('minimum', () => {
    it('should return is a number', () => {
        assert.isNumber(minimum());
    }),
    it('should return is not a string', () => {
        assert.isNotString(minimum());
    }),
    it('should return is strict equal at 2', () => {
        assert.strictEqual(minimum(), 2);
    }),
    it('should return 2 is strictly greater than 1', () => {
        assert.isAbove(minimum(), 1);
    })
}) 
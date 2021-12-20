import chai from 'chai';
const assert = chai.assert;
import {countBs} from '../06-counting.js';
import {countChar} from '../06-counting.js';

describe('countBs', () => {
    it('should return is ok', () => {
        assert.isOk(countBs('BBC'))
    }),
    it('should return is a string', () => {
        assert.isNumber(countBs('BBC'))
    }),
    it('should return BBC has 2 B', () => {
        assert.equal(countBs('BBC'), 2)
    })
}) 

describe('countChar', () => {
    it('should return is ok', () => {
        assert.isOk(countChar('fufufu', 'f'))
    }),
    it('should return is a string', () => {
        assert.isNumber(countChar('fufufu', 'f'))
    }),
    it('should return fufufu has 3 f', () => {
        assert.equal(countChar('fufufu', 'f'), 3)
    })
}) 
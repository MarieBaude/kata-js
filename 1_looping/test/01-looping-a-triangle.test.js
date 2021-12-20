import chai from 'chai'; 
const assert = chai.assert;
import {looping} from '../01-looping-a-triangle.js';

describe('values', () => {
    it('should return #', () => {
        assert.strictEqual(looping()[0], '#');
    })
})

describe('type', () => {
    it('should return string', () => {
        assert.isString(looping()[0]);
    })
})

describe('notANumber', () => {
    it('should return not a number', () => {
        assert.isNotNumber(looping());
    })
})

describe('array', () => {
    it('should return array', () => {
        assert.isArray(looping());
    })
}) 

describe('index', () => {
    it('should return index 3 = 4#', () => {
        assert.lengthOf(looping()[3], 4);
    })
})







import chai from 'chai'; 
import { it } from 'mocha';
const assert = chai.assert;
import {chessBoard} from '../03-chessboard.js';

describe('chessboard', () => {
    it("should return yes it's a string", () => {
        assert.isArray(chessBoard(8));
    }),
    it("should return length is 8", () => {
        assert.lengthOf(chessBoard(8), 8);
    }),
    it('should return is a string', () => {
        assert.isString(chessBoard(8)[0]);
    }),
    it('should return is not a number', () => {
        assert.isNotNumber(chessBoard(8));
    }),
    it('should return is not equal at 4', () => {
        assert.notEqual(chessBoard(8), 4);
    })
})  


import chai from 'chai'; 
const assert = chai.assert;
import {chessBoard} from '../03-chessboard.js';

describe('chessboard', () => {
    it("should return yes it's a string", () => {
        assert.isString(chessBoard());
    })
}) 
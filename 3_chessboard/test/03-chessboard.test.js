const chai = require('chai');
const assert = chai.assert;
const chessBoard = require('../03-chessboard');

describe('chessboard', () => {
    it("should return yes it's a string", () => {
        assert.isString(chessBoard(), 'message');
    })
}) 
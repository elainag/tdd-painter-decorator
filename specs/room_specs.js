const assert = require('assert');
const Room = require('../room');

describe('Room', function () {

    let room;

    beforeEach(function () {
        room = new Room(10);
    });

    it('check area of room', function () {
        const actual = room.area;
        assert.strictEqual(actual, 10)
    });

    it('is the room not painted', function () {
        const actual = room.painted;
        assert.strictEqual(actual, false);
    });

    it('can we paint the room', function () {
        room.canPaint();
        const actual = room.painted;
        assert.strictEqual(actual, true);
    });

});

const assert = require("assert");
const Paint = require("../paint");

describe("Paint", function () {

    let paint;

    beforeEach(function () {
        paint = new Paint(10);
    });

    it("check volume of paint", function () {
        const actual = paint.volume;
        assert.strictEqual(actual, 10);
    });

    it("is the paint empty", function () {
        const actual = paint.empty;
        assert.strictEqual(actual, true);
    });

    it("is the paint reduced", function () {
        paint.removeVolume(5);
        const actual = paint.volume;
        assert.strictEqual(actual, 5);
    })
});
const assert = require("assert");
const Decorator = require("../decorator");
const Paint = require("../paint");

describe("Decorator", function () {

    let decorator;

    beforeEach(function () {
        decorator = new Decorator();
    });

    it("starts with an empty stock", function () {
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    });

    describe("stock", function () {

        it("should")
    })
});
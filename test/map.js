var assert = require("assert"),
    Map = require("../src/map.es6");

/**
 * class map validator
 */
describe('Map', function () {

    /**
     * findFreeNode
     */
    describe('#findFreeNode()', function () {

        it('returns the coords of a free node in the map matrix', function () {
            var map = new Map(32, 32);
            var result = map.findFreeNode();
            console.log(result);
            assert.equal(0, map.matrix[result[0]][result[1]]);
        });

    });

});
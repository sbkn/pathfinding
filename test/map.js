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

    /**
     * getTileType
     */
    describe('#getTileType(x,y)', function () {

        it('returns the correct tiletype of a position', function () {
            var map = new Map(2, 2);
            map.matrix[0][0] = 0;
            map.matrix[1][1] = 1;

            var result = map.getTileType(0, 0);
            console.log(result);
            assert.equal(0, map.matrix[0][0]);

            var result = map.getTileType(1, 1);
            console.log(result);
            assert.equal(1, map.matrix[1][1]);
        });

    });

});
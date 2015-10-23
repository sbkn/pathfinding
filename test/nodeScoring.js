var assert = require("assert"),
    Node = require("../src/node.es6"),
    NodeScoring = require("../src/nodeScoring.es6");

/**
 * class map validator
 */
describe('NodeScoring', function () {

    /**
     * compare
     */
    describe('#compare(a,b)', function () {

        it('compares two nodes and verifies that score a > b', function () {
            var a = new Node(0, 0);
            var b = new Node(0, 0);
            var nodescoring = new NodeScoring(0, 0);
            a.cost = 2;
            b.cost = 1;
            var result = nodescoring.compare(a, b);
            console.log(result);
            assert.equal(1, result);
        });

        it('compares two nodes and verifies that score a < b', function () {
            var a = new Node(0, 0);
            var b = new Node(0, 0);
            var nodescoring = new NodeScoring(0, 0);
            a.cost = 1;
            b.cost = 2;
            var result = nodescoring.compare(a, b);
            console.log(result);
            assert.equal(-1, result);
        });

        it('compares two nodes and verifies that a == null', function () {
            var a = new Node(0, 0);
            var b = null;
            var nodescoring = new NodeScoring(0, 0);
            a.cost = 1;
            var result = nodescoring.compare(a, b);
            console.log(result);
            assert.equal(1, result);
        });

    });

});

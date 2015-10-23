var assert = require("assert"),
    Node = require("../src/node.es6");

/**
 * class map validator
 */
describe('Node', function () {

    /**
     * equals
     */
    describe('#equals(node)', function () {

        it('checks that two equal nodes are found out to be equal', function () {
            var a = new Node(1, 1);
            var b = new Node(1, 1);
            var result = a.equals(b);
            console.log(result);
            assert.ok(result);
        });

        it('checks that two NOT equal nodes are found out to be NOT equal', function () {
            var a = new Node(1, 5);
            var b = new Node(2, 3);
            var result = a.equals(b);
            console.log(result);
            assert.ok(!result);
        });

    });

});

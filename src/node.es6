export default class Node {
    constructor(x, y) {
        this.posX = x;
        this.posY = y;
        /**
         * Cost represents the costs of
         * the best known path to this node:
         * @type {number}
         */
        this.cost = 0;
        // TODO: find out how to init values like this one, mb undefined?
        this.parent = null;
    }


    /**
     * CHECKING WHETHER TWO NODES HAVE EQUAL X,Y COORDS
     * @param node
     * @returns {boolean}
     */
    equals(node) {
        return (node.posX == this.posX && node.posY == this.posY);
    }
}
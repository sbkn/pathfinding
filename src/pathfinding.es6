import Node from "./node.es6";
import Route from "./route.es6";
import NodeScoring from "./nodeScoring.es6";


export default class Pathfinding {
    /**
     * This is the Astar algorithm
     * @param map
     * @param unit
     */
    constructor(map, unit) {
        this.map = map;
        this.unit = unit;

        /**    NO_DIAG_MOV OVERRIDES HALF_DIAG_MOV !!    */

        /**
         BY TURNING THIS ON (=TRUE) YOU TELL ASTAR
         TO SKIP DIAGONALLY ADJACENT NODES WHEN EXPANDING:
         */
        this.NO_DIAG_MOV = false;
        /**
         *    Is half-diagonal movement valid ?
         *    (This means you can move diagonally,
         *    but only if there is no obstacle at
         *    the adjacent tiles):
         */
        this.HALF_DIAG_MOV = true;
        /**    What is the index in map[][] for
         *  obstacle ?:
         */
        this.INDEX_FOR_OBSTACLE = 1;

        // Boot up the nodeScoring
        // TODO this seems very not elegant
        this.nodeScoring = new NodeScoring(0, 0);
    }

    findPath(unit) {
        /**
         * The open list (Nodes yet to check),
         * this list is always sorted according to the
         * score of its nodes:
         */
        let openList = [];

        /**
         * The closed list (Nodes already checked):
         */
        let closedList = [];

        this.nodeScoring.posFinishX = unit.route.finish.posX;
        this.nodeScoring.posFinishY = unit.route.finish.posY;

        let done = false;
        let cumCostPath = -1;
        let iteCnt = 0;
        let tmpCost = 0;
        let tmp = null;

        //	The node which is currently being processed:
        let curNode = unit.route.start;

        let i, j;

        /**
         *    MAIN LOOP:
         */
        while (!done) {
            /**    If we've reached the destination:    */
            if (curNode.equals(unit.route.finish)) {
                done = true;
                cumCostPath = curNode.cost;

                unit.route.Steps.push(curNode);
                tmp = curNode;
                while (tmp.parent != null) {
                    unit.route.Steps.push(tmp.parent);
                    tmp = tmp.parent;
                }
                unit.route.Steps.reverse();
                unit.route.routeActive = true;
            }
            /**    If not yet:    */
            else {
                /**    EXPAND THE CURRENT NODE:    */
                for (i = -1; i < 2; i++) {
                    for (j = -1; j < 2; j++) {
                        /**    Current node is already expanded:    */
                        if (i == 0 && j == 0) {
                            continue;
                        }
                        /**    If we're out of bounds:    */
                        if (curNode.posX + i < 0 || curNode.posX + i >= this.map.width || curNode.posY + j < 0 || curNode.posY + j >= this.map.height) {
                            continue;
                        }
                        /**    If it's an obstacle:    */
                        //if (this.map.getTileType(curNode.posY + j, curNode.posX + i) == this.INDEX_FOR_OBSTACLE) {
                        if (this.map.getTileType(curNode.posX + i, curNode.posY + j) == this.INDEX_FOR_OBSTACLE) {
                            continue;
                        }
                        /**    Is this neighbor already done with ?:    */
                        if (closedList != null) {
                            tmp = closedList.find(a => (a.posX == curNode.posX + i && a.posY == curNode.posY + j));
                            if (tmp != null) {
                                tmp = null;
                                continue;
                            }
                        }

                        /**    Skip diagonally adjacent nodes IF NO_DIAG_MOV == true:    */
                        if (i != 0 && j != 0 && this.NO_DIAG_MOV) {
                            continue;
                        }
                        /**    THIS IS FOR PSEUDO-NO_DIAG_MOV
                         YOU SHALL NOT MOVE DIAGONALLY IF
                         AN OBSTACLE IS ADJACENT TO current_node
                         AND THIS NODE:
                         */
                        if (i != 0 && j != 0 && this.HALF_DIAG_MOV) {
                            //if (this.map.getTileType(curNode.posY, curNode.posX + i) == this.INDEX_FOR_OBSTACLE)
                            if (this.map.getTileType(curNode.posX + i, curNode.posY) == this.INDEX_FOR_OBSTACLE)
                                continue;
                            //if (this.map.getTileType(curNode.posY + j,curNode.posX ) == this.INDEX_FOR_OBSTACLE)
                            if (this.map.getTileType(curNode.posX, curNode.posY + j) == this.INDEX_FOR_OBSTACLE)
                                continue;
                        }
                        /** Check whether this neighbor is already on the open list,
                         *  if yes - update its costs accordingly:
                         */
                        if (openList != null) {
                            tmp = openList.find(a => (a.posX == curNode.posX + i && a.posY == curNode.posY + j));
                        }

                        if (openList != null && tmp != null) {
                            /** checking for diagonal vs (horizontal / vertical step): */
                            if (i != 0 && j != 0) {
                                /**    Is curNode the better predecessor
                                 *  than what we have atm ?:
                                 */
                                if (tmp.cost > curNode.cost + 14) {
                                    tmp.cost = curNode.cost + 14;
                                    tmp.parent = curNode;
                                }
                            }
                            else {
                                if (tmp.cost > curNode.cost + 10) {
                                    tmp.cost = curNode.cost + 10;
                                    tmp.parent = curNode;
                                }
                            }

                        }
                        /** tmp is neither on the openList nor on the closedList
                         *  so we gotta add it to the open list:
                         */
                        else {
                            if (i != 0 && j != 0) {
                                tmpCost = curNode.cost + 14;
                            }
                            else {
                                tmpCost = curNode.cost + 10;
                            }
                            tmp = new Node(curNode.posX + i, curNode.posY + j, tmpCost);
                            tmp.parent = curNode;
                            if (openList == null) {
                                openList = [];
                            }
                            openList.push(tmp);
                            //openList.sort(this.nodeScoring.compare);
                            //openList.sort(function() { this.nodeScoring.compare(); });
                            // TODO: find out why this works and what exactly it does D:
                            openList.sort(() => {
                                this.nodeScoring.compare();
                            });
                        }


                    }
                }

                /**    ADD curNode TO THE closedList:    */
                if (closedList == null) {
                    closedList = [];
                }
                closedList.push(curNode);
                /**    REMOVE curNode FROM THE openList:    */
                //openList.Remove(curNode); THERE IS NO REMOVE IN JS
                let index = openList.indexOf(curNode);
                if (index > -1) {
                    openList.splice(index, 1);
                }

                /** PATH SCORING: */

                /**
                 * F = G + H,
                 *
                 * where F is the score, G the cost to move from starting point to the given point on the grid
                 * and H the approximate cost to reach the destination ( f.e. Manhattan distance )
                 */

                /** if openList is empty, there are no open nodes left, even though destination is not reached yet:    */
                if (openList.length == 0) {
                    unit.route.Steps = null;
                    unit.route.finish = null;
                    unit.route.routeActive = false;
                    done = true;
                }
                else {
                    curNode = openList[0];
                }
                iteCnt++;
            }
        }

    }
}
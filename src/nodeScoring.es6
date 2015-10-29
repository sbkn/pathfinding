export default class NodeScoring {
    constructor(pos_finish_x, pos_finish_y) {
        this.posFinishX = pos_finish_x;
        this.posFinishY = pos_finish_y;

        console.log("NodeScoring init done.");
    }

    /**
     * THIS COMPARES NODES USING MANHATTAN DISTANCE,
     * THE LOWER THE SCORE, THE BETTER.
     * THUS:
     * a_score <= b_score  ----> 1,
     * a_score > b_score  ----> -1
     */
    compareManhattan(a, b) {
        if (a == null || b == null) {
            return 1;
        }
        /**
         * F = G + H,
         *
         * where F is the score, G the cost to move from starting point to the given point on the grid
         * and H the approximate cost to reach the destination:
         */
        let score_a = a.cost + Math.abs(this.posFinishX - a.posX) + Math.abs(this.posFinishY - a.posY);
        let score_b = b.cost + Math.abs(this.posFinishX - b.posX) + Math.abs(this.posFinishY - b.posY);

        score_a += (-6) * Math.min(Math.abs(this.posFinishX - a.posX), Math.abs(this.posFinishY - a.posY));
        score_b += (-6) * Math.min(Math.abs(this.posFinishX - b.posX), Math.abs(this.posFinishY - b.posY));

        if (score_a > score_b) {
            return 1;
        }
        else if (score_a < score_b) {
            return -1;
        } else {
            return 0;
        }
    }
}
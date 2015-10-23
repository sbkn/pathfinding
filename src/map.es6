export default class Map {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.matrix = [];

        // fill matrix with zeroes
        var i, j;
        for (i = 0; i < this.width; i++) {
            this.matrix[i] = [];
            for (j = 0; j < this.height; j++) {
                this.matrix[i][j] = 0;
            }
        }
        // put some random 1's in it
        for (i = 0; i < this.width; i++) {
            for (j = 0; j < this.height; j++) {
                if (Math.random() >= 0.5) {
                    this.matrix[i][j] = 1;
                }
            }
        }
        // do cellular automata
        for (i = 0; i < 5; i++) {
            this.cellularAutomata(this.matrix);
        }
    }

    // do the game of life !
    cellularAutomata(matrix) {
        var cnt;
        var x, y;
        for (var i = 0; i < this.width; i++) {
            for (var j = 0; j < this.height; j++) {
                if (matrix[i][j] == 1) {
                    cnt = 0;
                    for (x = -1; x <= 1; x++) {
                        for (y = -1; y <= 1; y++) {
                            if (x == 0 && y == 0) {
                                continue;
                            }
                            if (i + x < 0 || i + x >= this.width || j + y < 0 || j + y >= this.height) {
                                continue;
                            }
                            if (matrix[i + x][j + y] == 1) {
                                cnt++;
                            }
                        }
                    }
                    if (cnt < 4) {
                        matrix[i][j] = 0;
                    }
                } else {
                    cnt = 0;
                    for (x = -1; x <= 1; x++) {
                        for (y = -1; y <= 1; y++) {
                            if (x == 0 && y == 0) {
                                continue;
                            }
                            if (i + x < 0 || i + x >= this.width || j + y < 0 || j + y >= this.height) {
                                continue;
                            }
                            if (matrix[i + x][j + y] == 1) {
                                cnt++;
                            }
                        }
                    }
                    if (cnt >= 5) {
                        matrix[i][j] = 1;
                    }
                }
            }
        }
    }

    // find a free node (==0) in the matrix
    findFreeNode() {
        var i, x, y;
        // TODO: this is kinda hacky, because it may fail
        for (i = 0; i < this.width * this.height; i++) {
            x = this.getRandomInt(0, this.width - 1);
            y = this.getRandomInt(0, this.height - 1);
            if (this.matrix[x][y] == 0) {
                return [x, y];
            }
        }
        throw new Error("noFreeNodeFound");
    }

    // get a random integer
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * return the index of a tile (=node)
     * should be 1 if obstacle and 0 if not
     * throws if out of bounds
     */
    getTileType(x, y) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height)
            throw new Error("cantGetTileType-OUTOFBOUNDS");
        return this.matrix[x][y];
    }

}
export default class Map {
    constructor() {
        this.matrix = [];
        console.log("Initial matrix:");
        for (var i = 0; i < 25; i++) {
            this.matrix[i] = [];
            for (var j = 0; j < 25; j++) {
                this.matrix[i][j] = 0;
            }
        }
        //this.randomInteger = this.getRandomInt(0, 25);
        console.log("Randomized matrix:");
        for (var i = 0; i < 25; i++) {
            for (var j = 0; j < 25; j++) {
                if (Math.random() >= 0.55) {
                    this.matrix[i][j] = 1;
                }
            }
        }
        for (var i = 0; i < 5; i++) {
            this.cellularAutomata(this.matrix);
        }
    }

    cellularAutomata(matrix) {
        var cnt;
        var x, y;
        for (var i = 0; i < 25; i++) {
            for (var j = 0; j < 25; j++) {
                if (matrix[i][j] == 1) {
                    cnt = 0;
                    for (x = -1; x <= 1; x++) {
                        for (y = -1; y <= 1; y++) {
                            if (x == 0 && y == 0) {
                                continue;
                            }
                            if (i + x < 0 || i + x >= 25 || j + y < 0 || j + y >= 25) {
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
                            if (i + x < 0 || i + x >= 25 || j + y < 0 || j + y >= 25) {
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

    findSpawnLocation(map) {
        var i, x, y;
        //TODO: TOP LEL
        for (i = 0; i < 100; i++) {
            x = this.getRandomInt(0, 24);
            y = this.getRandomInt(0, 24);
            if (map[x][y] == 0) {
                return [x, y];
            }
        }
        return [0, 0];
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
export default class Draw {
    constructor() {
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");
        console.log("Draw init done.");
    }

    drawGrid() {
        let x;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // draw vertical lines:
        for (x = 0; x <= this.canvas.width; x += 32) {
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
        }

        // draw horizontal lines:
        for (x = 0; x <= this.canvas.height; x += 32) {
            this.ctx.moveTo(0, x);
            this.ctx.lineTo(this.canvas.width, x);
        }

        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
    }

    drawObstacles(map) {
        for (var i = 0; i < 25; i++) {
            for (var j = 0; j < 25; j++) {
                if (map[i][j] == 0) {
                    this.ctx.beginPath();
                    this.ctx.fillStyle = 'red';
                    this.ctx.fillRect(i * 32 - 16, j * 32 - 16, i * 32 + 16, j * 32 + 16);
                }
            }
        }
    }

}
export default class Draw {

    init() {
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.drawGrid();

        console.log("Draw init done.");
    }

    drawGrid() {
        let x;

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

}
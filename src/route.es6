import Node from "./node.es6";

export default class Route {
    constructor() {
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");

        this.Steps = [];
        this.start = new Node();
        this.finish = new Node();
    }

    // draw it on the canvas
    drawAll() {
        for (var i = 0; i < this.Steps.length; i++) {
            this.draw(this.Steps[i]);
        }
    }

    draw(element) {
        this.ctx.beginPath();
        this.ctx.arc(element.posX * 32 + 16, element.posY * 32 + 16, 12, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = '#e8d361';
        this.ctx.fill();
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = '#003300';
        this.ctx.stroke();
    }
}
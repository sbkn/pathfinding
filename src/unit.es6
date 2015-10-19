export default class Unit {
    constructor(x,y){
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");

        // place the unit at the right position
        // TODO: DO NOT HARDCODE THE GRID SIZE!
        this.x = x*32-16;
        this.y = y*32-16;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 16, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'green';
        this.ctx.fill();
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = '#003300';
        this.ctx.stroke();
    }
}
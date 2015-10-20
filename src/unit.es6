export default class Unit {
    constructor(map) {
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");

        // place the unit at the right position
        var spawnLocation = map.findFreeNode();
        this.x = spawnLocation[0];
        this.y = spawnLocation[1];

        this.ms = 1;

        this.destX = this.canvas.width / 32 - this.x;
        this.destY = this.canvas.height / 32 - this.y;

        console.log(this.x, this.y, this.destX, this.destY);
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x * 32 + 16, this.y * 32 + 16, 16, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = '#ff0000';
        this.ctx.fill();
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = '#003300';
        this.ctx.stroke();
    }

    move() {
        let dirX = 0;
        let dirY = 0;

        if (this.destX == this.x) {
            dirX = 0;
            this.destX = this.canvas.width / 32 - this.x;
        } else {
            this.destX - this.x < 0 ? dirX = -1 : dirX = 1;
        }
        if (this.destY == this.y) {
            dirY = 0;
            this.destY = this.canvas.width / 32 - this.y;
        } else {
            this.destY - this.y < 0 ? dirY = -1 : dirY = 1;
        }


        this.x = this.x + dirX * this.ms;
        this.y = this.y + dirY * this.ms;

        //console.log(this.x, this.y);

    }
}
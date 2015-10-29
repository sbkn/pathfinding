import Node from "./node.es6";
import Route from "./route.es6";

export default class Unit {
    constructor(map) {
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");

        // place the unit at the right position
        try {
            /*let spawnLocation = map.findFreeNode();
            this.x = spawnLocation[0];
             this.y = spawnLocation[1];*/
            this.x = 0;
            this.y = 0;
        } catch (e) {
            console.log("NO SPAWN POSITION FOUND FOR UNIT!");
            this.x = -1;
            this.y = -1;
        }

        // movement speed
        this.ms = 1;

        // random destination
        try {
            /*let destLocation = map.findFreeNode();
            this.destX = destLocation[0];
             this.destY = destLocation[1];*/
            this.destX = 3;
            this.destY = 0;
        } catch (e) {
            console.log("NO DEST POSITION FOUND FOR UNIT!");
            this.destX = -1;
            this.destY = -1;
        }

        // Give it a dummy route
        this.route = new Route();
        this.route.start.posX = this.x;
        this.route.start.posY = this.y;
        this.route.finish.posX = this.destX;
        this.route.finish.posY = this.destY;

        console.log("Unit init done.");
    }

    // draw it on the canvas
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x * 32 + 16, this.y * 32 + 16, 12, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = '#14820d';
        this.ctx.fill();
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = '#003300';
        this.ctx.stroke();

        //TODO This is experimental:
        if (!(this.x == this.destX && this.y == this.destY)) {
            this.ctx.beginPath();
            this.ctx.arc(this.destX * 32 + 16, this.destY * 32 + 16, 12, 0, 2 * Math.PI, false);
            this.ctx.fillStyle = '#ff0000';
            this.ctx.fill();
            this.ctx.lineWidth = 2;
            this.ctx.strokeStyle = '#003300';
            this.ctx.stroke();
        }
    }

    // move it along its path
    // TODO: implement actually useful movement, as in walking along the route
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
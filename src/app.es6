import Init from "./init.es6";
import Draw from "./draw.es6";
import Unit from "./unit.es6";
import Map from "./map.es6";
import Input from "./input.es6";
import Route from "./route.es6";
import Pathfinding from "./pathfinding.es6";


export default class App {

    /**
     * Empty for now
     * @constructor App
     */
    constructor() {
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");

        new Init();
        this.map = new Map(this.canvas.width / 32, this.canvas.height / 32);
        new Input();
        this.draw = new Draw();
        this.unit = new Unit(this.map);
        this.pathfinder = new Pathfinding(this.map, this.unit);

        this.pathfinder.findPath(this.unit);

    }

    /**
     * Run it!
     */
    run() {
        this.drawingLoop();
    }

    drawingLoop() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.draw.drawObstacles(this.map.matrix);
        this.draw.drawGrid();
        //this.unit.move();
        this.unit.draw();
        this.unit.route.drawAll();

        requestAnimationFrame(() => {
            this.drawingLoop();
        });
    }
}

new App().run();
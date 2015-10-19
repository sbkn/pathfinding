import Init from "./init.es6";
import Draw from "./draw.es6";
import Unit from "./unit.es6";
import Map from "./map.es6";

export default class App {

    /**
     * Empty for now
     * @constructor App
     */
    constructor() {
        new Init();
        this.map = new Map();
        this.draw = new Draw();
        this.unit = new Unit(8, 8);
    }

    /**
     * Run it!
     */
    run() {
        this.drawingLoop();
    }

    drawingLoop() {
        this.draw.drawObstacles(this.map.matrix);
        this.draw.drawGrid();
        this.unit.draw();
        //requestAnimationFrame(this.drawingLoop);
        requestAnimationFrame(() => {
            this.drawingLoop();
        });
    }
}

new App().run();
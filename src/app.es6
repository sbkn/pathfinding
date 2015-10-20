import Init from "./init.es6";
import Draw from "./draw.es6";
import Unit from "./unit.es6";
import Map from "./map.es6";
import Input from "./input.es6";

export default class App {

    /**
     * Empty for now
     * @constructor App
     */
    constructor() {
        this.canvas = document.getElementById("gameCanvas");
        new Init();
        this.map = new Map(this.canvas.width / 32, this.canvas.height / 32);
        new Input();
        // TODO: make the findSpawnLocation func a Unit method aka let him find a spawn pt on himself
        var spawnLocation = this.map.findFreeNode(this.map.matrix);
        this.draw = new Draw();
        this.unit = new Unit(spawnLocation[0], spawnLocation[1]);
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

        requestAnimationFrame(() => {
            this.drawingLoop();
        });
    }
}

new App().run();
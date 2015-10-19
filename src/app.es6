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
        var spawnLocation = this.map.findSpawnLocation(this.map.matrix);
        console.log("Spawn Loc:");
        console.log(spawnLocation);
        console.log(this.map.matrix[spawnLocation[0]][spawnLocation[1]]);
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
import Init from "./init.es6";
import Draw from "./draw.es6";
import Unit from "./unit.es6";

export default class App {

    /**
     * Empty for now
     * @constructor App
     */
    constructor() {

    }

    /**
     * Run it!
     */
    run() {
        new Init().init();
        new Draw().init();

        var unit = new Unit(8,8);
        unit.draw();
    }
}

new App().run();
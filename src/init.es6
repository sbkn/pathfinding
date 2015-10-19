export default class Init {
    constructor() {
        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");

        this.resizeCanvas();
        window.addEventListener('resize', this.resizeCanvas, false);

        console.log("Init done.");
    }

    /**
     * Resize the canvas when needed:
     */
    resizeCanvas() {
        window.innerWidth <= 800 ? document.getElementById("gameCanvas").width = window.innerWidth : document.getElementById("gameCanvas").width = 800;
        window.innerHeight <= 640 ? document.getElementById("gameCanvas").height = window.innerHeight : document.getElementById("gameCanvas").height = 640;
    }

}
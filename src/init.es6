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
        window.innerWidth <= 800 ? this.canvas.width = window.innerWidth : this.canvas.width = 800;
        window.innerHeight <= 640 ? this.canvas.height = window.innerHeight : this.canvas.height = 640;
    }

}
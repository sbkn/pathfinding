export default class Input {
    constructor() {
        this.canvas = document.getElementById("gameCanvas");
        this.canvas.addEventListener("click", this.clickHandler, false);

        this.clickX = 0;
        this.clickY = 0;
    }

    clickHandler(e) {
        this.clickX = e.pageX - (window.innerWidth - document.getElementById("gameCanvas").width) / 2;
        this.clickY = e.pageY;
        console.log(this.clickX, this.clickY);
    }
}
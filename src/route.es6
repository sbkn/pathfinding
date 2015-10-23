import Node from "./node.es6";

export default class Route {
    constructor() {
        this.Steps = [];
        this.start = new Node();
        this.finish = new Node();
    }
}
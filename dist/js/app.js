/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _initEs6 = __webpack_require__(1);

	var _initEs62 = _interopRequireDefault(_initEs6);

	var _drawEs6 = __webpack_require__(2);

	var _drawEs62 = _interopRequireDefault(_drawEs6);

	var _unitEs6 = __webpack_require__(3);

	var _unitEs62 = _interopRequireDefault(_unitEs6);

	var _mapEs6 = __webpack_require__(6);

	var _mapEs62 = _interopRequireDefault(_mapEs6);

	var _inputEs6 = __webpack_require__(7);

	var _inputEs62 = _interopRequireDefault(_inputEs6);

	var _routeEs6 = __webpack_require__(5);

	var _routeEs62 = _interopRequireDefault(_routeEs6);

	var _pathfindingEs6 = __webpack_require__(8);

	var _pathfindingEs62 = _interopRequireDefault(_pathfindingEs6);

	var App = (function () {

	    /**
	     * Empty for now
	     * @constructor App
	     */

	    function App() {
	        _classCallCheck(this, App);

			// TODO: how to handle canvas/ctx reference efficiently?
	        this.canvas = document.getElementById("gameCanvas");
	        this.ctx = this.canvas.getContext("2d");

	        new _initEs62["default"]();
	        this.map = new _mapEs62["default"](this.canvas.width / 32, this.canvas.height / 32);
	        new _inputEs62["default"]();
	        this.draw = new _drawEs62["default"]();
	        this.unit = new _unitEs62["default"](this.map);
	        this.pathfinder = new _pathfindingEs62["default"](this.map, this.unit);

	        this.pathfinder.findPath(this.unit);

			console.log("App init done.");
	    }

	    /**
	     * Run it!
	     */

	    _createClass(App, [{
	        key: "run",
	        value: function run() {
	            this.drawingLoop();
	        }
	    }, {
	        key: "drawingLoop",
	        value: function drawingLoop() {
	            var _this = this;

	            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

				this.pathfinder.drawClosedList();

	            this.draw.drawObstacles(this.map.matrix);
	            this.draw.drawGrid();
	            //this.unit.move();
				this.unit.route.draw();
	            this.unit.draw();

	            requestAnimationFrame(function () {
	                _this.drawingLoop();
	            });
	        }
	    }]);

	    return App;
	})();

	exports["default"] = App;

	new App().run();
	module.exports = exports["default"];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Init = (function () {
	    function Init() {
	        _classCallCheck(this, Init);

	        this.canvas = document.getElementById("gameCanvas");
	        this.ctx = this.canvas.getContext("2d");

	        this.resizeCanvas();
	        window.addEventListener('resize', this.resizeCanvas, false);

	        console.log("Init done.");
	    }

	    /**
	     * Resize the canvas when needed:
	     */

	    _createClass(Init, [{
	        key: "resizeCanvas",
	        value: function resizeCanvas() {
	            window.innerWidth <= 800 ? document.getElementById("gameCanvas").width = window.innerWidth : document.getElementById("gameCanvas").width = 800;
	            window.innerHeight <= 640 ? document.getElementById("gameCanvas").height = window.innerHeight : document.getElementById("gameCanvas").height = 640;
	        }
	    }]);

	    return Init;
	})();

	exports["default"] = Init;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Draw = (function () {
	    function Draw() {
	        _classCallCheck(this, Draw);

	        this.canvas = document.getElementById("gameCanvas");
	        this.ctx = this.canvas.getContext("2d");
	        console.log("Draw init done.");
	    }

	    _createClass(Draw, [{
	        key: "drawGrid",
	        value: function drawGrid() {
	            var x = undefined;
				// drawStep vertical lines:
	            for (x = 0; x <= this.canvas.width; x += 32) {
	                this.ctx.moveTo(x, 0);
	                this.ctx.lineTo(x, this.canvas.height);
	            }

				// drawStep horizontal lines:
	            for (x = 0; x <= this.canvas.height; x += 32) {
	                this.ctx.moveTo(0, x);
	                this.ctx.lineTo(this.canvas.width, x);
	            }

	            this.ctx.strokeStyle = "black";
	            this.ctx.stroke();
	        }
	    }, {
	        key: "drawObstacles",
	        value: function drawObstacles(map) {
	            for (var i = 0; i < 25; i++) {
	                for (var j = 0; j < 25; j++) {
	                    if (map[i][j] == 1) {
	                        this.ctx.fillStyle = '#6d6359';
	                        this.ctx.fillRect(i * 32, j * 32, 32, 32);
	                    }
	                }
	            }
	        }
	    }]);

	    return Draw;
	})();

	exports["default"] = Draw;
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _nodeEs6 = __webpack_require__(4);

	var _nodeEs62 = _interopRequireDefault(_nodeEs6);

	var _routeEs6 = __webpack_require__(5);

	var _routeEs62 = _interopRequireDefault(_routeEs6);

	var Unit = (function () {
	    function Unit(map) {
	        _classCallCheck(this, Unit);

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
	        this.route = new _routeEs62["default"]();
	        this.route.start.posX = this.x;
	        this.route.start.posY = this.y;
	        this.route.finish.posX = this.destX;
	        this.route.finish.posY = this.destY;

			console.log("Unit init done.");
	    }

		// draw it on the canvas

	    _createClass(Unit, [{
	        key: "draw",
	        value: function draw() {
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
	    }, {
	        key: "move",
	        value: function move() {
	            var dirX = 0;
	            var dirY = 0;

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
	    }]);

	    return Unit;
	})();

	exports["default"] = Unit;
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Node = (function () {
	    function Node(x, y) {
	        _classCallCheck(this, Node);

	        this.posX = x;
	        this.posY = y;
	        /**
	         * Cost represents the costs of
	         * the best known path to this node:
	         * @type {number}
	         */
	        this.cost = 0;
	        // TODO: find out how to init values like this one, mb undefined?
	        this.parent = null;
	    }

	    /**
	     * CHECKING WHETHER TWO NODES HAVE EQUAL X,Y COORDS
	     * @param node
	     * @returns {boolean}
	     */

	    _createClass(Node, [{
	        key: "equals",
	        value: function equals(node) {
	            return node.posX == this.posX && node.posY == this.posY;
	        }
	    }]);

	    return Node;
	})();

	exports["default"] = Node;
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

		var _createClass = (function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					if ("value" in descriptor) descriptor.writable = true;
					Object.defineProperty(target, descriptor.key, descriptor);
				}
			}

			return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);
				if (staticProps) defineProperties(Constructor, staticProps);
				return Constructor;
			};
		})();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _nodeEs6 = __webpack_require__(4);

	var _nodeEs62 = _interopRequireDefault(_nodeEs6);

		var Route = (function () {
			function Route() {
				_classCallCheck(this, Route);

				this.canvas = document.getElementById("gameCanvas");
				this.ctx = this.canvas.getContext("2d");

				this.Steps = [];
				this.start = new _nodeEs62["default"]();
				this.finish = new _nodeEs62["default"]();

				console.log("Route init done.");
			}

			// draw it on the canvas

			_createClass(Route, [{
				key: "draw",
				value: function draw() {
					if (this.Steps != null) {
						for (var i = 0; i < this.Steps.length; i++) {
							this.drawStep(this.Steps[i]);
						}
					}
				}
			}, {
				key: "drawStep",
				value: function drawStep(element) {
					this.ctx.beginPath();
					this.ctx.arc(element.posX * 32 + 16, element.posY * 32 + 16, 8, 0, 2 * Math.PI, false);
					this.ctx.fillStyle = '#e8d361';
					this.ctx.fill();
					this.ctx.lineWidth = 2;
					this.ctx.strokeStyle = '#003300';
					this.ctx.stroke();
				}
			}]);

			return Route;
		})();

	exports["default"] = Route;
	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Map = (function () {
	    function Map(width, height) {
	        _classCallCheck(this, Map);

	        this.width = width;
	        this.height = height;
	        this.matrix = [];

	        // fill matrix with zeroes
	        var i, j;
	        for (i = 0; i < this.width; i++) {
	            this.matrix[i] = [];
	            for (j = 0; j < this.height; j++) {
	                this.matrix[i][j] = 0;
	            }
	        }
	        // put some random 1's in it
	        for (i = 0; i < this.width; i++) {
	            for (j = 0; j < this.height; j++) {
	                if (Math.random() >= 0.5) {
	                    this.matrix[i][j] = 1;
	                }
	            }
	        }
	        // do cellular automata
	        for (i = 0; i < 5; i++) {
	            this.cellularAutomata(this.matrix);
	        }
			console.log("Map init done.");
	    }

	    // do the game of life !

	    _createClass(Map, [{
	        key: "cellularAutomata",
	        value: function cellularAutomata(matrix) {
	            var cnt;
	            var x, y;
	            for (var i = 0; i < this.width; i++) {
	                for (var j = 0; j < this.height; j++) {
	                    if (matrix[i][j] == 1) {
	                        cnt = 0;
	                        for (x = -1; x <= 1; x++) {
	                            for (y = -1; y <= 1; y++) {
	                                if (x == 0 && y == 0) {
	                                    continue;
	                                }
	                                if (i + x < 0 || i + x >= this.width || j + y < 0 || j + y >= this.height) {
	                                    continue;
	                                }
	                                if (matrix[i + x][j + y] == 1) {
	                                    cnt++;
	                                }
	                            }
	                        }
	                        if (cnt < 4) {
	                            matrix[i][j] = 0;
	                        }
	                    } else {
	                        cnt = 0;
	                        for (x = -1; x <= 1; x++) {
	                            for (y = -1; y <= 1; y++) {
	                                if (x == 0 && y == 0) {
	                                    continue;
	                                }
	                                if (i + x < 0 || i + x >= this.width || j + y < 0 || j + y >= this.height) {
	                                    continue;
	                                }
	                                if (matrix[i + x][j + y] == 1) {
	                                    cnt++;
	                                }
	                            }
	                        }
	                        if (cnt >= 5) {
	                            matrix[i][j] = 1;
	                        }
	                    }
	                }
	            }
	        }

	        // find a free node (==0) in the matrix
	    }, {
	        key: "findFreeNode",
	        value: function findFreeNode() {
	            var i, x, y;
	            // TODO: this is kinda hacky, because it may fail
	            for (i = 0; i < this.width * this.height; i++) {
	                x = this.getRandomInt(0, this.width - 1);
	                y = this.getRandomInt(0, this.height - 1);
	                if (this.matrix[x][y] == 0) {
	                    return [x, y];
	                }
	            }
	            throw new Error("noFreeNodeFound");
	        }

	        // get a random integer
	    }, {
	        key: "getRandomInt",
	        value: function getRandomInt(min, max) {
	            return Math.floor(Math.random() * (max - min + 1)) + min;
	        }

	        /**
	         * return the index of a tile (=node)
	         * should be 1 if obstacle and 0 if not
	         * throws if out of bounds
	         */
	    }, {
	        key: "getTileType",
	        value: function getTileType(x, y) {
	            if (x < 0 || x >= this.width || y < 0 || y >= this.height) throw new Error("cantGetTileType-OUTOFBOUNDS");
	            return this.matrix[x][y];
	        }
	    }]);

	    return Map;
	})();

	exports["default"] = Map;
	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Input = (function () {
	    function Input() {
	        _classCallCheck(this, Input);

	        this.canvas = document.getElementById("gameCanvas");
	        this.canvas.addEventListener("click", this.clickHandler, false);

	        this.clickX = 0;
	        this.clickY = 0;
	    }

	    _createClass(Input, [{
	        key: "clickHandler",
	        value: function clickHandler(e) {
	            this.clickX = e.pageX - (window.innerWidth - document.getElementById("gameCanvas").width) / 2;
	            this.clickY = e.pageY;
	            //console.log(this.clickX, this.clickY);
	        }
	    }]);

	    return Input;
	})();

	exports["default"] = Input;
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _nodeEs6 = __webpack_require__(4);

	var _nodeEs62 = _interopRequireDefault(_nodeEs6);

	var _routeEs6 = __webpack_require__(5);

	var _routeEs62 = _interopRequireDefault(_routeEs6);

	var _nodeScoringEs6 = __webpack_require__(9);

	var _nodeScoringEs62 = _interopRequireDefault(_nodeScoringEs6);

	var Pathfinding = (function () {
	    function Pathfinding(map, unit) {
	        _classCallCheck(this, Pathfinding);

			this.canvas = document.getElementById("gameCanvas");
			this.ctx = this.canvas.getContext("2d");

	        this.map = map;
	        this.unit = unit;

	        /**    NO_DIAG_MOV OVERRIDES HALF_DIAG_MOV !!    */

	        /**
	         BY TURNING THIS ON (=TRUE) YOU TELL ASTAR
	         TO SKIP DIAGONALLY ADJACENT NODES WHEN EXPANDING:
	         */
	        this.NO_DIAG_MOV = false;
	        /**
	         *    Is half-diagonal movement valid ?
	         *    (This means you can move diagonally,
	         *    but only if there is no obstacle at
	         *    the adjacent tiles):
	         */
	        this.HALF_DIAG_MOV = true;
	        /**    What is the index in map[][] for
	         *  obstacle ?:
	         */
	        this.INDEX_FOR_OBSTACLE = 1;

	        // Boot up the nodeScoring
			// TODO this seems very not elegant
			this.nodeScoring = new _nodeScoringEs62["default"](0, 0);

			this.closedList = [];

			console.log("Pathfinding init done.");
	    }

		/**
		 * This is the Astar algorithm
		 * @param unit
		 */

	    _createClass(Pathfinding, [{
	        key: "findPath",
	        value: function findPath(unit) {
				var _this = this;

	            /**
	             * The open list (Nodes yet to check),
	             * this list is always sorted according to the
	             * score of its nodes:
	             */
	            var openList = [];

	            /**
	             * The closed list (Nodes already checked):
	             */
				this.closedList = [];

	            this.nodeScoring.posFinishX = unit.route.finish.posX;
	            this.nodeScoring.posFinishY = unit.route.finish.posY;

	            var done = false;
	            var cumCostPath = -1;
	            var iteCnt = 0;
	            var tmpCost = 0;
	            var tmp = null;

	            //	The node which is currently being processed:
	            var curNode = unit.route.start;

	            var i = undefined,
	                j = undefined;

	            /**
	             *    MAIN LOOP:
	             */
	            while (!done) {
	                /**    If we've reached the destination:    */
	                if (curNode.equals(unit.route.finish)) {
	                    done = true;
	                    cumCostPath = curNode.cost;

	                    unit.route.Steps.push(curNode);
	                    tmp = curNode;
	                    while (tmp.parent != null) {
	                        unit.route.Steps.push(tmp.parent);
	                        tmp = tmp.parent;
	                    }
	                    unit.route.Steps.reverse();
	                    unit.route.routeActive = true;
	                }
	                /**    If not yet:    */
	                else {
	                        /**    EXPAND THE CURRENT NODE:    */
	                        for (i = -1; i < 2; i++) {
	                            for (j = -1; j < 2; j++) {
	                                /**    Current node is already expanded:    */
	                                if (i == 0 && j == 0) {
	                                    continue;
	                                }
	                                /**    If we're out of bounds:    */
	                                if (curNode.posX + i < 0 || curNode.posX + i >= this.map.width || curNode.posY + j < 0 || curNode.posY + j >= this.map.height) {
	                                    continue;
	                                }
	                                /**    If it's an obstacle:    */
	                                //if (this.map.getTileType(curNode.posY + j, curNode.posX + i) == this.INDEX_FOR_OBSTACLE) {
	                                if (this.map.getTileType(curNode.posX + i, curNode.posY + j) == this.INDEX_FOR_OBSTACLE) {
	                                    continue;
	                                }
	                                /**    Is this neighbor already done with ?:    */
									if (this.closedList != null) {
										tmp = this.closedList.find(function (a) {
	                                        return a.posX == curNode.posX + i && a.posY == curNode.posY + j;
	                                    });
	                                    if (tmp != null) {
	                                        tmp = null;
	                                        continue;
	                                    }
	                                }

	                                /**    Skip diagonally adjacent nodes IF NO_DIAG_MOV == true:    */
	                                if (i != 0 && j != 0 && this.NO_DIAG_MOV) {
	                                    continue;
	                                }
	                                /**    THIS IS FOR PSEUDO-NO_DIAG_MOV
	                                 YOU SHALL NOT MOVE DIAGONALLY IF
	                                 AN OBSTACLE IS ADJACENT TO current_node
	                                 AND THIS NODE:
	                                 */
	                                if (i != 0 && j != 0 && this.HALF_DIAG_MOV) {
	                                    if (this.map.getTileType(curNode.posX + i, curNode.posY) == this.INDEX_FOR_OBSTACLE) continue;
	                                    if (this.map.getTileType(curNode.posX, curNode.posY + j) == this.INDEX_FOR_OBSTACLE) continue;
	                                }
	                                /** Check whether this neighbor is already on the open list,
	                                 *  if yes - update its costs accordingly:
	                                 */
	                                if (openList != null) {
	                                    tmp = openList.find(function (a) {
	                                        return a.posX == curNode.posX + i && a.posY == curNode.posY + j;
	                                    });
	                                }

	                                if (openList != null && tmp != null) {
	                                    /** checking for diagonal vs (horizontal / vertical step): */
	                                    if (i != 0 && j != 0) {
	                                        /**    Is curNode the better predecessor
	                                         *  than what we have atm ?:
	                                         */
	                                        if (tmp.cost > curNode.cost + 14) {
	                                            tmp.cost = curNode.cost + 14;
	                                            tmp.parent = curNode;
	                                        }
	                                    } else {
	                                        if (tmp.cost > curNode.cost + 10) {
	                                            tmp.cost = curNode.cost + 10;
	                                            tmp.parent = curNode;
	                                        }
	                                    }
	                                }
	                                /** tmp is neither on the openList nor on the closedList
	                                 *  so we gotta add it to the open list:
	                                 */
	                                else {
	                                        if (i != 0 && j != 0) {
	                                            tmpCost = curNode.cost + 14;
	                                        } else {
	                                            tmpCost = curNode.cost + 10;
	                                        }
										tmp = new _nodeEs62["default"](curNode.posX + i, curNode.posY + j);
										tmp.cost = tmpCost;
	                                        tmp.parent = curNode;
	                                        if (openList == null) {
	                                            openList = [];
	                                        }
	                                        openList.push(tmp);
										//openList.sort(this.nodeScoring.compareManhattan);
										//openList.sort(function() { this.nodeScoring.compareManhattan(); });
										// TODO: find out why this works and what exactly it does D:
										// TODO: compareManhattan() does not get a and b (= undefined) !!!
										/** PATH SCORING: */
										openList.sort(function (a, b) {
											_this.nodeScoring.compareManhattan(a, b);
										});
	                                    }
	                            }
	                        }

	                        /**    ADD curNode TO THE closedList:    */
						if (this.closedList == null) {
							this.closedList = [];
	                        }
						this.closedList.push(curNode);
	                        /**    REMOVE curNode FROM THE openList:    */
	                        var index = openList.indexOf(curNode);
	                        if (index > -1) {
	                            openList.splice(index, 1);
	                        }

	                        /** if openList is empty, there are no open nodes left, even though destination is not reached yet:    */
	                        if (openList.length == 0) {
	                            unit.route.Steps = null;
	                            unit.route.finish = null;
	                            unit.route.routeActive = false;
	                            done = true;
								console.log("NO PATH FOUND!");
	                        } else {
	                            curNode = openList[0];
	                        }
	                        iteCnt++;
	                    }
	            }
	        }

			// draw the closedList on the canvas by calling drawClosedElement()
		}, {
			key: "drawClosedList",
			value: function drawClosedList() {
				if (this.closedList != null) {
					for (var i = 0; i < this.closedList.length; i++) {
						this.drawClosedElement(this.closedList[i]);
					}
				}
			}

			// draw a closed element on the canvas
		}, {
			key: "drawClosedElement",
			value: function drawClosedElement(element) {
				this.ctx.fillStyle = '#ea9d6e';
				this.ctx.fillRect(element.posX * 32 + 4, element.posY * 32 + 4, 32 - 8, 32 - 8);
			}
	    }]);

	    return Pathfinding;
	})();

	exports["default"] = Pathfinding;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var NodeScoring = (function () {
	    function NodeScoring(pos_finish_x, pos_finish_y) {
	        _classCallCheck(this, NodeScoring);

	        this.posFinishX = pos_finish_x;
	        this.posFinishY = pos_finish_y;

			console.log("NodeScoring init done.");
	    }

	    /**
		 * THIS COMPARES NODES USING MANHATTAN DISTANCE,
	     * THE LOWER THE SCORE, THE BETTER.
	     * THUS:
	     * a_score <= b_score  ----> 1,
	     * a_score > b_score  ----> -1
	     */

	    _createClass(NodeScoring, [{
			key: "compareManhattan",
			value: function compareManhattan(a, b) {
	            if (a == null || b == null) {
	                return 1;
	            }
	            /**
	             * F = G + H,
	             *
	             * where F is the score, G the cost to move from starting point to the given point on the grid
				 * and H the approximate cost to reach the destination:
	             */
				var score_a = a.cost + Math.abs(this.posFinishX - a.posX) + Math.abs(this.posFinishY - a.posY);
				var score_b = b.cost + Math.abs(this.posFinishX - b.posX) + Math.abs(this.posFinishY - b.posY);

				score_a += -6 * Math.min(Math.abs(this.posFinishX - a.posX), Math.abs(this.posFinishY - a.posY));
				score_b += -6 * Math.min(Math.abs(this.posFinishX - b.posX), Math.abs(this.posFinishY - b.posY));

	            if (score_a > score_b) {
					return -1;
				} else if (score_a < score_b) {
	                return 1;
	            } else {
					return 0;
	            }
	        }
	    }]);

	    return NodeScoring;
	})();

	exports["default"] = NodeScoring;
	module.exports = exports["default"];

/***/ }
/******/ ]);
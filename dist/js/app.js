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

		var _mapEs6 = __webpack_require__(4);

		var _mapEs62 = _interopRequireDefault(_mapEs6);

	var App = (function () {

	    /**
	     * Empty for now
	     * @constructor App
	     */

	    function App() {
	        _classCallCheck(this, App);

			new _initEs62["default"]();
			this.map = new _mapEs62["default"]();
			var spawnLocation = this.map.findSpawnLocation(this.map.matrix);
			this.draw = new _drawEs62["default"]();
			this.unit = new _unitEs62["default"](spawnLocation[0], spawnLocation[1]);
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

				this.draw.drawObstacles(this.map.matrix);
				this.draw.drawGrid();
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
	            window.innerWidth <= 800 ? this.canvas.width = window.innerWidth : this.canvas.width = 800;
	            window.innerHeight <= 640 ? this.canvas.height = window.innerHeight : this.canvas.height = 640;
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
	            // draw vertical lines:
	            for (x = 0; x <= this.canvas.width; x += 32) {
	                this.ctx.moveTo(x, 0);
	                this.ctx.lineTo(x, this.canvas.height);
	            }

	            // draw horizontal lines:
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
							//this.ctx.beginPath();
							this.ctx.fillStyle = '#6d6359';
							this.ctx.fillRect(i * 32, j * 32, i * 32, j * 32);
							//this.ctx.closePath();
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
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Unit = (function () {
	    function Unit(x, y) {
	        _classCallCheck(this, Unit);

	        this.canvas = document.getElementById("gameCanvas");
	        this.ctx = this.canvas.getContext("2d");

			// place the unit at the right position
			// TODO: DO NOT HARDCODE THE GRID SIZE!
			this.x = x * 32 + 16;
			this.y = y * 32 + 16;
	    }

	    _createClass(Unit, [{
	        key: "draw",
	        value: function draw() {
	            this.ctx.beginPath();
	            this.ctx.arc(this.x, this.y, 16, 0, 2 * Math.PI, false);
				this.ctx.fillStyle = '#ff0000';
	            this.ctx.fill();
	            this.ctx.lineWidth = 2;
	            this.ctx.strokeStyle = '#003300';
	            this.ctx.stroke();
	        }
	    }]);

	    return Unit;
	})();

	exports["default"] = Unit;
		module.exports = exports["default"];

		/***/
	},
	/* 4 */
	/***/ function (module, exports) {

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

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		var Map = (function () {
			function Map() {
				_classCallCheck(this, Map);

				this.matrix = [];
				console.log("Initial matrix:");
				for (var i = 0; i < 25; i++) {
					this.matrix[i] = [];
					for (var j = 0; j < 25; j++) {
						this.matrix[i][j] = 0;
					}
					console.log(this.matrix[i]);
				}
				//this.randomInteger = this.getRandomInt(0, 25);
				console.log("Randomized matrix:");
				for (var i = 0; i < 25; i++) {
					for (var j = 0; j < 25; j++) {
						if (Math.random() >= 0.55) {
							this.matrix[i][j] = 1;
						}
					}
					console.log(this.matrix[i]);
				}

				for (var i = 0; i < 1; i++) {
					this.cellularAutomata(this.matrix);
				}
				console.log("After:");
				for (var i = 0; i < 25; i++) {
					console.log(this.matrix[i]);
				}
			}

			_createClass(Map, [{
				key: "cellularAutomata",
				value: function cellularAutomata(matrix) {
					var cnt;
					var x, y;
					for (var i = 0; i < 25; i++) {
						for (var j = 0; j < 25; j++) {
							if (matrix[i][j] == 1) {
								cnt = 0;
								for (x = -1; x <= 1; x++) {
									for (y = -1; y <= 1; y++) {
										if (x == 0 && y == 0) {
											continue;
										}
										if (i + x < 0 || i + x >= 25 || j + y < 0 || j + y >= 25) {
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
										if (i + x < 0 || i + x >= 25 || j + y < 0 || j + y >= 25) {
											continue;
										}
										if (matrix[i + x][j + y] == 1) {
											cnt++;
										}
									}
								}
								if (cnt > 5) {
									matrix[i][j] = 1;
								}
							}
						}
					}
				}
			}, {
				key: "findSpawnLocation",
				value: function findSpawnLocation(map) {
					var i, x, y;
					//TODO TOP LEL
					for (i = 0; i < 100; i++) {
						x = this.getRandomInt(0, 24);
						y = this.getRandomInt(0, 24);
						if (map[x][y] == 0) {
							return [x, y];
						}
					}
				}
			}, {
				key: "getRandomInt",
				value: function getRandomInt(min, max) {
					return Math.floor(Math.random() * (max - min + 1)) + min;
				}
			}]);

			return Map;
		})();

		exports["default"] = Map;
	module.exports = exports["default"];

/***/ }
/******/ ]);
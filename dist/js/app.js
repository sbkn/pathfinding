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

	var App = (function () {

	    /**
	     *
	     *
	     * @constructor App
	     */

	    function App() {
	        _classCallCheck(this, App);
	    }

	    /**
	     *
	     */

	    _createClass(App, [{
	        key: "run",
	        value: function run() {
	            new _initEs62["default"]().init();
	            new _drawEs62["default"]().init();
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
	    }

	    _createClass(Init, [{
	        key: "init",
	        value: function init() {
	            this.canvas = document.getElementById("gameCanvas");
	            this.ctx = this.canvas.getContext("2d");

	            this.resizeCanvas();
	            window.addEventListener('resize', this.resizeCanvas, false);

	            console.log("Init done.");
	        }

	        /**
	         * Resize the canvas when needed:
	         */
	    }, {
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
	    }

	    _createClass(Draw, [{
	        key: "init",
	        value: function init() {
	            this.canvas = document.getElementById("gameCanvas");
	            this.ctx = this.canvas.getContext("2d");
	            this.drawBoard();

	            console.log("Draw init done.");
	        }
	    }, {
	        key: "drawBoard",
	        value: function drawBoard() {
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
	    }]);

	    return Draw;
	})();

	exports["default"] = Draw;
	module.exports = exports["default"];

/***/ }
/******/ ]);
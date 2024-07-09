/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate */ "./src/validate.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);
    this.playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard();
    this.computerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard();
    this.turn = 'player'; // Initialize the turn to 'player'
    this.playerWins = 0;
    this.computerWins = 0;
    this.gameOver = false;
    this.prevCompHit = [];
    this.prevCompAttack = [];
    this.nextCompAttack = undefined;
    this.currentDirection = undefined;
    this.gameMode = 'initial';
    this.ui = new _ui__WEBPACK_IMPORTED_MODULE_2__.UI(this.playerBoard);
    this.ui.gameState(this.startPlacementMode.bind(this));
    this.ui.onShipsPlaced = this.startGame.bind(this);
  }
  _createClass(Game, [{
    key: "startPlacementMode",
    value: function startPlacementMode() {
      this.gameMode = 'placement';
      this.placeComputerShips();
      this.ui.bindEventListeners(this.turn === 'player', this.playerReceiveAttack.bind(this));
    }
  }, {
    key: "placeComputerShips",
    value: function placeComputerShips() {
      var _this = this;
      var shipsToPlaceComputer = [{
        coordinates: 'A1',
        size: 5,
        orientation: 'X'
      }, {
        coordinates: 'B1',
        size: 4,
        orientation: 'X'
      }, {
        coordinates: 'C1',
        size: 3,
        orientation: 'X'
      }, {
        coordinates: 'D1',
        size: 3,
        orientation: 'X'
      }, {
        coordinates: 'E1',
        size: 2,
        orientation: 'X'
      }];
      shipsToPlaceComputer.forEach(function (ship) {
        var coordinates = ship.coordinates,
          size = ship.size,
          orientation = ship.orientation;
        try {
          _this.computerBoard.placeShip(coordinates.toUpperCase(), size, orientation.toUpperCase());
          _this.ui.updateShipOnUI(coordinates, size, orientation);
        } catch (error) {
          throw new Error("Failed to place ship: ".concat(error.message));
        }
      });
    }
  }, {
    key: "startGame",
    value: function startGame() {
      this.gameMode = 'play';
      this.ui.bindEventListeners(this.turn === 'player', this.playerReceiveAttack.bind(this));
    }
  }, {
    key: "playerReceiveAttack",
    value: function playerReceiveAttack(coordinates) {
      var _this2 = this;
      if (this.turn !== 'player' || this.gameOver) return; // Prevent player from attacking out of turn
      var result = this.receiveAttack(this.computerBoard, coordinates);
      this.ui.updateUI(coordinates, result, false);
      this.checkGameOver();
      if (!this.gameOver) {
        this.turn = 'computer'; // Switch turn to computer
        setTimeout(function () {
          return _this2.computerAttack();
        }, 800); // Delay before computer attacks
      }
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(board, coordinates) {
      var _handleAttackError = (0,_validate__WEBPACK_IMPORTED_MODULE_0__.handleAttackError)(board, coordinates),
        row = _handleAttackError.row,
        col = _handleAttackError.col,
        cell = _handleAttackError.cell;
      if (!cell[1]) {
        var result = this.handleMiss(board, coordinates, row, col);
        return result;
      } else {
        var coordinate = board.board[row][col];
        var parentShip = this.findParentShip(board, coordinate);
        var _result = this.handleHit(parentShip, board, coordinate, row, col);
        board.hitCells.push(coordinates);
        if (parentShip.occupiedCells.length === 0) {
          this.handleSunk(parentShip, board);
          return 'sunk';
        }
        return 'hit';
      }
    }
  }, {
    key: "handleMiss",
    value: function handleMiss(board, coordinates, row, col) {
      board.board[row][col] = [coordinates, false, true]; // Set the 'isHit' flag to true for a miss
      board.missedHits.push(coordinates);
      return 'miss';
    }
  }, {
    key: "findParentShip",
    value: function findParentShip(board, coordinate) {
      var _iterator = _createForOfIteratorHelper(board.ships),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ship = _step.value;
          if (ship.occupiedCells.includes(coordinate)) {
            return ship;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      throw new Error('Parent ship not found');
    }
  }, {
    key: "handleHit",
    value: function handleHit(parentShip, board, coordinate, row, col) {
      parentShip.hit();
      board.board[row][col][2] = true; // Set the 'isHit' flag to true for a hit
      parentShip.removeOccupiedCell(coordinate);
      return 'hit';
    }
  }, {
    key: "handleSunk",
    value: function handleSunk(parentShip, board) {
      var _this3 = this;
      parentShip.occupiedCells.forEach(function (coordinate) {
        parentShip.removeOccupiedCell(coordinate);
        _this3.ui.updateUI(coordinate, 'sunk', board === _this3.playerBoard);
      });
      board.ships = board.ships.filter(function (ship) {
        return ship !== parentShip;
      });
    }
  }, {
    key: "generateCoordinate",
    value: function generateCoordinate(board) {
      var availableCells = [];
      for (var coordinate in board.coordinateMap) {
        if (!board.hitCells.includes(coordinate)) {
          availableCells.push(coordinate);
        }
      }
      var randomIndex = Math.floor(Math.random() * availableCells.length);
      return availableCells[randomIndex];
    }
  }, {
    key: "getAdjacentCells",
    value: function getAdjacentCells(coordinate, board) {
      var directions = [{
        row: 0,
        col: 1,
        direction: 'right'
      },
      // right
      {
        row: 0,
        col: -1,
        direction: 'left'
      },
      // left
      {
        row: 1,
        col: 0,
        direction: 'down'
      },
      // down
      {
        row: -1,
        col: 0,
        direction: 'up'
      } // up
      ];
      var rows = 'ABCDEFGHIJ';
      var cols = '123456789';
      var currentRow = coordinate[0];
      var currentCol = coordinate.slice(1);
      var coordinateMap = board.coordinateMap;
      var adjacentCells = [];
      directions.forEach(function (direction) {
        var newRow = rows[rows.indexOf(currentRow) + direction.row];
        var newCol = (parseInt(currentCol) + direction.col).toString();
        var direc = direction.direction;
        if (newRow && cols.includes(newCol)) {
          var newCoordinate = newRow + newCol;
          if (coordinateMap.hasOwnProperty(newCoordinate) && !board.hitCells.includes(newCoordinate)) {
            adjacentCells.push({
              coordinate: newCoordinate,
              direction: direc
            });
          }
        }
      });
      return adjacentCells;
    }
  }, {
    key: "getNextAttack",
    value: function getNextAttack(coordinate, board) {
      if (this.prevCompHit.length > 0) {
        var lastHit = this.prevCompHit[this.prevCompHit.length - 1];
        var possibleCells = this.getAdjacentCells(lastHit.coordinate, board).filter(function (cell) {
          return cell.direction === lastHit.direction;
        });
        if (possibleCells.length > 0) {
          return possibleCells[Math.floor(Math.random() * possibleCells.length)].coordinate;
        } else {
          this.currentDirection = undefined;
        }
      }
      var adjacentCells = this.getAdjacentCells(coordinate, board);
      var validAdjacentCells = adjacentCells.filter(function (cell) {
        return !board.hitCells.includes(cell.coordinate);
      });
      if (validAdjacentCells.length === 0) {
        return this.generateCoordinate(board);
      }
      var nextAttack = validAdjacentCells[Math.floor(Math.random() * validAdjacentCells.length)];
      this.prevCompHit.push(nextAttack);
      this.currentDirection = nextAttack.direction;
      return nextAttack.coordinate;
    }
  }, {
    key: "computerAttack",
    value: function () {
      var _computerAttack = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var result, coordinate;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(this.turn !== 'computer')) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              if (this.nextCompAttack === undefined) {
                coordinate = this.generateCoordinate(this.playerBoard);
                this.prevCompAttack.push(coordinate);
              } else {
                coordinate = this.nextCompAttack;
                this.prevCompAttack.push(coordinate);
              }
              result = this.receiveAttack(this.playerBoard, coordinate);
              this.ui.updateUI(coordinate, result, true);
              if (result === 'hit') {
                this.prevCompHit.push({
                  coordinate: coordinate,
                  direction: this.currentDirection
                });
                this.nextCompAttack = this.getNextAttack(coordinate, this.playerBoard);
              } else {
                this.nextCompAttack = undefined;
                this.currentDirection = undefined;
              }
              this.checkGameOver();
              if (!this.gameOver) {
                this.turn = 'player';
              }
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function computerAttack() {
        return _computerAttack.apply(this, arguments);
      }
      return computerAttack;
    }()
  }, {
    key: "checkGameOver",
    value: function checkGameOver() {
      if (this.computerBoard.ships.length === 0) {
        this.ui.showWinner('player');
        this.gameOver = true;
      } else if (this.playerBoard.ships.length === 0) {
        this.ui.showWinner('computer');
        this.gameOver = true;
      }
    }
  }, {
    key: "waitForDelay",
    value: function waitForDelay(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }
  }]);
  return Game;
}();

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameboard: () => (/* binding */ gameboard)
/* harmony export */ });
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate */ "./src/validate.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ship__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var gameboard = /*#__PURE__*/function () {
  function gameboard() {
    _classCallCheck(this, gameboard);
    this.rows = 10;
    this.columns = 10;
    this.board = [];
    this.coordinateMap = {};
    this.ships = [];
    this.hitCells = [];
    this.createGameboard();
    this.missedHits = [];
    this.gameStarted = false;
  }
  _createClass(gameboard, [{
    key: "createGameboard",
    value: function createGameboard() {
      var letters = 'ABCDEFGHIJ';
      for (var i = 0; i < this.rows; i++) {
        this.board[i] = new Array(this.columns);
        for (var j = 0; j < this.columns; j++) {
          var coordinate = "".concat(letters[i]).concat(j + 1);
          var values = [i, j, 0];
          this.board[i][j] = [coordinate, false]; // Initialize with coordinate and occupied = false
          this.coordinateMap[coordinate.toUpperCase()] = values;
        }
      }
    }
  }, {
    key: "occupyCell",
    value: function occupyCell(coordinate, ship) {
      var values = this.coordinateMap[coordinate];
      if (!values) {
        throw new Error("Invalid coordinate: ".concat(coordinate));
      }
      var _values = _slicedToArray(values, 2),
        row = _values[0],
        col = _values[1];
      var _this$board$row$col = _slicedToArray(this.board[row][col], 2),
        _ = _this$board$row$col[0],
        isOccupied = _this$board$row$col[1];
      if (!isOccupied) {
        this.board[row][col] = [coordinate, true];
        ship.occupiedCells.push(this.board[row][col]);
        return true;
      } else {
        throw new Error('Existing ship within coordinates');
      }
    }
  }, {
    key: "placeShip",
    value: function placeShip(coordinates, shipSize, orientation) {
      (0,_validate__WEBPACK_IMPORTED_MODULE_0__.validateShipPlacement)(coordinates, shipSize, orientation);
      var ship = new (_ship__WEBPACK_IMPORTED_MODULE_1___default())(shipSize, coordinates);
      this.ships.push(ship);
      if (orientation === 'Y') {
        var _this$coordinateMap$c = _slicedToArray(this.coordinateMap[coordinates], 2),
          startRow = _this$coordinateMap$c[0],
          startCol = _this$coordinateMap$c[1];
        var letters = 'ABCDEFGHIJ';
        for (var i = 0; i < shipSize; i += 1) {
          var row = startRow + i;
          (0,_validate__WEBPACK_IMPORTED_MODULE_0__.validateYBoundary)(this.rows, row); // validation
          var currentCoordinate = "".concat(letters[row]).concat(startCol + 1);
          this.occupyCell(currentCoordinate, ship);
        }
      }
      if (orientation === 'X') {
        var _this$coordinateMap$c2 = _slicedToArray(this.coordinateMap[coordinates], 2),
          _startRow = _this$coordinateMap$c2[0],
          _startCol = _this$coordinateMap$c2[1];
        var _letters = 'ABCDEFGHIJ';
        for (var _i = 0; _i < shipSize; _i += 1) {
          var col = _startCol + _i;
          (0,_validate__WEBPACK_IMPORTED_MODULE_0__.validateXBoundary)(col, this.columns); // validation

          var _currentCoordinate = "".concat(_letters[_startRow]).concat(col + 1);
          this.occupyCell(_currentCoordinate, ship);
        }
      }
    }
  }]);
  return gameboard;
}();

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Ship = /*#__PURE__*/function () {
  function Ship(shipSize, coordinates) {
    _classCallCheck(this, Ship);
    this.shipSize = shipSize;
    this.coordinates = coordinates;
    this.occupiedCells = [];
    this.hits = 0;
    this.identity = generateUniqueId(); // Generate a unique ID for the ship
  }
  _createClass(Ship, [{
    key: "hit",
    value: function hit() {
      this.hits += 1;
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      return this.hits >= this.shipSize;
    }
  }, {
    key: "removeOccupiedCell",
    value: function removeOccupiedCell(coordinate) {
      var index = this.occupiedCells.indexOf(coordinate);
      if (index !== -1) {
        this.occupiedCells.splice(index, 1);
      }
    }
  }]);
  return Ship;
}(); // Helper function to generate a unique ID
function generateUniqueId() {
  return Math.random().toString(36).substring(2, 9);
}
module.exports = Ship;

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UI: () => (/* binding */ UI)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var UI = /*#__PURE__*/function () {
  function UI(gameboard) {
    _classCallCheck(this, UI);
    this.gameboard = gameboard;
    this.createGameboard();
    this.gameMode = 'initial'; // Initial game mode
    this.currentShipIndex = 0; // Track the index of the current ship to be placed
    this.shipsToPlacePlayer = [{
      size: 5,
      orientation: 'X'
    }, {
      size: 4,
      orientation: 'X'
    }, {
      size: 3,
      orientation: 'X'
    }, {
      size: 3,
      orientation: 'X'
    }, {
      size: 2,
      orientation: 'X'
    }];
    this.currentOrientation = 'X'; // Default orientation is horizontal
    this.initOrientationButton();
  }
  _createClass(UI, [{
    key: "createGameboard",
    value: function createGameboard() {
      var playerGridContainer = document.querySelector('.playerGridContainer');
      var computerGridContainer = document.querySelector('.computerGridContainer');
      for (var row = 0; row < 10; row++) {
        for (var col = 0; col < 10; col++) {
          // Create cell for player grid
          var playerCell = document.createElement('div');
          playerCell.classList.add('playerCell');
          var coordinate = "".concat(String.fromCharCode(65 + row)).concat(col + 1);
          playerCell.dataset.coordinate = coordinate;
          playerCell.dataset.clicked = false;
          playerGridContainer.appendChild(playerCell);

          // Create cell for computer grid
          var computerCell = document.createElement('div');
          computerCell.classList.add('compCell');
          computerCell.dataset.coordinate = coordinate;
          computerCell.dataset.clicked = false;
          computerGridContainer.appendChild(computerCell);
        }
      }
    }
  }, {
    key: "initOrientationButton",
    value: function initOrientationButton() {
      var _this = this;
      var orientationButton = document.createElement('button');
      orientationButton.classList.add('orientationButton');
      orientationButton.textContent = 'Change Orientation';
      document.body.appendChild(orientationButton);
      orientationButton.addEventListener('click', function () {
        _this.currentOrientation = _this.currentOrientation === 'X' ? 'Y' : 'X';
        orientationButton.textContent = "Orientation: ".concat(_this.currentOrientation);
      });
    }
  }, {
    key: "gameState",
    value: function gameState(startGameCallback) {
      var _this2 = this;
      var gameStarter = document.querySelector('.startBtn');
      gameStarter.addEventListener('click', function () {
        _this2.gameMode = 'placement';
        startGameCallback();
      });
    }
  }, {
    key: "bindEventListeners",
    value: function bindEventListeners(isPlayerTurn, receiveAttackFn) {
      var _this3 = this;
      var cells = document.querySelectorAll('.compCell');
      cells.forEach(function (cell) {
        cell.addEventListener('click', function () {
          if (cell.classList.contains('hit') || cell.classList.contains('missed') || !isPlayerTurn || _this3.gameMode !== 'play') {
            return;
          }
          var coordinate = cell.dataset.coordinate;
          receiveAttackFn(coordinate); // Pass the coordinate argument
          cell.dataset.clicked = 'true';
        });
      });
      var playerCells = document.querySelectorAll('.playerCell');
      playerCells.forEach(function (cell) {
        cell.addEventListener('click', function () {
          if (_this3.gameMode === 'placement') {
            var coordinate = cell.dataset.coordinate;
            var currentShip = _this3.shipsToPlacePlayer[_this3.currentShipIndex];
            if (currentShip) {
              var size = currentShip.size;
              if (_this3.placePlayerShip(coordinate, size, _this3.currentOrientation)) {
                _this3.updateShipOnUI(coordinate, size, _this3.currentOrientation, true);
                _this3.currentShipIndex++;
                if (_this3.currentShipIndex >= _this3.shipsToPlacePlayer.length) {
                  _this3.gameMode = 'play';
                  _this3.onShipsPlaced();
                }
              }
            }
          }
        });
      });
    }
  }, {
    key: "placePlayerShip",
    value: function placePlayerShip(coordinate, size, orientation) {
      try {
        this.gameboard.placeShip(coordinate, size, orientation);
        return true;
      } catch (error) {
        console.error("Failed to place ship: ".concat(error.message));
        return false;
      }
    }
  }, {
    key: "updateShipOnUI",
    value: function updateShipOnUI(coordinate, size, orientation) {
      var isPlayerBoard = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var startRow = coordinate.charCodeAt(0) - 65; // Convert A-J to 0-9
      var startCol = parseInt(coordinate.slice(1)) - 1; // Convert 1-10 to 0-9

      for (var i = 0; i < size; i++) {
        var cellCoordinate = void 0;
        if (orientation.toLowerCase() === 'x') {
          cellCoordinate = "".concat(String.fromCharCode(65 + startRow)).concat(startCol + i + 1);
        } else if (orientation.toLowerCase() === 'y') {
          cellCoordinate = "".concat(String.fromCharCode(65 + startRow + i)).concat(startCol + 1);
        }
        var cellSelector = isPlayerBoard ? '.playerCell' : '.compCell';
        var cell = document.querySelector("".concat(cellSelector, "[data-coordinate=\"").concat(cellCoordinate, "\"]"));
        if (cell) {
          cell.classList.add('ship');
        }
      }
    }
  }, {
    key: "updateUI",
    value: function updateUI(coordinate, result, isPlayerBoard) {
      var cellSelector = isPlayerBoard ? '.playerCell' : '.compCell';
      var cell = document.querySelector("".concat(cellSelector, "[data-coordinate=\"").concat(coordinate, "\"]"));
      if (cell) {
        if (result === 'miss') {
          cell.classList.add('missed');
          cell.textContent = 'x';
        } else if (result === 'sunk') {
          cell.classList.add('sunk');
          cell.classList.remove('hit');
        } else if (result === 'hit') {
          cell.classList.add('hit');
        }
      }
    }
  }, {
    key: "showWinner",
    value: function showWinner(winner) {
      var body = document.querySelector('.body');
      var gameOverDiv = document.createElement('div');
      gameOverDiv.classList.add('gameOverContainer');
      gameOverDiv.innerHTML = 'Game over, ' + "".concat(winner) + ' wins';
      body.appendChild(gameOverDiv);
    }
  }, {
    key: "onShipsPlaced",
    value: function onShipsPlaced() {
      // Callback to be set by the Game class to start the actual gameplay
    }
  }]);
  return UI;
}();

/***/ }),

/***/ "./src/validate.js":
/*!*************************!*\
  !*** ./src/validate.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleAttackError: () => (/* binding */ handleAttackError),
/* harmony export */   validateCell: () => (/* binding */ validateCell),
/* harmony export */   validateShipPlacement: () => (/* binding */ validateShipPlacement),
/* harmony export */   validateXBoundary: () => (/* binding */ validateXBoundary),
/* harmony export */   validateYBoundary: () => (/* binding */ validateYBoundary)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function validateShipPlacement(coordinates, shipSize, orientation) {
  // Validation
  if (!/^([A-Ja-j])(10|[1-9])$/.test(coordinates)) {
    throw new Error('Invalid coordinates');
  }
  var validSizes = [1, 2, 3, 4, 5];
  if (!validSizes.includes(shipSize)) {
    throw new Error('Invalid ship size');
  }
  var validOrientations = ['X', 'Y'];
  if (!validOrientations.includes(orientation.toUpperCase())) {
    throw new Error('Invalid orientation');
  }
}
function validateCell(board, row, col, isOccupied) {
  if (!isOccupied) {
    board[row][col][1] = true;
    return true; // Cell was successfully occupied
  } else {
    // Reject if the cell is already occupied
    throw new Error('Existing ship within coordinates');
  }
}
function validateYBoundary(rows, row) {
  if (row >= rows) {
    throw new Error('Out of boundaries');
  }
}
function validateXBoundary(col, columns) {
  if (col >= columns) {
    throw new Error('Out of boundaries');
  }
}
function handleAttackError(board, coordinates) {
  var coordUpper = coordinates.toUpperCase();
  if (!board.coordinateMap[coordUpper]) {
    throw new Error("Invalid coordinate: ".concat(coordinates));
  }
  var _board$coordinateMap$ = _slicedToArray(board.coordinateMap[coordUpper], 2),
    row = _board$coordinateMap$[0],
    col = _board$coordinateMap$[1];
  var cell = board.board[row][col];
  if (!cell) {
    throw new Error("Invalid cell: [".concat(row, ", ").concat(col, "]"));
  }
  return {
    row: row,
    col: col,
    cell: cell
  };
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body{
    height: 100vh;
}

.gameContainer{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    height: 100%;
}

.playerGridContainer , .computerGridContainer{
background-color: grey;
height: 50vh;
width: 40vw;
display: grid;
grid-template-columns: repeat(10, 1fr);
grid-template-rows: repeat(10, 1fr);
}

.compCell, .playerCell{border: 2px solid black;
width: 100%;
height: 100%;}



.hit{
background-color: orange !important
}

.sunk{background-color: red !important;}

.missed{
color: white;
margin: none;
font-size: 1.2rem;
display: flex;
justify-content: center;
align-items: center;}


.gameOverContainer{
    display: flex;
    justify-content: center;
    align-items: center;
}

.buttonContainer{
    display: flex;
    justify-content: center;
}

.ship{background-color: black;}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,qBAAqB;IACrB,YAAY;AAChB;;AAEA;AACA,sBAAsB;AACtB,YAAY;AACZ,WAAW;AACX,aAAa;AACb,sCAAsC;AACtC,mCAAmC;AACnC;;AAEA,uBAAuB,uBAAuB;AAC9C,WAAW;AACX,YAAY,CAAC;;;;AAIb;AACA;AACA;;AAEA,MAAM,gCAAgC,CAAC;;AAEvC;AACA,YAAY;AACZ,YAAY;AACZ,iBAAiB;AACjB,aAAa;AACb,uBAAuB;AACvB,mBAAmB,CAAC;;;AAGpB;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA,MAAM,uBAAuB,CAAC","sourcesContent":["body{\n    height: 100vh;\n}\n\n.gameContainer{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    justify-items: center;\n    height: 100%;\n}\n\n.playerGridContainer , .computerGridContainer{\nbackground-color: grey;\nheight: 50vh;\nwidth: 40vw;\ndisplay: grid;\ngrid-template-columns: repeat(10, 1fr);\ngrid-template-rows: repeat(10, 1fr);\n}\n\n.compCell, .playerCell{border: 2px solid black;\nwidth: 100%;\nheight: 100%;}\n\n\n\n.hit{\nbackground-color: orange !important\n}\n\n.sunk{background-color: red !important;}\n\n.missed{\ncolor: white;\nmargin: none;\nfont-size: 1.2rem;\ndisplay: flex;\njustify-content: center;\nalign-items: center;}\n\n\n.gameOverContainer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.buttonContainer{\n    display: flex;\n    justify-content: center;\n}\n\n.ship{background-color: black;}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


var game = new _game_js__WEBPACK_IMPORTED_MODULE_0__.Game();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBaUM7QUFDRTtBQUNuQyxJQUFNZ0ksSUFBSSxHQUFHLElBQUkzSywwQ0FBSSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlQXR0YWNrRXJyb3IgfSBmcm9tICcuL3ZhbGlkYXRlJztcbmltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IFVJIH0gZnJvbSAnLi91aSc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wbGF5ZXJCb2FyZCA9IG5ldyBnYW1lYm9hcmQoKTtcbiAgICB0aGlzLmNvbXB1dGVyQm9hcmQgPSBuZXcgZ2FtZWJvYXJkKCk7XG4gICAgdGhpcy50dXJuID0gJ3BsYXllcic7IC8vIEluaXRpYWxpemUgdGhlIHR1cm4gdG8gJ3BsYXllcidcbiAgICB0aGlzLnBsYXllcldpbnMgPSAwO1xuICAgIHRoaXMuY29tcHV0ZXJXaW5zID0gMDtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2Q29tcEhpdCA9IFtdO1xuICAgIHRoaXMucHJldkNvbXBBdHRhY2sgPSBbXTtcbiAgICB0aGlzLm5leHRDb21wQXR0YWNrID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmdhbWVNb2RlID0gJ2luaXRpYWwnO1xuXG4gICAgdGhpcy51aSA9IG5ldyBVSSh0aGlzLnBsYXllckJvYXJkKTtcbiAgICB0aGlzLnVpLmdhbWVTdGF0ZSh0aGlzLnN0YXJ0UGxhY2VtZW50TW9kZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnVpLm9uU2hpcHNQbGFjZWQgPSB0aGlzLnN0YXJ0R2FtZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc3RhcnRQbGFjZW1lbnRNb2RlKCkge1xuICAgIHRoaXMuZ2FtZU1vZGUgPSAncGxhY2VtZW50JztcbiAgICB0aGlzLnBsYWNlQ29tcHV0ZXJTaGlwcygpO1xuICAgIHRoaXMudWkuYmluZEV2ZW50TGlzdGVuZXJzKFxuICAgICAgdGhpcy50dXJuID09PSAncGxheWVyJyxcbiAgICAgIHRoaXMucGxheWVyUmVjZWl2ZUF0dGFjay5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxuXG4gIHBsYWNlQ29tcHV0ZXJTaGlwcygpIHtcbiAgICBjb25zdCBzaGlwc1RvUGxhY2VDb21wdXRlciA9IFtcbiAgICAgIHsgY29vcmRpbmF0ZXM6ICdBMScsIHNpemU6IDUsIG9yaWVudGF0aW9uOiAnWCcgfSxcbiAgICAgIHsgY29vcmRpbmF0ZXM6ICdCMScsIHNpemU6IDQsIG9yaWVudGF0aW9uOiAnWCcgfSxcbiAgICAgIHsgY29vcmRpbmF0ZXM6ICdDMScsIHNpemU6IDMsIG9yaWVudGF0aW9uOiAnWCcgfSxcbiAgICAgIHsgY29vcmRpbmF0ZXM6ICdEMScsIHNpemU6IDMsIG9yaWVudGF0aW9uOiAnWCcgfSxcbiAgICAgIHsgY29vcmRpbmF0ZXM6ICdFMScsIHNpemU6IDIsIG9yaWVudGF0aW9uOiAnWCcgfSxcbiAgICBdO1xuXG4gICAgc2hpcHNUb1BsYWNlQ29tcHV0ZXIuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgY29uc3QgeyBjb29yZGluYXRlcywgc2l6ZSwgb3JpZW50YXRpb24gfSA9IHNoaXA7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgIGNvb3JkaW5hdGVzLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgc2l6ZSxcbiAgICAgICAgICBvcmllbnRhdGlvbi50b1VwcGVyQ2FzZSgpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMudWkudXBkYXRlU2hpcE9uVUkoY29vcmRpbmF0ZXMsIHNpemUsIG9yaWVudGF0aW9uKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBsYWNlIHNoaXA6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXJ0R2FtZSgpIHtcbiAgICB0aGlzLmdhbWVNb2RlID0gJ3BsYXknO1xuICAgIHRoaXMudWkuYmluZEV2ZW50TGlzdGVuZXJzKFxuICAgICAgdGhpcy50dXJuID09PSAncGxheWVyJyxcbiAgICAgIHRoaXMucGxheWVyUmVjZWl2ZUF0dGFjay5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxuXG4gIHBsYXllclJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICBpZiAodGhpcy50dXJuICE9PSAncGxheWVyJyB8fCB0aGlzLmdhbWVPdmVyKSByZXR1cm47IC8vIFByZXZlbnQgcGxheWVyIGZyb20gYXR0YWNraW5nIG91dCBvZiB0dXJuXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yZWNlaXZlQXR0YWNrKHRoaXMuY29tcHV0ZXJCb2FyZCwgY29vcmRpbmF0ZXMpO1xuICAgIHRoaXMudWkudXBkYXRlVUkoY29vcmRpbmF0ZXMsIHJlc3VsdCwgZmFsc2UpO1xuICAgIHRoaXMuY2hlY2tHYW1lT3ZlcigpO1xuICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xuICAgICAgdGhpcy50dXJuID0gJ2NvbXB1dGVyJzsgLy8gU3dpdGNoIHR1cm4gdG8gY29tcHV0ZXJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jb21wdXRlckF0dGFjaygpLCA4MDApOyAvLyBEZWxheSBiZWZvcmUgY29tcHV0ZXIgYXR0YWNrc1xuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soYm9hcmQsIGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgeyByb3csIGNvbCwgY2VsbCB9ID0gaGFuZGxlQXR0YWNrRXJyb3IoYm9hcmQsIGNvb3JkaW5hdGVzKTtcblxuICAgIGlmICghY2VsbFsxXSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5oYW5kbGVNaXNzKGJvYXJkLCBjb29yZGluYXRlcywgcm93LCBjb2wpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGJvYXJkLmJvYXJkW3Jvd11bY29sXTtcbiAgICAgIGNvbnN0IHBhcmVudFNoaXAgPSB0aGlzLmZpbmRQYXJlbnRTaGlwKGJvYXJkLCBjb29yZGluYXRlKTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5oYW5kbGVIaXQocGFyZW50U2hpcCwgYm9hcmQsIGNvb3JkaW5hdGUsIHJvdywgY29sKTtcbiAgICAgIGJvYXJkLmhpdENlbGxzLnB1c2goY29vcmRpbmF0ZXMpO1xuXG4gICAgICBpZiAocGFyZW50U2hpcC5vY2N1cGllZENlbGxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmhhbmRsZVN1bmsocGFyZW50U2hpcCwgYm9hcmQpO1xuICAgICAgICByZXR1cm4gJ3N1bmsnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJ2hpdCc7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTWlzcyhib2FyZCwgY29vcmRpbmF0ZXMsIHJvdywgY29sKSB7XG4gICAgYm9hcmQuYm9hcmRbcm93XVtjb2xdID0gW2Nvb3JkaW5hdGVzLCBmYWxzZSwgdHJ1ZV07IC8vIFNldCB0aGUgJ2lzSGl0JyBmbGFnIHRvIHRydWUgZm9yIGEgbWlzc1xuICAgIGJvYXJkLm1pc3NlZEhpdHMucHVzaChjb29yZGluYXRlcyk7XG4gICAgcmV0dXJuICdtaXNzJztcbiAgfVxuXG4gIGZpbmRQYXJlbnRTaGlwKGJvYXJkLCBjb29yZGluYXRlKSB7XG4gICAgZm9yIChjb25zdCBzaGlwIG9mIGJvYXJkLnNoaXBzKSB7XG4gICAgICBpZiAoc2hpcC5vY2N1cGllZENlbGxzLmluY2x1ZGVzKGNvb3JkaW5hdGUpKSB7XG4gICAgICAgIHJldHVybiBzaGlwO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhcmVudCBzaGlwIG5vdCBmb3VuZCcpO1xuICB9XG5cbiAgaGFuZGxlSGl0KHBhcmVudFNoaXAsIGJvYXJkLCBjb29yZGluYXRlLCByb3csIGNvbCkge1xuICAgIHBhcmVudFNoaXAuaGl0KCk7XG4gICAgYm9hcmQuYm9hcmRbcm93XVtjb2xdWzJdID0gdHJ1ZTsgLy8gU2V0IHRoZSAnaXNIaXQnIGZsYWcgdG8gdHJ1ZSBmb3IgYSBoaXRcbiAgICBwYXJlbnRTaGlwLnJlbW92ZU9jY3VwaWVkQ2VsbChjb29yZGluYXRlKTtcblxuICAgIHJldHVybiAnaGl0JztcbiAgfVxuXG4gIGhhbmRsZVN1bmsocGFyZW50U2hpcCwgYm9hcmQpIHtcbiAgICBwYXJlbnRTaGlwLm9jY3VwaWVkQ2VsbHMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgcGFyZW50U2hpcC5yZW1vdmVPY2N1cGllZENlbGwoY29vcmRpbmF0ZSk7XG4gICAgICB0aGlzLnVpLnVwZGF0ZVVJKGNvb3JkaW5hdGUsICdzdW5rJywgYm9hcmQgPT09IHRoaXMucGxheWVyQm9hcmQpO1xuICAgIH0pO1xuXG4gICAgYm9hcmQuc2hpcHMgPSBib2FyZC5zaGlwcy5maWx0ZXIoKHNoaXApID0+IHNoaXAgIT09IHBhcmVudFNoaXApO1xuICB9XG5cbiAgZ2VuZXJhdGVDb29yZGluYXRlKGJvYXJkKSB7XG4gICAgY29uc3QgYXZhaWxhYmxlQ2VsbHMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNvb3JkaW5hdGUgaW4gYm9hcmQuY29vcmRpbmF0ZU1hcCkge1xuICAgICAgaWYgKCFib2FyZC5oaXRDZWxscy5pbmNsdWRlcyhjb29yZGluYXRlKSkge1xuICAgICAgICBhdmFpbGFibGVDZWxscy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUNlbGxzLmxlbmd0aCk7XG4gICAgcmV0dXJuIGF2YWlsYWJsZUNlbGxzW3JhbmRvbUluZGV4XTtcbiAgfVxuXG4gIGdldEFkamFjZW50Q2VsbHMoY29vcmRpbmF0ZSwgYm9hcmQpIHtcbiAgICBjb25zdCBkaXJlY3Rpb25zID0gW1xuICAgICAgeyByb3c6IDAsIGNvbDogMSwgZGlyZWN0aW9uOiAncmlnaHQnIH0sIC8vIHJpZ2h0XG4gICAgICB7IHJvdzogMCwgY29sOiAtMSwgZGlyZWN0aW9uOiAnbGVmdCcgfSwgLy8gbGVmdFxuICAgICAgeyByb3c6IDEsIGNvbDogMCwgZGlyZWN0aW9uOiAnZG93bicgfSwgLy8gZG93blxuICAgICAgeyByb3c6IC0xLCBjb2w6IDAsIGRpcmVjdGlvbjogJ3VwJyB9LCAvLyB1cFxuICAgIF07XG5cbiAgICBjb25zdCByb3dzID0gJ0FCQ0RFRkdISUonO1xuICAgIGNvbnN0IGNvbHMgPSAnMTIzNDU2Nzg5JztcblxuICAgIGNvbnN0IGN1cnJlbnRSb3cgPSBjb29yZGluYXRlWzBdO1xuICAgIGNvbnN0IGN1cnJlbnRDb2wgPSBjb29yZGluYXRlLnNsaWNlKDEpO1xuXG4gICAgY29uc3QgY29vcmRpbmF0ZU1hcCA9IGJvYXJkLmNvb3JkaW5hdGVNYXA7XG5cbiAgICBjb25zdCBhZGphY2VudENlbGxzID0gW107XG5cbiAgICBkaXJlY3Rpb25zLmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xuICAgICAgY29uc3QgbmV3Um93ID0gcm93c1tyb3dzLmluZGV4T2YoY3VycmVudFJvdykgKyBkaXJlY3Rpb24ucm93XTtcbiAgICAgIGNvbnN0IG5ld0NvbCA9IChwYXJzZUludChjdXJyZW50Q29sKSArIGRpcmVjdGlvbi5jb2wpLnRvU3RyaW5nKCk7XG4gICAgICBjb25zdCBkaXJlYyA9IGRpcmVjdGlvbi5kaXJlY3Rpb247XG5cbiAgICAgIGlmIChuZXdSb3cgJiYgY29scy5pbmNsdWRlcyhuZXdDb2wpKSB7XG4gICAgICAgIGNvbnN0IG5ld0Nvb3JkaW5hdGUgPSBuZXdSb3cgKyBuZXdDb2w7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvb3JkaW5hdGVNYXAuaGFzT3duUHJvcGVydHkobmV3Q29vcmRpbmF0ZSkgJiZcbiAgICAgICAgICAhYm9hcmQuaGl0Q2VsbHMuaW5jbHVkZXMobmV3Q29vcmRpbmF0ZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgYWRqYWNlbnRDZWxscy5wdXNoKHsgY29vcmRpbmF0ZTogbmV3Q29vcmRpbmF0ZSwgZGlyZWN0aW9uOiBkaXJlYyB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhZGphY2VudENlbGxzO1xuICB9XG5cbiAgZ2V0TmV4dEF0dGFjayhjb29yZGluYXRlLCBib2FyZCkge1xuICAgIGlmICh0aGlzLnByZXZDb21wSGl0Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGxhc3RIaXQgPSB0aGlzLnByZXZDb21wSGl0W3RoaXMucHJldkNvbXBIaXQubGVuZ3RoIC0gMV07XG4gICAgICBjb25zdCBwb3NzaWJsZUNlbGxzID0gdGhpcy5nZXRBZGphY2VudENlbGxzKFxuICAgICAgICBsYXN0SGl0LmNvb3JkaW5hdGUsXG4gICAgICAgIGJvYXJkXG4gICAgICApLmZpbHRlcigoY2VsbCkgPT4gY2VsbC5kaXJlY3Rpb24gPT09IGxhc3RIaXQuZGlyZWN0aW9uKTtcbiAgICAgIGlmIChwb3NzaWJsZUNlbGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ2VsbHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVDZWxscy5sZW5ndGgpXVxuICAgICAgICAgIC5jb29yZGluYXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFkamFjZW50Q2VsbHMgPSB0aGlzLmdldEFkamFjZW50Q2VsbHMoY29vcmRpbmF0ZSwgYm9hcmQpO1xuICAgIGNvbnN0IHZhbGlkQWRqYWNlbnRDZWxscyA9IGFkamFjZW50Q2VsbHMuZmlsdGVyKFxuICAgICAgKGNlbGwpID0+ICFib2FyZC5oaXRDZWxscy5pbmNsdWRlcyhjZWxsLmNvb3JkaW5hdGUpXG4gICAgKTtcblxuICAgIGlmICh2YWxpZEFkamFjZW50Q2VsbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZUNvb3JkaW5hdGUoYm9hcmQpO1xuICAgIH1cblxuICAgIGNvbnN0IG5leHRBdHRhY2sgPVxuICAgICAgdmFsaWRBZGphY2VudENlbGxzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbGlkQWRqYWNlbnRDZWxscy5sZW5ndGgpXTtcbiAgICB0aGlzLnByZXZDb21wSGl0LnB1c2gobmV4dEF0dGFjayk7XG4gICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gbmV4dEF0dGFjay5kaXJlY3Rpb247XG5cbiAgICByZXR1cm4gbmV4dEF0dGFjay5jb29yZGluYXRlO1xuICB9XG5cbiAgYXN5bmMgY29tcHV0ZXJBdHRhY2soKSB7XG4gICAgaWYgKHRoaXMudHVybiAhPT0gJ2NvbXB1dGVyJykgcmV0dXJuOyAvLyBQcmV2ZW50IGNvbXB1dGVyIGZyb20gYXR0YWNraW5nIG91dCBvZiB0dXJuXG5cbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCBjb29yZGluYXRlO1xuXG4gICAgaWYgKHRoaXMubmV4dENvbXBBdHRhY2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29vcmRpbmF0ZSA9IHRoaXMuZ2VuZXJhdGVDb29yZGluYXRlKHRoaXMucGxheWVyQm9hcmQpO1xuICAgICAgdGhpcy5wcmV2Q29tcEF0dGFjay5wdXNoKGNvb3JkaW5hdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb29yZGluYXRlID0gdGhpcy5uZXh0Q29tcEF0dGFjaztcbiAgICAgIHRoaXMucHJldkNvbXBBdHRhY2sucHVzaChjb29yZGluYXRlKTtcbiAgICB9XG5cbiAgICByZXN1bHQgPSB0aGlzLnJlY2VpdmVBdHRhY2sodGhpcy5wbGF5ZXJCb2FyZCwgY29vcmRpbmF0ZSk7XG5cbiAgICB0aGlzLnVpLnVwZGF0ZVVJKGNvb3JkaW5hdGUsIHJlc3VsdCwgdHJ1ZSk7XG5cbiAgICBpZiAocmVzdWx0ID09PSAnaGl0Jykge1xuICAgICAgdGhpcy5wcmV2Q29tcEhpdC5wdXNoKHsgY29vcmRpbmF0ZSwgZGlyZWN0aW9uOiB0aGlzLmN1cnJlbnREaXJlY3Rpb24gfSk7XG4gICAgICB0aGlzLm5leHRDb21wQXR0YWNrID0gdGhpcy5nZXROZXh0QXR0YWNrKGNvb3JkaW5hdGUsIHRoaXMucGxheWVyQm9hcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5leHRDb21wQXR0YWNrID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2tHYW1lT3ZlcigpO1xuICAgIGlmICghdGhpcy5nYW1lT3Zlcikge1xuICAgICAgdGhpcy50dXJuID0gJ3BsYXllcic7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tHYW1lT3ZlcigpIHtcbiAgICBpZiAodGhpcy5jb21wdXRlckJvYXJkLnNoaXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy51aS5zaG93V2lubmVyKCdwbGF5ZXInKTtcbiAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXJCb2FyZC5zaGlwcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMudWkuc2hvd1dpbm5lcignY29tcHV0ZXInKTtcbiAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHdhaXRGb3JEZWxheShtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICB2YWxpZGF0ZVNoaXBQbGFjZW1lbnQsXG4gIHZhbGlkYXRlWUJvdW5kYXJ5LFxuICB2YWxpZGF0ZVhCb3VuZGFyeSxcbn0gZnJvbSAnLi92YWxpZGF0ZSc7XG5cbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmV4cG9ydCBjbGFzcyBnYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJvd3MgPSAxMDtcbiAgICB0aGlzLmNvbHVtbnMgPSAxMDtcbiAgICB0aGlzLmJvYXJkID0gW107XG4gICAgdGhpcy5jb29yZGluYXRlTWFwID0ge307XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIHRoaXMuaGl0Q2VsbHMgPSBbXTtcbiAgICB0aGlzLmNyZWF0ZUdhbWVib2FyZCgpO1xuICAgIHRoaXMubWlzc2VkSGl0cyA9IFtdO1xuICAgIHRoaXMuZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNyZWF0ZUdhbWVib2FyZCgpIHtcbiAgICBjb25zdCBsZXR0ZXJzID0gJ0FCQ0RFRkdISUonO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgdGhpcy5ib2FyZFtpXSA9IG5ldyBBcnJheSh0aGlzLmNvbHVtbnMpO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBgJHtsZXR0ZXJzW2ldfSR7aiArIDF9YDtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW2ksIGosIDBdO1xuXG4gICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSBbY29vcmRpbmF0ZSwgZmFsc2VdOyAvLyBJbml0aWFsaXplIHdpdGggY29vcmRpbmF0ZSBhbmQgb2NjdXBpZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLmNvb3JkaW5hdGVNYXBbY29vcmRpbmF0ZS50b1VwcGVyQ2FzZSgpXSA9IHZhbHVlcztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvY2N1cHlDZWxsKGNvb3JkaW5hdGUsIHNoaXApIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmNvb3JkaW5hdGVNYXBbY29vcmRpbmF0ZV07XG5cbiAgICBpZiAoIXZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNvb3JkaW5hdGU6ICR7Y29vcmRpbmF0ZX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBbcm93LCBjb2xdID0gdmFsdWVzO1xuICAgIGNvbnN0IFtfLCBpc09jY3VwaWVkXSA9IHRoaXMuYm9hcmRbcm93XVtjb2xdO1xuXG4gICAgaWYgKCFpc09jY3VwaWVkKSB7XG4gICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IFtjb29yZGluYXRlLCB0cnVlXTtcblxuICAgICAgc2hpcC5vY2N1cGllZENlbGxzLnB1c2godGhpcy5ib2FyZFtyb3ddW2NvbF0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhpc3Rpbmcgc2hpcCB3aXRoaW4gY29vcmRpbmF0ZXMnKTtcbiAgICB9XG4gIH1cbiAgcGxhY2VTaGlwKGNvb3JkaW5hdGVzLCBzaGlwU2l6ZSwgb3JpZW50YXRpb24pIHtcbiAgICB2YWxpZGF0ZVNoaXBQbGFjZW1lbnQoY29vcmRpbmF0ZXMsIHNoaXBTaXplLCBvcmllbnRhdGlvbik7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHNoaXBTaXplLCBjb29yZGluYXRlcyk7XG4gICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnWScpIHtcbiAgICAgIGxldCBbc3RhcnRSb3csIHN0YXJ0Q29sXSA9IHRoaXMuY29vcmRpbmF0ZU1hcFtjb29yZGluYXRlc107XG4gICAgICBjb25zdCBsZXR0ZXJzID0gJ0FCQ0RFRkdISUonO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZTsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHN0YXJ0Um93ICsgaTtcbiAgICAgICAgdmFsaWRhdGVZQm91bmRhcnkodGhpcy5yb3dzLCByb3cpOyAvLyB2YWxpZGF0aW9uXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb29yZGluYXRlID0gYCR7bGV0dGVyc1tyb3ddfSR7c3RhcnRDb2wgKyAxfWA7XG4gICAgICAgIHRoaXMub2NjdXB5Q2VsbChjdXJyZW50Q29vcmRpbmF0ZSwgc2hpcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnWCcpIHtcbiAgICAgIGxldCBbc3RhcnRSb3csIHN0YXJ0Q29sXSA9IHRoaXMuY29vcmRpbmF0ZU1hcFtjb29yZGluYXRlc107XG4gICAgICBjb25zdCBsZXR0ZXJzID0gJ0FCQ0RFRkdISUonO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZTsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNvbCA9IHN0YXJ0Q29sICsgaTtcbiAgICAgICAgdmFsaWRhdGVYQm91bmRhcnkoY29sLCB0aGlzLmNvbHVtbnMpOyAvLyB2YWxpZGF0aW9uXG5cbiAgICAgICAgY29uc3QgY3VycmVudENvb3JkaW5hdGUgPSBgJHtsZXR0ZXJzW3N0YXJ0Um93XX0ke2NvbCArIDF9YDtcbiAgICAgICAgdGhpcy5vY2N1cHlDZWxsKGN1cnJlbnRDb29yZGluYXRlLCBzaGlwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihzaGlwU2l6ZSwgY29vcmRpbmF0ZXMpIHtcbiAgICB0aGlzLnNoaXBTaXplID0gc2hpcFNpemU7XG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMub2NjdXBpZWRDZWxscyA9IFtdO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5pZGVudGl0eSA9IGdlbmVyYXRlVW5pcXVlSWQoKTsgLy8gR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIHRoZSBzaGlwXG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzICs9IDE7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGl0cyA+PSB0aGlzLnNoaXBTaXplO1xuICB9XG5cbiAgcmVtb3ZlT2NjdXBpZWRDZWxsKGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMub2NjdXBpZWRDZWxscy5pbmRleE9mKGNvb3JkaW5hdGUpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMub2NjdXBpZWRDZWxscy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgYSB1bmlxdWUgSURcbmZ1bmN0aW9uIGdlbmVyYXRlVW5pcXVlSWQoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgOSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDtcbiIsImV4cG9ydCBjbGFzcyBVSSB7XG4gIGNvbnN0cnVjdG9yKGdhbWVib2FyZCkge1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gZ2FtZWJvYXJkO1xuICAgIHRoaXMuY3JlYXRlR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5nYW1lTW9kZSA9ICdpbml0aWFsJzsgLy8gSW5pdGlhbCBnYW1lIG1vZGVcbiAgICB0aGlzLmN1cnJlbnRTaGlwSW5kZXggPSAwOyAvLyBUcmFjayB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgc2hpcCB0byBiZSBwbGFjZWRcbiAgICB0aGlzLnNoaXBzVG9QbGFjZVBsYXllciA9IFtcbiAgICAgIHsgc2l6ZTogNSwgb3JpZW50YXRpb246ICdYJyB9LFxuICAgICAgeyBzaXplOiA0LCBvcmllbnRhdGlvbjogJ1gnIH0sXG4gICAgICB7IHNpemU6IDMsIG9yaWVudGF0aW9uOiAnWCcgfSxcbiAgICAgIHsgc2l6ZTogMywgb3JpZW50YXRpb246ICdYJyB9LFxuICAgICAgeyBzaXplOiAyLCBvcmllbnRhdGlvbjogJ1gnIH0sXG4gICAgXTtcbiAgICB0aGlzLmN1cnJlbnRPcmllbnRhdGlvbiA9ICdYJzsgLy8gRGVmYXVsdCBvcmllbnRhdGlvbiBpcyBob3Jpem9udGFsXG4gICAgdGhpcy5pbml0T3JpZW50YXRpb25CdXR0b24oKTtcbiAgfVxuXG4gIGNyZWF0ZUdhbWVib2FyZCgpIHtcbiAgICBjb25zdCBwbGF5ZXJHcmlkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckdyaWRDb250YWluZXInKTtcbiAgICBjb25zdCBjb21wdXRlckdyaWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5jb21wdXRlckdyaWRDb250YWluZXInXG4gICAgKTtcblxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICAgIC8vIENyZWF0ZSBjZWxsIGZvciBwbGF5ZXIgZ3JpZFxuICAgICAgICBjb25zdCBwbGF5ZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllckNlbGwuY2xhc3NMaXN0LmFkZCgncGxheWVyQ2VsbCcpO1xuICAgICAgICBjb25zdCBjb29yZGluYXRlID0gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIHJvdyl9JHtjb2wgKyAxfWA7XG4gICAgICAgIHBsYXllckNlbGwuZGF0YXNldC5jb29yZGluYXRlID0gY29vcmRpbmF0ZTtcbiAgICAgICAgcGxheWVyQ2VsbC5kYXRhc2V0LmNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgcGxheWVyR3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJDZWxsKTtcblxuICAgICAgICAvLyBDcmVhdGUgY2VsbCBmb3IgY29tcHV0ZXIgZ3JpZFxuICAgICAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ2NvbXBDZWxsJyk7XG4gICAgICAgIGNvbXB1dGVyQ2VsbC5kYXRhc2V0LmNvb3JkaW5hdGUgPSBjb29yZGluYXRlO1xuICAgICAgICBjb21wdXRlckNlbGwuZGF0YXNldC5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIGNvbXB1dGVyR3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlckNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluaXRPcmllbnRhdGlvbkJ1dHRvbigpIHtcbiAgICBjb25zdCBvcmllbnRhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG9yaWVudGF0aW9uQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ29yaWVudGF0aW9uQnV0dG9uJyk7XG4gICAgb3JpZW50YXRpb25CdXR0b24udGV4dENvbnRlbnQgPSAnQ2hhbmdlIE9yaWVudGF0aW9uJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG9yaWVudGF0aW9uQnV0dG9uKTtcblxuICAgIG9yaWVudGF0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50T3JpZW50YXRpb24gPSB0aGlzLmN1cnJlbnRPcmllbnRhdGlvbiA9PT0gJ1gnID8gJ1knIDogJ1gnO1xuICAgICAgb3JpZW50YXRpb25CdXR0b24udGV4dENvbnRlbnQgPSBgT3JpZW50YXRpb246ICR7dGhpcy5jdXJyZW50T3JpZW50YXRpb259YDtcbiAgICB9KTtcbiAgfVxuXG4gIGdhbWVTdGF0ZShzdGFydEdhbWVDYWxsYmFjaykge1xuICAgIGNvbnN0IGdhbWVTdGFydGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0QnRuJyk7XG4gICAgZ2FtZVN0YXJ0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmdhbWVNb2RlID0gJ3BsYWNlbWVudCc7XG4gICAgICBzdGFydEdhbWVDYWxsYmFjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgYmluZEV2ZW50TGlzdGVuZXJzKGlzUGxheWVyVHVybiwgcmVjZWl2ZUF0dGFja0ZuKSB7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcENlbGwnKTtcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpIHx8XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3NlZCcpIHx8XG4gICAgICAgICAgIWlzUGxheWVyVHVybiB8fFxuICAgICAgICAgIHRoaXMuZ2FtZU1vZGUgIT09ICdwbGF5J1xuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGNlbGwuZGF0YXNldC5jb29yZGluYXRlO1xuICAgICAgICByZWNlaXZlQXR0YWNrRm4oY29vcmRpbmF0ZSk7IC8vIFBhc3MgdGhlIGNvb3JkaW5hdGUgYXJndW1lbnRcbiAgICAgICAgY2VsbC5kYXRhc2V0LmNsaWNrZWQgPSAndHJ1ZSc7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHBsYXllckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllckNlbGwnKTtcbiAgICBwbGF5ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5nYW1lTW9kZSA9PT0gJ3BsYWNlbWVudCcpIHtcbiAgICAgICAgICBjb25zdCBjb29yZGluYXRlID0gY2VsbC5kYXRhc2V0LmNvb3JkaW5hdGU7XG4gICAgICAgICAgY29uc3QgY3VycmVudFNoaXAgPSB0aGlzLnNoaXBzVG9QbGFjZVBsYXllclt0aGlzLmN1cnJlbnRTaGlwSW5kZXhdO1xuICAgICAgICAgIGlmIChjdXJyZW50U2hpcCkge1xuICAgICAgICAgICAgY29uc3QgeyBzaXplIH0gPSBjdXJyZW50U2hpcDtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy5wbGFjZVBsYXllclNoaXAoY29vcmRpbmF0ZSwgc2l6ZSwgdGhpcy5jdXJyZW50T3JpZW50YXRpb24pXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVTaGlwT25VSShcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlLFxuICAgICAgICAgICAgICAgIHNpemUsXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T3JpZW50YXRpb24sXG4gICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSW5kZXgrKztcbiAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNoaXBJbmRleCA+PSB0aGlzLnNoaXBzVG9QbGFjZVBsYXllci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVNb2RlID0gJ3BsYXknO1xuICAgICAgICAgICAgICAgIHRoaXMub25TaGlwc1BsYWNlZCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHBsYWNlUGxheWVyU2hpcChjb29yZGluYXRlLCBzaXplLCBvcmllbnRhdGlvbikge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmdhbWVib2FyZC5wbGFjZVNoaXAoY29vcmRpbmF0ZSwgc2l6ZSwgb3JpZW50YXRpb24pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBwbGFjZSBzaGlwOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlU2hpcE9uVUkoY29vcmRpbmF0ZSwgc2l6ZSwgb3JpZW50YXRpb24sIGlzUGxheWVyQm9hcmQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHN0YXJ0Um93ID0gY29vcmRpbmF0ZS5jaGFyQ29kZUF0KDApIC0gNjU7IC8vIENvbnZlcnQgQS1KIHRvIDAtOVxuICAgIGNvbnN0IHN0YXJ0Q29sID0gcGFyc2VJbnQoY29vcmRpbmF0ZS5zbGljZSgxKSkgLSAxOyAvLyBDb252ZXJ0IDEtMTAgdG8gMC05XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgbGV0IGNlbGxDb29yZGluYXRlO1xuICAgICAgaWYgKG9yaWVudGF0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICd4Jykge1xuICAgICAgICBjZWxsQ29vcmRpbmF0ZSA9IGAke1N0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBzdGFydFJvdyl9JHtzdGFydENvbCArIGkgKyAxfWA7XG4gICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICd5Jykge1xuICAgICAgICBjZWxsQ29vcmRpbmF0ZSA9IGAke1N0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBzdGFydFJvdyArIGkpfSR7c3RhcnRDb2wgKyAxfWA7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNlbGxTZWxlY3RvciA9IGlzUGxheWVyQm9hcmQgPyAnLnBsYXllckNlbGwnIDogJy5jb21wQ2VsbCc7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYCR7Y2VsbFNlbGVjdG9yfVtkYXRhLWNvb3JkaW5hdGU9XCIke2NlbGxDb29yZGluYXRlfVwiXWBcbiAgICAgICk7XG5cbiAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVVJKGNvb3JkaW5hdGUsIHJlc3VsdCwgaXNQbGF5ZXJCb2FyZCkge1xuICAgIGNvbnN0IGNlbGxTZWxlY3RvciA9IGlzUGxheWVyQm9hcmQgPyAnLnBsYXllckNlbGwnIDogJy5jb21wQ2VsbCc7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgJHtjZWxsU2VsZWN0b3J9W2RhdGEtY29vcmRpbmF0ZT1cIiR7Y29vcmRpbmF0ZX1cIl1gXG4gICAgKTtcblxuICAgIGlmIChjZWxsKSB7XG4gICAgICBpZiAocmVzdWx0ID09PSAnbWlzcycpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKTtcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9ICd4JztcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSAnc3VuaycpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGl0Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ2hpdCcpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzaG93V2lubmVyKHdpbm5lcikge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keScpO1xuICAgIGNvbnN0IGdhbWVPdmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FtZU92ZXJEaXYuY2xhc3NMaXN0LmFkZCgnZ2FtZU92ZXJDb250YWluZXInKTtcbiAgICBnYW1lT3ZlckRpdi5pbm5lckhUTUwgPSAnR2FtZSBvdmVyLCAnICsgYCR7d2lubmVyfWAgKyAnIHdpbnMnO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJEaXYpO1xuICB9XG5cbiAgb25TaGlwc1BsYWNlZCgpIHtcbiAgICAvLyBDYWxsYmFjayB0byBiZSBzZXQgYnkgdGhlIEdhbWUgY2xhc3MgdG8gc3RhcnQgdGhlIGFjdHVhbCBnYW1lcGxheVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVTaGlwUGxhY2VtZW50KGNvb3JkaW5hdGVzLCBzaGlwU2l6ZSwgb3JpZW50YXRpb24pIHtcbiAgLy8gVmFsaWRhdGlvblxuICBpZiAoIS9eKFtBLUphLWpdKSgxMHxbMS05XSkkLy50ZXN0KGNvb3JkaW5hdGVzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb29yZGluYXRlcycpO1xuICB9XG4gIGNvbnN0IHZhbGlkU2l6ZXMgPSBbMSwgMiwgMywgNCwgNV07XG4gIGlmICghdmFsaWRTaXplcy5pbmNsdWRlcyhzaGlwU2l6ZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hpcCBzaXplJyk7XG4gIH1cbiAgY29uc3QgdmFsaWRPcmllbnRhdGlvbnMgPSBbJ1gnLCAnWSddO1xuICBpZiAoIXZhbGlkT3JpZW50YXRpb25zLmluY2x1ZGVzKG9yaWVudGF0aW9uLnRvVXBwZXJDYXNlKCkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG9yaWVudGF0aW9uJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ2VsbChib2FyZCwgcm93LCBjb2wsIGlzT2NjdXBpZWQpIHtcbiAgaWYgKCFpc09jY3VwaWVkKSB7XG4gICAgYm9hcmRbcm93XVtjb2xdWzFdID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTsgLy8gQ2VsbCB3YXMgc3VjY2Vzc2Z1bGx5IG9jY3VwaWVkXG4gIH0gZWxzZSB7XG4gICAgLy8gUmVqZWN0IGlmIHRoZSBjZWxsIGlzIGFscmVhZHkgb2NjdXBpZWRcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4aXN0aW5nIHNoaXAgd2l0aGluIGNvb3JkaW5hdGVzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlWUJvdW5kYXJ5KHJvd3MsIHJvdykge1xuICBpZiAocm93ID49IHJvd3MpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ091dCBvZiBib3VuZGFyaWVzJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlWEJvdW5kYXJ5KGNvbCwgY29sdW1ucykge1xuICBpZiAoY29sID49IGNvbHVtbnMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ091dCBvZiBib3VuZGFyaWVzJyk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVBdHRhY2tFcnJvcihib2FyZCwgY29vcmRpbmF0ZXMpIHtcbiAgY29uc3QgY29vcmRVcHBlciA9IGNvb3JkaW5hdGVzLnRvVXBwZXJDYXNlKCk7XG4gIGlmICghYm9hcmQuY29vcmRpbmF0ZU1hcFtjb29yZFVwcGVyXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBjb29yZGluYXRlOiAke2Nvb3JkaW5hdGVzfWApO1xuICB9XG5cbiAgY29uc3QgW3JvdywgY29sXSA9IGJvYXJkLmNvb3JkaW5hdGVNYXBbY29vcmRVcHBlcl07XG4gIGNvbnN0IGNlbGwgPSBib2FyZC5ib2FyZFtyb3ddW2NvbF07XG4gIGlmICghY2VsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBjZWxsOiBbJHtyb3d9LCAke2NvbH1dYCk7XG4gIH1cblxuICByZXR1cm4geyByb3csIGNvbCwgY2VsbCB9O1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHl7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmdhbWVDb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGxheWVyR3JpZENvbnRhaW5lciAsIC5jb21wdXRlckdyaWRDb250YWluZXJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuaGVpZ2h0OiA1MHZoO1xud2lkdGg6IDQwdnc7XG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG5ncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLmNvbXBDZWxsLCAucGxheWVyQ2VsbHtib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbndpZHRoOiAxMDAlO1xuaGVpZ2h0OiAxMDAlO31cblxuXG5cbi5oaXR7XG5iYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudFxufVxuXG4uc3Vua3tiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDt9XG5cbi5taXNzZWR7XG5jb2xvcjogd2hpdGU7XG5tYXJnaW46IG5vbmU7XG5mb250LXNpemU6IDEuMnJlbTtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7fVxuXG5cbi5nYW1lT3ZlckNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idXR0b25Db250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNoaXB7YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7fWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QixZQUFZO0FBQ1osV0FBVztBQUNYLGFBQWE7QUFDYixzQ0FBc0M7QUFDdEMsbUNBQW1DO0FBQ25DOztBQUVBLHVCQUF1Qix1QkFBdUI7QUFDOUMsV0FBVztBQUNYLFlBQVksQ0FBQzs7OztBQUliO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLGdDQUFnQyxDQUFDOztBQUV2QztBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsbUJBQW1CLENBQUM7OztBQUdwQjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQSxNQUFNLHVCQUF1QixDQUFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5nYW1lQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucGxheWVyR3JpZENvbnRhaW5lciAsIC5jb21wdXRlckdyaWRDb250YWluZXJ7XFxuYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG5oZWlnaHQ6IDUwdmg7XFxud2lkdGg6IDQwdnc7XFxuZGlzcGxheTogZ3JpZDtcXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG5ncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmNvbXBDZWxsLCAucGxheWVyQ2VsbHtib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG53aWR0aDogMTAwJTtcXG5oZWlnaHQ6IDEwMCU7fVxcblxcblxcblxcbi5oaXR7XFxuYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlICFpbXBvcnRhbnRcXG59XFxuXFxuLnN1bmt7YmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7fVxcblxcbi5taXNzZWR7XFxuY29sb3I6IHdoaXRlO1xcbm1hcmdpbjogbm9uZTtcXG5mb250LXNpemU6IDEuMnJlbTtcXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7fVxcblxcblxcbi5nYW1lT3ZlckNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5idXR0b25Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2hpcHtiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazt9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2dhbWUuanMnO1xuaW1wb3J0ICogYXMgY3NzIGZyb20gJy4vc3R5bGUuY3NzJztcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImluZm8iLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJhbGxvd0FycmF5TGlrZSIsIml0IiwiQXJyYXkiLCJpc0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiRiIsIl9lIiwibm9ybWFsQ29tcGxldGlvbiIsImRpZEVyciIsInN0ZXAiLCJfZTIiLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiZnJvbSIsInRlc3QiLCJhcnIiLCJsZW4iLCJhcnIyIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiX3RvUHJvcGVydHlLZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfdG9QcmltaXRpdmUiLCJTdHJpbmciLCJ0b1ByaW1pdGl2ZSIsIk51bWJlciIsImhhbmRsZUF0dGFja0Vycm9yIiwiZ2FtZWJvYXJkIiwiVUkiLCJHYW1lIiwicGxheWVyQm9hcmQiLCJjb21wdXRlckJvYXJkIiwidHVybiIsInBsYXllcldpbnMiLCJjb21wdXRlcldpbnMiLCJnYW1lT3ZlciIsInByZXZDb21wSGl0IiwicHJldkNvbXBBdHRhY2siLCJuZXh0Q29tcEF0dGFjayIsImN1cnJlbnREaXJlY3Rpb24iLCJnYW1lTW9kZSIsInVpIiwiZ2FtZVN0YXRlIiwic3RhcnRQbGFjZW1lbnRNb2RlIiwiYmluZCIsIm9uU2hpcHNQbGFjZWQiLCJzdGFydEdhbWUiLCJwbGFjZUNvbXB1dGVyU2hpcHMiLCJiaW5kRXZlbnRMaXN0ZW5lcnMiLCJwbGF5ZXJSZWNlaXZlQXR0YWNrIiwiX3RoaXMiLCJzaGlwc1RvUGxhY2VDb21wdXRlciIsImNvb3JkaW5hdGVzIiwic2l6ZSIsIm9yaWVudGF0aW9uIiwic2hpcCIsInBsYWNlU2hpcCIsInRvVXBwZXJDYXNlIiwidXBkYXRlU2hpcE9uVUkiLCJjb25jYXQiLCJtZXNzYWdlIiwiX3RoaXMyIiwicmVzdWx0IiwicmVjZWl2ZUF0dGFjayIsInVwZGF0ZVVJIiwiY2hlY2tHYW1lT3ZlciIsInNldFRpbWVvdXQiLCJjb21wdXRlckF0dGFjayIsImJvYXJkIiwiX2hhbmRsZUF0dGFja0Vycm9yIiwicm93IiwiY29sIiwiY2VsbCIsImhhbmRsZU1pc3MiLCJjb29yZGluYXRlIiwicGFyZW50U2hpcCIsImZpbmRQYXJlbnRTaGlwIiwiaGFuZGxlSGl0IiwiaGl0Q2VsbHMiLCJvY2N1cGllZENlbGxzIiwiaGFuZGxlU3VuayIsIm1pc3NlZEhpdHMiLCJfaXRlcmF0b3IiLCJzaGlwcyIsIl9zdGVwIiwiaW5jbHVkZXMiLCJoaXQiLCJyZW1vdmVPY2N1cGllZENlbGwiLCJfdGhpczMiLCJmaWx0ZXIiLCJnZW5lcmF0ZUNvb3JkaW5hdGUiLCJhdmFpbGFibGVDZWxscyIsImNvb3JkaW5hdGVNYXAiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdldEFkamFjZW50Q2VsbHMiLCJkaXJlY3Rpb25zIiwiZGlyZWN0aW9uIiwicm93cyIsImNvbHMiLCJjdXJyZW50Um93IiwiY3VycmVudENvbCIsImFkamFjZW50Q2VsbHMiLCJuZXdSb3ciLCJpbmRleE9mIiwibmV3Q29sIiwicGFyc2VJbnQiLCJkaXJlYyIsIm5ld0Nvb3JkaW5hdGUiLCJnZXROZXh0QXR0YWNrIiwibGFzdEhpdCIsInBvc3NpYmxlQ2VsbHMiLCJ2YWxpZEFkamFjZW50Q2VsbHMiLCJuZXh0QXR0YWNrIiwiX2NvbXB1dGVyQXR0YWNrIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJzaG93V2lubmVyIiwid2FpdEZvckRlbGF5IiwibXMiLCJ2YWxpZGF0ZVNoaXBQbGFjZW1lbnQiLCJ2YWxpZGF0ZVlCb3VuZGFyeSIsInZhbGlkYXRlWEJvdW5kYXJ5IiwiU2hpcCIsImNvbHVtbnMiLCJjcmVhdGVHYW1lYm9hcmQiLCJnYW1lU3RhcnRlZCIsImxldHRlcnMiLCJqIiwib2NjdXB5Q2VsbCIsIl92YWx1ZXMiLCJfc2xpY2VkVG9BcnJheSIsIl90aGlzJGJvYXJkJHJvdyRjb2wiLCJfIiwiaXNPY2N1cGllZCIsInNoaXBTaXplIiwiX3RoaXMkY29vcmRpbmF0ZU1hcCRjIiwic3RhcnRSb3ciLCJzdGFydENvbCIsImN1cnJlbnRDb29yZGluYXRlIiwiX3RoaXMkY29vcmRpbmF0ZU1hcCRjMiIsImhpdHMiLCJpZGVudGl0eSIsImdlbmVyYXRlVW5pcXVlSWQiLCJpc1N1bmsiLCJpbmRleCIsInNwbGljZSIsInN1YnN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjdXJyZW50U2hpcEluZGV4Iiwic2hpcHNUb1BsYWNlUGxheWVyIiwiY3VycmVudE9yaWVudGF0aW9uIiwiaW5pdE9yaWVudGF0aW9uQnV0dG9uIiwicGxheWVyR3JpZENvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbXB1dGVyR3JpZENvbnRhaW5lciIsInBsYXllckNlbGwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZnJvbUNoYXJDb2RlIiwiZGF0YXNldCIsImNsaWNrZWQiLCJhcHBlbmRDaGlsZCIsImNvbXB1dGVyQ2VsbCIsIm9yaWVudGF0aW9uQnV0dG9uIiwidGV4dENvbnRlbnQiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZUNhbGxiYWNrIiwiZ2FtZVN0YXJ0ZXIiLCJpc1BsYXllclR1cm4iLCJyZWNlaXZlQXR0YWNrRm4iLCJjZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb250YWlucyIsInBsYXllckNlbGxzIiwiY3VycmVudFNoaXAiLCJwbGFjZVBsYXllclNoaXAiLCJjb25zb2xlIiwiaXNQbGF5ZXJCb2FyZCIsImNoYXJDb2RlQXQiLCJjZWxsQ29vcmRpbmF0ZSIsInRvTG93ZXJDYXNlIiwiY2VsbFNlbGVjdG9yIiwicmVtb3ZlIiwid2lubmVyIiwiZ2FtZU92ZXJEaXYiLCJpbm5lckhUTUwiLCJ2YWxpZFNpemVzIiwidmFsaWRPcmllbnRhdGlvbnMiLCJ2YWxpZGF0ZUNlbGwiLCJjb29yZFVwcGVyIiwiX2JvYXJkJGNvb3JkaW5hdGVNYXAkIiwiY3NzIiwiZ2FtZSJdLCJzb3VyY2VSb290IjoiIn0=
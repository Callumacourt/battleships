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
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var playerGridContainer = document.querySelector('.playerGridContainer');
var computerGridContainer = document.querySelector('.computerGridContainer');
var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);
    this.playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard();
    this.computerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard();
    this.turn = 'player';
    this.ui = new _ui__WEBPACK_IMPORTED_MODULE_1__.UI(this.computerBoard, playerGridContainer, computerGridContainer);
    this.placeShips();
    this.ui.bindEventListeners(this.turn === 'player');
  }
  _createClass(Game, [{
    key: "placeShips",
    value: function placeShips() {
      var _this = this;
      // Example ships with coordinates, sizes, and orientations for the computer board
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

      // Example ships with coordinates, sizes, and orientations for the player board
      var shipsToPlacePlayer = [{
        coordinates: 'F1',
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
          console.error("Failed to place ship: ".concat(error.message));
        }
      });
      shipsToPlacePlayer.forEach(function (ship) {
        var coordinates = ship.coordinates,
          size = ship.size,
          orientation = ship.orientation;
        try {
          _this.playerBoard.placeShip(coordinates.toUpperCase(), size, orientation.toUpperCase());
          _this.ui.updateShipOnUI(coordinates, size, orientation, true); // Pass `true` to indicate it's the player board
          console.log(_this.computerBoard);
        } catch (error) {
          console.error("Failed to place ship: ".concat(error.message));
        }
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
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
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
    this.coordinateMap = [];
    this.ships = [];
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
      this.gameStarted = true;
    }
  }, {
    key: "isGameOver",
    value: function isGameOver() {
      if (this.gameStarted === true && this.ships.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(coordinates) {
      var coordUpper = coordinates.toUpperCase();
      if (!this.coordinateMap[coordUpper]) {
        throw new Error("Invalid coordinate: ".concat(coordinates));
      }
      var _this$coordinateMap$c3 = _slicedToArray(this.coordinateMap[coordUpper], 2),
        row = _this$coordinateMap$c3[0],
        col = _this$coordinateMap$c3[1];
      var cell = this.board[row][col];
      if (!cell) {
        throw new Error("Invalid cell: [".concat(row, ", ").concat(col, "]"));
      }
      var _cell = _slicedToArray(cell, 2),
        _ = _cell[0],
        isOccupied = _cell[1];
      if (isOccupied === false) {
        this.board[row][col] = [coordinates, false, true]; // Set the 'isHit' flag to true for a miss
        this.missedHits.push(coordinates);
        return 'miss';
      } else {
        var coordinate = this.board[row][col];
        var parentShip;
        var _iterator = _createForOfIteratorHelper(this.ships),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var ship = _step.value;
            if (ship.occupiedCells.includes(coordinate)) {
              parentShip = ship;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        if (!parentShip) {
          throw new Error('Parent ship not found');
        }
        parentShip.hit();
        this.board[row][col][2] = true; // Set the 'isHit' flag to true for a hit

        if (parentShip.isSunk()) {
          parentShip.removeOccupiedCell(coordinate);
          if (parentShip.occupiedCells.length === 0) {
            this.ships = this.ships.filter(function (ship) {
              return ship !== parentShip;
            });
            this.isGameOver();
          }
          return 'sunk';
        }
        parentShip.removeOccupiedCell(coordinate);
        return 'hit';
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
    this.bindEventListeners();
  }
  _createClass(UI, [{
    key: "createGameboard",
    value: function createGameboard() {
      var playerGridContainer = document.querySelector('.playerGridContainer');
      var computerGridContainer = document.querySelector('.computerGridContainer');
      for (var row = 0; row < 10; row++) {
        for (var col = 0; col < 10; col++) {
          // Create cell for player grid
          var cell = document.createElement('div');
          cell.classList.add('playerCell');
          var coordinate = "".concat(String.fromCharCode(65 + row)).concat(col + 1);
          cell.dataset.coordinate = coordinate;
          cell.dataset.clicked = false;
          playerGridContainer.appendChild(cell);
        }
      }
      for (var _row = 0; _row < 10; _row++) {
        for (var _col = 0; _col < 10; _col++) {
          // Create cell for computer grid
          var _cell = document.createElement('div');
          _cell.classList.add('compCell');
          var _coordinate = "".concat(String.fromCharCode(65 + _row)).concat(_col + 1);
          _cell.dataset.coordinate = _coordinate;
          computerGridContainer.appendChild(_cell);
        }
      }
    }
  }, {
    key: "bindEventListeners",
    value: function bindEventListeners(isPlayerTurn) {
      var _this = this;
      var cells = document.querySelectorAll('.compCell');
      cells.forEach(function (cell) {
        cell.addEventListener('click', function () {
          console.log(_this.gameboard);
          if (cell.dataset.clicked === 'true' || !isPlayerTurn) {
            return;
          }
          var coordinate = cell.dataset.coordinate;
          var result = _this.gameboard.receiveAttack(coordinate);
          _this.updateUI(coordinate, result);
          cell.dataset.clicked = 'true';
        });
      });
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
        var compCell = document.querySelector(".compCell[data-coordinate=\"".concat(cellCoordinate, "\"]"));
        var playerCell = document.querySelector(".playerCell[data-coordinate=\"".concat(cellCoordinate, "\"]"));
        if (isPlayerBoard) {
          if (playerCell) {
            playerCell.classList.add('ship');
          }
        } else {
          if (compCell) {
            compCell.classList.add('ship');
          }
        }
      }
    }
  }, {
    key: "updateUI",
    value: function updateUI(coordinate, result) {
      var cell = document.querySelector(".compCell[data-coordinate=\"".concat(coordinate, "\"]"));
      if (result === 'miss') {
        cell.classList.add('missed');
        cell.textContent = 'x';
      } else if (result === 'sunk') {
        cell.classList.add('sunk');
        cell.classList.add('hit');
      } else {
        cell.classList.add('hit');
        console.log('s');
      }
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
/* harmony export */   validateCell: () => (/* binding */ validateCell),
/* harmony export */   validateShipPlacement: () => (/* binding */ validateShipPlacement),
/* harmony export */   validateXBoundary: () => (/* binding */ validateXBoundary),
/* harmony export */   validateYBoundary: () => (/* binding */ validateYBoundary)
/* harmony export */ });
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

.ship{background-color: red;}

.hit{
opacity: 80%;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,qBAAqB;IACrB,YAAY;AAChB;;AAEA;AACA,sBAAsB;AACtB,YAAY;AACZ,WAAW;AACX,aAAa;AACb,sCAAsC;AACtC,mCAAmC;AACnC;;AAEA,uBAAuB,uBAAuB;AAC9C,WAAW;AACX,YAAY,CAAC;;AAEb,MAAM,qBAAqB,CAAC;;AAE5B;AACA,YAAY;AACZ","sourcesContent":["body{\n    height: 100vh;\n}\n\n.gameContainer{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    justify-items: center;\n    height: 100%;\n}\n\n.playerGridContainer , .computerGridContainer{\nbackground-color: grey;\nheight: 50vh;\nwidth: 40vw;\ndisplay: grid;\ngrid-template-columns: repeat(10, 1fr);\ngrid-template-rows: repeat(10, 1fr);\n}\n\n.compCell, .playerCell{border: 2px solid black;\nwidth: 100%;\nheight: 100%;}\n\n.ship{background-color: red;}\n\n.hit{\nopacity: 80%;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FpQztBQUNFO0FBQ25DLElBQU1nRixJQUFJLEdBQUcsSUFBSTlILDBDQUFJLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vdWknO1xuXG5jb25zdCBwbGF5ZXJHcmlkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllckdyaWRDb250YWluZXInKTtcbmNvbnN0IGNvbXB1dGVyR3JpZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlckdyaWRDb250YWluZXInKTtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBsYXllckJvYXJkID0gbmV3IGdhbWVib2FyZCgpO1xuICAgIHRoaXMuY29tcHV0ZXJCb2FyZCA9IG5ldyBnYW1lYm9hcmQoKTtcbiAgICB0aGlzLnR1cm4gPSAncGxheWVyJztcblxuICAgIHRoaXMudWkgPSBuZXcgVUkoXG4gICAgICB0aGlzLmNvbXB1dGVyQm9hcmQsXG4gICAgICBwbGF5ZXJHcmlkQ29udGFpbmVyLFxuICAgICAgY29tcHV0ZXJHcmlkQ29udGFpbmVyXG4gICAgKTtcblxuICAgIHRoaXMucGxhY2VTaGlwcygpO1xuICAgIHRoaXMudWkuYmluZEV2ZW50TGlzdGVuZXJzKHRoaXMudHVybiA9PT0gJ3BsYXllcicpO1xuICB9XG5cbiAgcGxhY2VTaGlwcygpIHtcbiAgICAvLyBFeGFtcGxlIHNoaXBzIHdpdGggY29vcmRpbmF0ZXMsIHNpemVzLCBhbmQgb3JpZW50YXRpb25zIGZvciB0aGUgY29tcHV0ZXIgYm9hcmRcbiAgICBjb25zdCBzaGlwc1RvUGxhY2VDb21wdXRlciA9IFtcbiAgICAgIHsgY29vcmRpbmF0ZXM6ICdBMScsIHNpemU6IDUsIG9yaWVudGF0aW9uOiAnWCcgfSxcbiAgICAgIHsgY29vcmRpbmF0ZXM6ICdCMScsIHNpemU6IDQsIG9yaWVudGF0aW9uOiAnWCcgfSxcbiAgICAgIHsgY29vcmRpbmF0ZXM6ICdDMScsIHNpemU6IDMsIG9yaWVudGF0aW9uOiAnWCcgfSxcbiAgICAgIHsgY29vcmRpbmF0ZXM6ICdEMScsIHNpemU6IDMsIG9yaWVudGF0aW9uOiAnWCcgfSxcbiAgICAgIHsgY29vcmRpbmF0ZXM6ICdFMScsIHNpemU6IDIsIG9yaWVudGF0aW9uOiAnWCcgfSxcbiAgICBdO1xuXG4gICAgLy8gRXhhbXBsZSBzaGlwcyB3aXRoIGNvb3JkaW5hdGVzLCBzaXplcywgYW5kIG9yaWVudGF0aW9ucyBmb3IgdGhlIHBsYXllciBib2FyZFxuICAgIGNvbnN0IHNoaXBzVG9QbGFjZVBsYXllciA9IFtcbiAgICAgIHsgY29vcmRpbmF0ZXM6ICdGMScsIHNpemU6IDUsIG9yaWVudGF0aW9uOiAnWCcgfSxcbiAgICAgIHsgY29vcmRpbmF0ZXM6ICdCMScsIHNpemU6IDQsIG9yaWVudGF0aW9uOiAnWCcgfSxcbiAgICAgIHsgY29vcmRpbmF0ZXM6ICdDMScsIHNpemU6IDMsIG9yaWVudGF0aW9uOiAnWCcgfSxcbiAgICAgIHsgY29vcmRpbmF0ZXM6ICdEMScsIHNpemU6IDMsIG9yaWVudGF0aW9uOiAnWCcgfSxcbiAgICAgIHsgY29vcmRpbmF0ZXM6ICdFMScsIHNpemU6IDIsIG9yaWVudGF0aW9uOiAnWCcgfSxcbiAgICBdO1xuXG4gICAgc2hpcHNUb1BsYWNlQ29tcHV0ZXIuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgY29uc3QgeyBjb29yZGluYXRlcywgc2l6ZSwgb3JpZW50YXRpb24gfSA9IHNoaXA7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgIGNvb3JkaW5hdGVzLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgc2l6ZSxcbiAgICAgICAgICBvcmllbnRhdGlvbi50b1VwcGVyQ2FzZSgpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMudWkudXBkYXRlU2hpcE9uVUkoY29vcmRpbmF0ZXMsIHNpemUsIG9yaWVudGF0aW9uKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBwbGFjZSBzaGlwOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzaGlwc1RvUGxhY2VQbGF5ZXIuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgY29uc3QgeyBjb29yZGluYXRlcywgc2l6ZSwgb3JpZW50YXRpb24gfSA9IHNoaXA7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnBsYXllckJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICBjb29yZGluYXRlcy50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgIHNpemUsXG4gICAgICAgICAgb3JpZW50YXRpb24udG9VcHBlckNhc2UoKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnVpLnVwZGF0ZVNoaXBPblVJKGNvb3JkaW5hdGVzLCBzaXplLCBvcmllbnRhdGlvbiwgdHJ1ZSk7IC8vIFBhc3MgYHRydWVgIHRvIGluZGljYXRlIGl0J3MgdGhlIHBsYXllciBib2FyZFxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbXB1dGVyQm9hcmQpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIHBsYWNlIHNoaXA6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgdmFsaWRhdGVTaGlwUGxhY2VtZW50LFxuICB2YWxpZGF0ZVlCb3VuZGFyeSxcbiAgdmFsaWRhdGVYQm91bmRhcnksXG59IGZyb20gJy4vdmFsaWRhdGUnO1xuXG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5leHBvcnQgY2xhc3MgZ2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb3dzID0gMTA7XG4gICAgdGhpcy5jb2x1bW5zID0gMTA7XG4gICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgIHRoaXMuY29vcmRpbmF0ZU1hcCA9IFtdO1xuICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICB0aGlzLmNyZWF0ZUdhbWVib2FyZCgpO1xuICAgIHRoaXMubWlzc2VkSGl0cyA9IFtdO1xuICAgIHRoaXMuZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNyZWF0ZUdhbWVib2FyZCgpIHtcbiAgICBjb25zdCBsZXR0ZXJzID0gJ0FCQ0RFRkdISUonO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgdGhpcy5ib2FyZFtpXSA9IG5ldyBBcnJheSh0aGlzLmNvbHVtbnMpO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBgJHtsZXR0ZXJzW2ldfSR7aiArIDF9YDtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW2ksIGosIDBdO1xuXG4gICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSBbY29vcmRpbmF0ZSwgZmFsc2VdOyAvLyBJbml0aWFsaXplIHdpdGggY29vcmRpbmF0ZSBhbmQgb2NjdXBpZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLmNvb3JkaW5hdGVNYXBbY29vcmRpbmF0ZS50b1VwcGVyQ2FzZSgpXSA9IHZhbHVlcztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvY2N1cHlDZWxsKGNvb3JkaW5hdGUsIHNoaXApIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmNvb3JkaW5hdGVNYXBbY29vcmRpbmF0ZV07XG5cbiAgICBpZiAoIXZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNvb3JkaW5hdGU6ICR7Y29vcmRpbmF0ZX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBbcm93LCBjb2xdID0gdmFsdWVzO1xuICAgIGNvbnN0IFtfLCBpc09jY3VwaWVkXSA9IHRoaXMuYm9hcmRbcm93XVtjb2xdO1xuXG4gICAgaWYgKCFpc09jY3VwaWVkKSB7XG4gICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IFtjb29yZGluYXRlLCB0cnVlXTtcblxuICAgICAgc2hpcC5vY2N1cGllZENlbGxzLnB1c2godGhpcy5ib2FyZFtyb3ddW2NvbF0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhpc3Rpbmcgc2hpcCB3aXRoaW4gY29vcmRpbmF0ZXMnKTtcbiAgICB9XG4gIH1cbiAgcGxhY2VTaGlwKGNvb3JkaW5hdGVzLCBzaGlwU2l6ZSwgb3JpZW50YXRpb24pIHtcbiAgICB2YWxpZGF0ZVNoaXBQbGFjZW1lbnQoY29vcmRpbmF0ZXMsIHNoaXBTaXplLCBvcmllbnRhdGlvbik7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHNoaXBTaXplLCBjb29yZGluYXRlcyk7XG4gICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnWScpIHtcbiAgICAgIGxldCBbc3RhcnRSb3csIHN0YXJ0Q29sXSA9IHRoaXMuY29vcmRpbmF0ZU1hcFtjb29yZGluYXRlc107XG4gICAgICBjb25zdCBsZXR0ZXJzID0gJ0FCQ0RFRkdISUonO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZTsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHN0YXJ0Um93ICsgaTtcbiAgICAgICAgdmFsaWRhdGVZQm91bmRhcnkodGhpcy5yb3dzLCByb3cpOyAvLyB2YWxpZGF0aW9uXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb29yZGluYXRlID0gYCR7bGV0dGVyc1tyb3ddfSR7c3RhcnRDb2wgKyAxfWA7XG4gICAgICAgIHRoaXMub2NjdXB5Q2VsbChjdXJyZW50Q29vcmRpbmF0ZSwgc2hpcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnWCcpIHtcbiAgICAgIGxldCBbc3RhcnRSb3csIHN0YXJ0Q29sXSA9IHRoaXMuY29vcmRpbmF0ZU1hcFtjb29yZGluYXRlc107XG4gICAgICBjb25zdCBsZXR0ZXJzID0gJ0FCQ0RFRkdISUonO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZTsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNvbCA9IHN0YXJ0Q29sICsgaTtcbiAgICAgICAgdmFsaWRhdGVYQm91bmRhcnkoY29sLCB0aGlzLmNvbHVtbnMpOyAvLyB2YWxpZGF0aW9uXG5cbiAgICAgICAgY29uc3QgY3VycmVudENvb3JkaW5hdGUgPSBgJHtsZXR0ZXJzW3N0YXJ0Um93XX0ke2NvbCArIDF9YDtcbiAgICAgICAgdGhpcy5vY2N1cHlDZWxsKGN1cnJlbnRDb29yZGluYXRlLCBzaGlwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmdhbWVTdGFydGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGlzR2FtZU92ZXIoKSB7XG4gICAgaWYgKHRoaXMuZ2FtZVN0YXJ0ZWQgPT09IHRydWUgJiYgdGhpcy5zaGlwcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgIGNvbnN0IGNvb3JkVXBwZXIgPSBjb29yZGluYXRlcy50b1VwcGVyQ2FzZSgpO1xuICAgIGlmICghdGhpcy5jb29yZGluYXRlTWFwW2Nvb3JkVXBwZXJdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgY29vcmRpbmF0ZTogJHtjb29yZGluYXRlc31gKTtcbiAgICB9XG5cbiAgICBjb25zdCBbcm93LCBjb2xdID0gdGhpcy5jb29yZGluYXRlTWFwW2Nvb3JkVXBwZXJdO1xuICAgIGNvbnN0IGNlbGwgPSB0aGlzLmJvYXJkW3Jvd11bY29sXTtcbiAgICBpZiAoIWNlbGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBjZWxsOiBbJHtyb3d9LCAke2NvbH1dYCk7XG4gICAgfVxuXG4gICAgY29uc3QgW18sIGlzT2NjdXBpZWRdID0gY2VsbDtcbiAgICBpZiAoaXNPY2N1cGllZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gW2Nvb3JkaW5hdGVzLCBmYWxzZSwgdHJ1ZV07IC8vIFNldCB0aGUgJ2lzSGl0JyBmbGFnIHRvIHRydWUgZm9yIGEgbWlzc1xuICAgICAgdGhpcy5taXNzZWRIaXRzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgcmV0dXJuICdtaXNzJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IHRoaXMuYm9hcmRbcm93XVtjb2xdO1xuICAgICAgbGV0IHBhcmVudFNoaXA7XG4gICAgICBmb3IgKGNvbnN0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgICBpZiAoc2hpcC5vY2N1cGllZENlbGxzLmluY2x1ZGVzKGNvb3JkaW5hdGUpKSB7XG4gICAgICAgICAgcGFyZW50U2hpcCA9IHNoaXA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFwYXJlbnRTaGlwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGFyZW50IHNoaXAgbm90IGZvdW5kJyk7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudFNoaXAuaGl0KCk7XG4gICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXVsyXSA9IHRydWU7IC8vIFNldCB0aGUgJ2lzSGl0JyBmbGFnIHRvIHRydWUgZm9yIGEgaGl0XG5cbiAgICAgIGlmIChwYXJlbnRTaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHBhcmVudFNoaXAucmVtb3ZlT2NjdXBpZWRDZWxsKGNvb3JkaW5hdGUpO1xuICAgICAgICBpZiAocGFyZW50U2hpcC5vY2N1cGllZENlbGxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuc2hpcHMgPSB0aGlzLnNoaXBzLmZpbHRlcigoc2hpcCkgPT4gc2hpcCAhPT0gcGFyZW50U2hpcCk7XG4gICAgICAgICAgdGhpcy5pc0dhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdzdW5rJztcbiAgICAgIH1cblxuICAgICAgcGFyZW50U2hpcC5yZW1vdmVPY2N1cGllZENlbGwoY29vcmRpbmF0ZSk7XG4gICAgICByZXR1cm4gJ2hpdCc7XG4gICAgfVxuICB9XG59XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3Ioc2hpcFNpemUsIGNvb3JkaW5hdGVzKSB7XG4gICAgdGhpcy5zaGlwU2l6ZSA9IHNoaXBTaXplO1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICB0aGlzLm9jY3VwaWVkQ2VsbHMgPSBbXTtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICAgIHRoaXMuaWRlbnRpdHkgPSBnZW5lcmF0ZVVuaXF1ZUlkKCk7IC8vIEdlbmVyYXRlIGEgdW5pcXVlIElEIGZvciB0aGUgc2hpcFxuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0cyArPSAxO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhpdHMgPj0gdGhpcy5zaGlwU2l6ZTtcbiAgfVxuXG4gIHJlbW92ZU9jY3VwaWVkQ2VsbChjb29yZGluYXRlKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm9jY3VwaWVkQ2VsbHMuaW5kZXhPZihjb29yZGluYXRlKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLm9jY3VwaWVkQ2VsbHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGEgdW5pcXVlIElEXG5mdW5jdGlvbiBnZW5lcmF0ZVVuaXF1ZUlkKCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCJleHBvcnQgY2xhc3MgVUkge1xuICBjb25zdHJ1Y3RvcihnYW1lYm9hcmQpIHtcbiAgICB0aGlzLmdhbWVib2FyZCA9IGdhbWVib2FyZDtcbiAgICB0aGlzLmNyZWF0ZUdhbWVib2FyZCgpO1xuICAgIHRoaXMuYmluZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBjcmVhdGVHYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgcGxheWVyR3JpZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJHcmlkQ29udGFpbmVyJyk7XG4gICAgY29uc3QgY29tcHV0ZXJHcmlkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcuY29tcHV0ZXJHcmlkQ29udGFpbmVyJ1xuICAgICk7XG5cbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgICAvLyBDcmVhdGUgY2VsbCBmb3IgcGxheWVyIGdyaWRcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYXllckNlbGwnKTtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGAke1N0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyByb3cpfSR7Y29sICsgMX1gO1xuICAgICAgICBjZWxsLmRhdGFzZXQuY29vcmRpbmF0ZSA9IGNvb3JkaW5hdGU7XG4gICAgICAgIGNlbGwuZGF0YXNldC5jbGlja2VkID0gZmFsc2U7XG4gICAgICAgIHBsYXllckdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgICAgLy8gQ3JlYXRlIGNlbGwgZm9yIGNvbXB1dGVyIGdyaWRcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NvbXBDZWxsJyk7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgcm93KX0ke2NvbCArIDF9YDtcbiAgICAgICAgY2VsbC5kYXRhc2V0LmNvb3JkaW5hdGUgPSBjb29yZGluYXRlO1xuICAgICAgICBjb21wdXRlckdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYmluZEV2ZW50TGlzdGVuZXJzKGlzUGxheWVyVHVybikge1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBDZWxsJyk7XG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nYW1lYm9hcmQpO1xuICAgICAgICBpZiAoY2VsbC5kYXRhc2V0LmNsaWNrZWQgPT09ICd0cnVlJyB8fCAhaXNQbGF5ZXJUdXJuKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBjZWxsLmRhdGFzZXQuY29vcmRpbmF0ZTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKTtcbiAgICAgICAgdGhpcy51cGRhdGVVSShjb29yZGluYXRlLCByZXN1bHQpO1xuICAgICAgICBjZWxsLmRhdGFzZXQuY2xpY2tlZCA9ICd0cnVlJztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlU2hpcE9uVUkoY29vcmRpbmF0ZSwgc2l6ZSwgb3JpZW50YXRpb24sIGlzUGxheWVyQm9hcmQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHN0YXJ0Um93ID0gY29vcmRpbmF0ZS5jaGFyQ29kZUF0KDApIC0gNjU7IC8vIENvbnZlcnQgQS1KIHRvIDAtOVxuICAgIGNvbnN0IHN0YXJ0Q29sID0gcGFyc2VJbnQoY29vcmRpbmF0ZS5zbGljZSgxKSkgLSAxOyAvLyBDb252ZXJ0IDEtMTAgdG8gMC05XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgbGV0IGNlbGxDb29yZGluYXRlO1xuICAgICAgaWYgKG9yaWVudGF0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICd4Jykge1xuICAgICAgICBjZWxsQ29vcmRpbmF0ZSA9IGAke1N0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBzdGFydFJvdyl9JHtzdGFydENvbCArIGkgKyAxfWA7XG4gICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICd5Jykge1xuICAgICAgICBjZWxsQ29vcmRpbmF0ZSA9IGAke1N0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBzdGFydFJvdyArIGkpfSR7c3RhcnRDb2wgKyAxfWA7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbXBDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5jb21wQ2VsbFtkYXRhLWNvb3JkaW5hdGU9XCIke2NlbGxDb29yZGluYXRlfVwiXWBcbiAgICAgICk7XG4gICAgICBjb25zdCBwbGF5ZXJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5wbGF5ZXJDZWxsW2RhdGEtY29vcmRpbmF0ZT1cIiR7Y2VsbENvb3JkaW5hdGV9XCJdYFxuICAgICAgKTtcblxuICAgICAgaWYgKGlzUGxheWVyQm9hcmQpIHtcbiAgICAgICAgaWYgKHBsYXllckNlbGwpIHtcbiAgICAgICAgICBwbGF5ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNvbXBDZWxsKSB7XG4gICAgICAgICAgY29tcENlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHVwZGF0ZVVJKGNvb3JkaW5hdGUsIHJlc3VsdCkge1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC5jb21wQ2VsbFtkYXRhLWNvb3JkaW5hdGU9XCIke2Nvb3JkaW5hdGV9XCJdYFxuICAgICk7XG4gICAgaWYgKHJlc3VsdCA9PT0gJ21pc3MnKSB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xuICAgICAgY2VsbC50ZXh0Q29udGVudCA9ICd4JztcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ3N1bmsnKSB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICBjb25zb2xlLmxvZygncycpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlU2hpcFBsYWNlbWVudChjb29yZGluYXRlcywgc2hpcFNpemUsIG9yaWVudGF0aW9uKSB7XG4gIC8vIFZhbGlkYXRpb25cbiAgaWYgKCEvXihbQS1KYS1qXSkoMTB8WzEtOV0pJC8udGVzdChjb29yZGluYXRlcykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29vcmRpbmF0ZXMnKTtcbiAgfVxuICBjb25zdCB2YWxpZFNpemVzID0gWzEsIDIsIDMsIDQsIDVdO1xuICBpZiAoIXZhbGlkU2l6ZXMuaW5jbHVkZXMoc2hpcFNpemUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNoaXAgc2l6ZScpO1xuICB9XG4gIGNvbnN0IHZhbGlkT3JpZW50YXRpb25zID0gWydYJywgJ1knXTtcbiAgaWYgKCF2YWxpZE9yaWVudGF0aW9ucy5pbmNsdWRlcyhvcmllbnRhdGlvbi50b1VwcGVyQ2FzZSgpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBvcmllbnRhdGlvbicpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNlbGwoYm9hcmQsIHJvdywgY29sLCBpc09jY3VwaWVkKSB7XG4gIGlmICghaXNPY2N1cGllZCkge1xuICAgIGJvYXJkW3Jvd11bY29sXVsxXSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7IC8vIENlbGwgd2FzIHN1Y2Nlc3NmdWxseSBvY2N1cGllZFxuICB9IGVsc2Uge1xuICAgIC8vIFJlamVjdCBpZiB0aGUgY2VsbCBpcyBhbHJlYWR5IG9jY3VwaWVkXG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeGlzdGluZyBzaGlwIHdpdGhpbiBjb29yZGluYXRlcycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVlCb3VuZGFyeShyb3dzLCByb3cpIHtcbiAgaWYgKHJvdyA+PSByb3dzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdPdXQgb2YgYm91bmRhcmllcycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVhCb3VuZGFyeShjb2wsIGNvbHVtbnMpIHtcbiAgaWYgKGNvbCA+PSBjb2x1bW5zKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdPdXQgb2YgYm91bmRhcmllcycpO1xuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keXtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uZ2FtZUNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wbGF5ZXJHcmlkQ29udGFpbmVyICwgLmNvbXB1dGVyR3JpZENvbnRhaW5lcntcbmJhY2tncm91bmQtY29sb3I6IGdyZXk7XG5oZWlnaHQ6IDUwdmg7XG53aWR0aDogNDB2dztcbmRpc3BsYXk6IGdyaWQ7XG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbmdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xufVxuXG4uY29tcENlbGwsIC5wbGF5ZXJDZWxse2JvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xud2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDEwMCU7fVxuXG4uc2hpcHtiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7fVxuXG4uaGl0e1xub3BhY2l0eTogODAlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCLFlBQVk7QUFDWixXQUFXO0FBQ1gsYUFBYTtBQUNiLHNDQUFzQztBQUN0QyxtQ0FBbUM7QUFDbkM7O0FBRUEsdUJBQXVCLHVCQUF1QjtBQUM5QyxXQUFXO0FBQ1gsWUFBWSxDQUFDOztBQUViLE1BQU0scUJBQXFCLENBQUM7O0FBRTVCO0FBQ0EsWUFBWTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5nYW1lQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucGxheWVyR3JpZENvbnRhaW5lciAsIC5jb21wdXRlckdyaWRDb250YWluZXJ7XFxuYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG5oZWlnaHQ6IDUwdmg7XFxud2lkdGg6IDQwdnc7XFxuZGlzcGxheTogZ3JpZDtcXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG5ncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmNvbXBDZWxsLCAucGxheWVyQ2VsbHtib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG53aWR0aDogMTAwJTtcXG5oZWlnaHQ6IDEwMCU7fVxcblxcbi5zaGlwe2JhY2tncm91bmQtY29sb3I6IHJlZDt9XFxuXFxuLmhpdHtcXG5vcGFjaXR5OiA4MCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9nYW1lLmpzJztcbmltcG9ydCAqIGFzIGNzcyBmcm9tICcuL3N0eWxlLmNzcyc7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiJdLCJuYW1lcyI6WyJnYW1lYm9hcmQiLCJVSSIsInBsYXllckdyaWRDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb21wdXRlckdyaWRDb250YWluZXIiLCJHYW1lIiwiX2NsYXNzQ2FsbENoZWNrIiwicGxheWVyQm9hcmQiLCJjb21wdXRlckJvYXJkIiwidHVybiIsInVpIiwicGxhY2VTaGlwcyIsImJpbmRFdmVudExpc3RlbmVycyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMiLCJzaGlwc1RvUGxhY2VDb21wdXRlciIsImNvb3JkaW5hdGVzIiwic2l6ZSIsIm9yaWVudGF0aW9uIiwic2hpcHNUb1BsYWNlUGxheWVyIiwiZm9yRWFjaCIsInNoaXAiLCJwbGFjZVNoaXAiLCJ0b1VwcGVyQ2FzZSIsInVwZGF0ZVNoaXBPblVJIiwiZXJyb3IiLCJjb25zb2xlIiwiY29uY2F0IiwibWVzc2FnZSIsImxvZyIsInZhbGlkYXRlU2hpcFBsYWNlbWVudCIsInZhbGlkYXRlWUJvdW5kYXJ5IiwidmFsaWRhdGVYQm91bmRhcnkiLCJTaGlwIiwicm93cyIsImNvbHVtbnMiLCJib2FyZCIsImNvb3JkaW5hdGVNYXAiLCJzaGlwcyIsImNyZWF0ZUdhbWVib2FyZCIsIm1pc3NlZEhpdHMiLCJnYW1lU3RhcnRlZCIsImxldHRlcnMiLCJpIiwiQXJyYXkiLCJqIiwiY29vcmRpbmF0ZSIsInZhbHVlcyIsIm9jY3VweUNlbGwiLCJFcnJvciIsIl92YWx1ZXMiLCJfc2xpY2VkVG9BcnJheSIsInJvdyIsImNvbCIsIl90aGlzJGJvYXJkJHJvdyRjb2wiLCJfIiwiaXNPY2N1cGllZCIsIm9jY3VwaWVkQ2VsbHMiLCJwdXNoIiwic2hpcFNpemUiLCJfdGhpcyRjb29yZGluYXRlTWFwJGMiLCJzdGFydFJvdyIsInN0YXJ0Q29sIiwiY3VycmVudENvb3JkaW5hdGUiLCJfdGhpcyRjb29yZGluYXRlTWFwJGMyIiwiaXNHYW1lT3ZlciIsImxlbmd0aCIsInJlY2VpdmVBdHRhY2siLCJjb29yZFVwcGVyIiwiX3RoaXMkY29vcmRpbmF0ZU1hcCRjMyIsImNlbGwiLCJfY2VsbCIsInBhcmVudFNoaXAiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiaW5jbHVkZXMiLCJlcnIiLCJlIiwiZiIsImhpdCIsImlzU3VuayIsInJlbW92ZU9jY3VwaWVkQ2VsbCIsImZpbHRlciIsImhpdHMiLCJpZGVudGl0eSIsImdlbmVyYXRlVW5pcXVlSWQiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImRhdGFzZXQiLCJjbGlja2VkIiwiYXBwZW5kQ2hpbGQiLCJpc1BsYXllclR1cm4iLCJjZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwidXBkYXRlVUkiLCJpc1BsYXllckJvYXJkIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiY2hhckNvZGVBdCIsInBhcnNlSW50Iiwic2xpY2UiLCJjZWxsQ29vcmRpbmF0ZSIsInRvTG93ZXJDYXNlIiwiY29tcENlbGwiLCJwbGF5ZXJDZWxsIiwidGV4dENvbnRlbnQiLCJ0ZXN0IiwidmFsaWRTaXplcyIsInZhbGlkT3JpZW50YXRpb25zIiwidmFsaWRhdGVDZWxsIiwiY3NzIiwiZ2FtZSJdLCJzb3VyY2VSb290IjoiIn0=
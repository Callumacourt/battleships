// game.js

import { handleAttackError } from './validate';
import { gameboard } from './gameboard';
import { UI } from './ui';

export class Game {
  constructor() {
    this.playerBoard = new gameboard();
    this.computerBoard = new gameboard();
    this.turn = 'player'; // Initialize the turn to 'player'
    this.playerWins = 0;
    this.computerWins = 0;
    this.gameOver = false;
    this.prevCompHit = [];
    this.prevCompAttack = [];
    this.nextCompAttack = undefined;
    this.currentDirection = undefined;
    this.gameMode = 'initial';

    this.ui = new UI(this.computerBoard);
    this.ui.gameState(this.startPlacementMode.bind(this));
  }

  startPlacementMode() {
    this.gameMode = 'placement';
    this.placeShips();
    this.ui.bindEventListeners(
      this.turn === 'player',
      this.playerReceiveAttack.bind(this)
    );
  }

  placeShips() {
    const shipsToPlaceComputer = [
      { coordinates: 'A1', size: 5, orientation: 'X' },
      { coordinates: 'B1', size: 4, orientation: 'X' },
      { coordinates: 'C1', size: 3, orientation: 'X' },
      { coordinates: 'D1', size: 3, orientation: 'X' },
      { coordinates: 'E1', size: 2, orientation: 'X' },
    ];

    const shipsToPlacePlayer = [
      { coordinates: 'A1', size: 5, orientation: 'X' },
      { coordinates: 'B1', size: 4, orientation: 'X' },
      { coordinates: 'C1', size: 3, orientation: 'X' },
      { coordinates: 'D1', size: 3, orientation: 'X' },
      { coordinates: 'E1', size: 2, orientation: 'X' },
    ];

    shipsToPlaceComputer.forEach((ship) => {
      const { coordinates, size, orientation } = ship;
      try {
        this.computerBoard.placeShip(
          coordinates.toUpperCase(),
          size,
          orientation.toUpperCase()
        );
        this.ui.updateShipOnUI(coordinates, size, orientation);
      } catch (error) {
        throw new Error(`Failed to place ship: ${error.message}`);
      }
    });

    shipsToPlacePlayer.forEach((ship) => {
      const { coordinates, size, orientation } = ship;
      try {
        this.playerBoard.placeShip(
          coordinates.toUpperCase(),
          size,
          orientation.toUpperCase()
        );
        this.ui.updateShipOnUI(coordinates, size, orientation, true); // Pass `true` to indicate it's the player board
      } catch (error) {
        throw new Error(`Failed to place ship: ${error.message}`);
      }
    });
  }

  playerReceiveAttack(coordinates) {
    if (this.turn !== 'player' || this.gameOver) return; // Prevent player from attacking out of turn
    const result = this.receiveAttack(this.computerBoard, coordinates);
    this.ui.updateUI(coordinates, result, false);
    this.checkGameOver();
    if (!this.gameOver) {
      this.turn = 'computer'; // Switch turn to computer
      setTimeout(() => this.computerAttack(), 800); // Delay before computer attacks
    }
  }

  receiveAttack(board, coordinates) {
    const { row, col, cell } = handleAttackError(board, coordinates);

    if (!cell[1]) {
      const result = this.handleMiss(board, coordinates, row, col);
      return result;
    } else {
      const coordinate = board.board[row][col];
      const parentShip = this.findParentShip(board, coordinate);

      const result = this.handleHit(parentShip, board, coordinate, row, col);
      board.hitCells.push(coordinates);

      if (parentShip.occupiedCells.length === 0) {
        this.handleSunk(parentShip, board);
        return 'sunk';
      }

      return 'hit';
    }
  }

  handleMiss(board, coordinates, row, col) {
    board.board[row][col] = [coordinates, false, true]; // Set the 'isHit' flag to true for a miss
    board.missedHits.push(coordinates);
    return 'miss';
  }

  findParentShip(board, coordinate) {
    for (const ship of board.ships) {
      if (ship.occupiedCells.includes(coordinate)) {
        return ship;
      }
    }
    throw new Error('Parent ship not found');
  }

  handleHit(parentShip, board, coordinate, row, col) {
    parentShip.hit();
    board.board[row][col][2] = true; // Set the 'isHit' flag to true for a hit
    parentShip.removeOccupiedCell(coordinate);

    return 'hit';
  }

  handleSunk(parentShip, board) {
    parentShip.occupiedCells.forEach((coordinate) => {
      parentShip.removeOccupiedCell(coordinate);
      this.ui.updateUI(coordinate, 'sunk', board === this.playerBoard);
    });

    board.ships = board.ships.filter((ship) => ship !== parentShip);
  }

  generateCoordinate(board) {
    const availableCells = [];
    for (const coordinate in board.coordinateMap) {
      if (!board.hitCells.includes(coordinate)) {
        availableCells.push(coordinate);
      }
    }
    const randomIndex = Math.floor(Math.random() * availableCells.length);
    return availableCells[randomIndex];
  }

  getAdjacentCells(coordinate, board) {
    const directions = [
      { row: 0, col: 1, direction: 'right' }, // right
      { row: 0, col: -1, direction: 'left' }, // left
      { row: 1, col: 0, direction: 'down' }, // down
      { row: -1, col: 0, direction: 'up' }, // up
    ];

    const rows = 'ABCDEFGHIJ';
    const cols = '123456789';

    const currentRow = coordinate[0];
    const currentCol = coordinate.slice(1);

    const coordinateMap = board.coordinateMap;

    const adjacentCells = [];

    directions.forEach((direction) => {
      const newRow = rows[rows.indexOf(currentRow) + direction.row];
      const newCol = (parseInt(currentCol) + direction.col).toString();
      const direc = direction.direction;

      if (newRow && cols.includes(newCol)) {
        const newCoordinate = newRow + newCol;

        if (
          coordinateMap.hasOwnProperty(newCoordinate) &&
          !board.hitCells.includes(newCoordinate)
        ) {
          adjacentCells.push({ coordinate: newCoordinate, direction: direc });
        }
      }
    });
    return adjacentCells;
  }

  getNextAttack(coordinate, board) {
    if (this.prevCompHit.length > 0) {
      const lastHit = this.prevCompHit[this.prevCompHit.length - 1];
      const possibleCells = this.getAdjacentCells(
        lastHit.coordinate,
        board
      ).filter((cell) => cell.direction === lastHit.direction);
      if (possibleCells.length > 0) {
        return possibleCells[Math.floor(Math.random() * possibleCells.length)]
          .coordinate;
      } else {
        this.currentDirection = undefined;
      }
    }

    const adjacentCells = this.getAdjacentCells(coordinate, board);
    const validAdjacentCells = adjacentCells.filter(
      (cell) => !board.hitCells.includes(cell.coordinate)
    );

    if (validAdjacentCells.length === 0) {
      return this.generateCoordinate(board);
    }

    const nextAttack =
      validAdjacentCells[Math.floor(Math.random() * validAdjacentCells.length)];
    this.prevCompHit.push(nextAttack);
    this.currentDirection = nextAttack.direction;

    return nextAttack.coordinate;
  }

  async computerAttack() {
    if (this.turn !== 'computer') return; // Prevent computer from attacking out of turn

    let result;
    let coordinate;

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
      this.prevCompHit.push({ coordinate, direction: this.currentDirection });
      this.nextCompAttack = this.getNextAttack(coordinate, this.playerBoard);
    } else {
      this.nextCompAttack = undefined;
      this.currentDirection = undefined;
    }

    this.checkGameOver();
    if (!this.gameOver) {
      this.turn = 'player';
    }
  }

  checkGameOver() {
    if (this.computerBoard.ships.length === 0) {
      this.ui.showWinner('player');
      this.gameOver = true;
    } else if (this.playerBoard.ships.length === 0) {
      this.ui.showWinner('computer');
      this.gameOver = true;
    }
  }

  waitForDelay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

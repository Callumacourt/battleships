import {
  validateShipPlacement,
  validateYBoundary,
  validateXBoundary,
} from './validate';

import Ship from './ship';

export class gameboard {
  constructor() {
    this.rows = 10;
    this.columns = 10;
    this.board = [];
    this.coordinateMap = [];
    this.ships = [];
    this.createGameboard();
    this.missedHits = [];
    this.gameStarted = false;
  }

  createGameboard() {
    const letters = 'ABCDEFGHIJ';

    for (let i = 0; i < this.rows; i++) {
      this.board[i] = new Array(this.columns);

      for (let j = 0; j < this.columns; j++) {
        const coordinate = `${letters[i]}${j + 1}`;
        const values = [i, j, 0];

        this.board[i][j] = [coordinate, false]; // Initialize with coordinate and occupied = false
        this.coordinateMap[coordinate.toUpperCase()] = values;
      }
    }
  }

  occupyCell(coordinate, ship) {
    const values = this.coordinateMap[coordinate];

    if (!values) {
      throw new Error(`Invalid coordinate: ${coordinate}`);
    }

    const [row, col] = values;
    const [_, isOccupied] = this.board[row][col];

    if (!isOccupied) {
      this.board[row][col] = [coordinate, true];

      ship.occupiedCells.push(this.board[row][col]);
      return true;
    } else {
      throw new Error('Existing ship within coordinates');
    }
  }
  placeShip(coordinates, shipSize, orientation) {
    validateShipPlacement(coordinates, shipSize, orientation);
    const ship = new Ship(shipSize, coordinates);
    this.ships.push(ship);

    if (orientation === 'Y') {
      let [startRow, startCol] = this.coordinateMap[coordinates];
      const letters = 'ABCDEFGHIJ';
      for (let i = 0; i < shipSize; i += 1) {
        const row = startRow + i;
        validateYBoundary(this.rows, row); // validation
        const currentCoordinate = `${letters[row]}${startCol + 1}`;
        this.occupyCell(currentCoordinate, ship);
      }
    }

    if (orientation === 'X') {
      let [startRow, startCol] = this.coordinateMap[coordinates];
      const letters = 'ABCDEFGHIJ';
      for (let i = 0; i < shipSize; i += 1) {
        const col = startCol + i;
        validateXBoundary(col, this.columns); // validation

        const currentCoordinate = `${letters[startRow]}${col + 1}`;
        this.occupyCell(currentCoordinate, ship);
      }
    }

    this.gameStarted = true;
  }

  isGameOver() {
    if (this.gameStarted === true && this.ships.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  receiveAttack(coordinates) {
    const coordUpper = coordinates.toUpperCase();
    if (!this.coordinateMap[coordUpper]) {
      throw new Error(`Invalid coordinate: ${coordinates}`);
    }

    const [row, col] = this.coordinateMap[coordUpper];
    const cell = this.board[row][col];
    if (!cell) {
      throw new Error(`Invalid cell: [${row}, ${col}]`);
    }

    const [_, isOccupied] = cell;
    if (isOccupied === false) {
      this.board[row][col] = [coordinates, false, true]; // Set the 'isHit' flag to true for a miss
      this.missedHits.push(coordinates);
      return 'miss';
    } else {
      const coordinate = this.board[row][col];
      let parentShip;
      for (const ship of this.ships) {
        if (ship.occupiedCells.includes(coordinate)) {
          parentShip = ship;
          break;
        }
      }

      if (!parentShip) {
        throw new Error('Parent ship not found');
      }

      parentShip.hit();
      this.board[row][col][2] = true; // Set the 'isHit' flag to true for a hit

      if (parentShip.isSunk()) {
        parentShip.removeOccupiedCell(coordinate);
        if (parentShip.occupiedCells.length === 0) {
          this.ships = this.ships.filter((ship) => ship !== parentShip);
          this.isGameOver();
        }
        return 'sunk';
      }

      parentShip.removeOccupiedCell(coordinate);
      return 'hit';
    }
  }
}

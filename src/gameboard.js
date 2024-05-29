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

    if (!isOccupied) {
      this.board[row][col] = [coordinates, false, null];
      this.missedHits.push(coordinates);
      console.log(this.ships);
      return 'miss';
    } else if (isOccupied) {
      const coordinate = this.board[row][col];
      let parentShip;
      for (const ship of this.ships) {
        if (ship.occupiedCells.includes(coordinate)) {
          parentShip = ship;
          console.log(parentShip);
          break;
        }
      }

      return 'hit';
    } else {
      console.log(this.ships[shipIdentity]);
      const ship = this.ships[shipIdentity]; // Get the ship using its identity
      if (ship.occupiedCells.length === 0) {
        // Ship is sunk, remove it from the ships array
        this.ships = this.ships.filter((s) => s.identity !== shipIdentity);
        this.isGameOver();
        return 'sunk';
      } else {
        return ship.hits;
      }
    }
  }
}

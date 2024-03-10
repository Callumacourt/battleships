export class gameboard {
  constructor() {
    this.rows = 10;
    this.columns = 10;
    this.board = [];
    this.coordinateMap = {};
    this.createGameboard();
  }

  createGameboard() {
    const letters = 'abcdefghij';

    for (let i = 0; i < this.rows; i++) {
      this.board[i] = new Array(this.columns);

      for (let j = 0; j < this.columns; j++) {
        const coordinate = `${letters[i]}${j + 1}`;
        const values = [i, j, 0];

        this.board[i][j] = [coordinate, false]; // Initialize with coordinate and occupied = false
        this.coordinateMap[coordinate] = values;
      }
    }
  }

  occupyCell(coordinate) {
    const [row, col] = this.coordinateMap[coordinate];
    this.board[row][col][1] = true;
  }

  placeShip(coordinates, shipSize, orientation) {
    // Validation
    if (!/^([a-j])(10|[1-9])$/.test(coordinates)) {
      throw new Error('Invalid coordinates');
    }

    const validSizes = [1, 2, 3, 4, 5];
    if (!validSizes.includes(shipSize)) {
      throw new Error('Invalid ship size');
    }

    const validOrientations = ['X', 'Y'];
    if (!validOrientations.includes(orientation.toUpperCase())) {
      throw new Error('Invalid orientation');
    }

    if (orientation === 'y') {
    }

    if (orientation === 'x') {
      let [startRow, startCol] = this.coordinateMap[coordinates];

      for (let i = 0; i < shipSize; i += 1) {
        let currentCoordinate = this.coordinateMap[coordinates];
        this.occupyCell(coordinates);
        currentCoordinate[1]++;
      }
    }

    // according to the ship length and orientation
  }
}

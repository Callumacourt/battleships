import { validateShipPlacement, validateCell, validateYBoundary} from "./validate";

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
    const [_, isOccupied] = this.board[row][col];
    return validateCell(this.board, row, col, isOccupied);
  }

  placeShip(coordinates, shipSize, orientation) {
    validateShipPlacement(coordinates, shipSize, orientation);
  
    if (orientation === 'y') {
      let [startRow, startCol] = this.coordinateMap[coordinates];
      const letters = 'abcdefghij';
  
      for (let i = 0; i < shipSize; i += 1) {
        const row = startRow + i;
        validateYBoundary(this.rows, row)
        const currentCoordinate = `${letters[row]}${startCol + 1}`;
        this.occupyCell(currentCoordinate);
      }
    }
  
    if (orientation === 'x') {
      let [startRow, startCol] = this.coordinateMap[coordinates];
      const letters = 'abcdefghij';
  
      for (let i = 0; i < shipSize; i += 1) {
        const col = startCol + i;
        if (col >= this.columns) {
          throw new Error('Out of boundaries');
        }
        const currentCoordinate = `${letters[startRow]}${col + 1}`;
        this.occupyCell(currentCoordinate);
      }
    }
  }

n
  }


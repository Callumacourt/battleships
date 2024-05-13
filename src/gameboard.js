import { validateShipPlacement } from "./validate";

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

    validateShipPlacement(coordinates, shipSize, orientation);


    if (orientation === 'y') {
      let [startRow, startCol] = this.coordinateMap[coordinates];
      for (let i = 0; i < shipSize; i += 1) {
        let currentCoordinate = this.coordinateMap[coordinates];
        if (startRow + i >= this.rows) {
          throw new Error('Out of boundaries');
        }
        this.occupyCell(coordinates);
        currentCoordinate[0] += 1;
      }
    
    }

    if (orientation === 'x') {
      let [startRow, startCol] = this.coordinateMap[coordinates];

      for (let i = 0; i < shipSize; i += 1) {
        let currentCoordinate = this.coordinateMap[coordinates];
        if (startCol + i >= this.columns) {
          throw new Error('Out of boundaries');
        }
        this.occupyCell(coordinates);
        currentCoordinate[1]+=1
        
        }
      }
    }

    // according to the ship length and orientation
  }


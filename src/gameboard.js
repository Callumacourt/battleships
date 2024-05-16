import { validateShipPlacement, validateCell, validateYBoundary, validateXBoundary} from "./validate";
import Ship from "./ship";

export class gameboard {
  constructor() {
    this.rows = 10;
    this.columns = 10;
    this.board = [];
    this.coordinateMap = {};
    this.ships = []
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

  occupyCell(coordinate, shipIdentity) {
    const [row, col] = this.coordinateMap[coordinate];
    const [_, isOccupied] = this.board[row][col];
  
    if (!isOccupied) {
      this.board[row][col] = [coordinate, true, shipIdentity];
      return true;
    } else {
      throw new Error('Existing ship within coordinates');
    }
  }

  placeShip(coordinates, shipSize, orientation) {
  validateShipPlacement(coordinates, shipSize, orientation);
  const ship = new Ship(shipSize, coordinates)
  this.ships.push(ship)
  const occupiedCells = []

    
  
    if (orientation === 'y') {
      let [startRow, startCol] = this.coordinateMap[coordinates];
      const letters = 'abcdefghij';
  
      for (let i = 0; i < shipSize; i += 1) {
        const row = startRow + i;

        validateYBoundary(this.rows, row) // validation

        const currentCoordinate = `${letters[row]}${startCol + 1}`;
        this.occupyCell(currentCoordinate, ship.identity)
        occupiedCells.push(currentCoordinate)
        ship.occupiedCells = occupiedCells
      }
    }
  
    if (orientation === 'x') {
      let [startRow, startCol] = this.coordinateMap[coordinates];
      const letters = 'abcdefghij';
  
      for (let i = 0; i < shipSize; i += 1) {
        const col = startCol + i;

        validateXBoundary(col, this.columns) // validation

        const currentCoordinate = `${letters[startRow]}${col + 1}`;
        this.occupyCell(currentCoordinate, ship.identity);
        occupiedCells.push(currentCoordinate)
        ship.occupiedCells = occupiedCells
      }
    }
    ship.occupiedCells =occupiedCells
  }

  receiveAttack(coordinates) {
    const [row, col] = this.coordinateMap[coordinates];
    const [_, isOccupied, shipIdentity] = this.board[row][col];
  
    if (!isOccupied) {
      this.board[row][col] = [coordinates, false, null];
      return 'miss';
    } else {
      const ship = this.ships.find(ship => ship.identity === shipIdentity);
      ship.hit();
      const hitCellIndx = ship.occupiedCells.indexOf(coordinates.toString());
      ship.occupiedCells.splice(hitCellIndx, 1);
  
      if (ship.occupiedCells.length === 0) {
        // Ship is sunk, remove it from the ships array
        this.ships = this.ships.filter(s => s.identity !== shipIdentity);
        return 'sunk';
      } else {
        return ship.hits;
      }
    }
  }
  }
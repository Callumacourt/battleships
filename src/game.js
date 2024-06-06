import { gameboard } from './gameboard';
import { UI } from './ui';

export class Game {
  constructor() {
    this.playerBoard = new gameboard();
    this.computerBoard = new gameboard();
    this.turn = 'player';
    this.playerWins = 0;
    this.computerWins = 0;

    this.ui = new UI(this.computerBoard);
    this.placeShips();
    this.ui.bindEventListeners(
      this.turn === 'player',
      this.receiveAttack.bind(this, this.computerBoard)
    );
  }

  placeShips() {
    // Example ships with coordinates, sizes, and orientations for the computer board
    const shipsToPlaceComputer = [
      { coordinates: 'A1', size: 5, orientation: 'X' },
      { coordinates: 'B1', size: 4, orientation: 'X' },
      { coordinates: 'C1', size: 3, orientation: 'X' },
      { coordinates: 'D1', size: 3, orientation: 'X' },
      { coordinates: 'E1', size: 2, orientation: 'X' },
    ];

    // Example ships with coordinates, sizes, and orientations for the player board
    const shipsToPlacePlayer = [
      { coordinates: 'F1', size: 5, orientation: 'X' },
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
        console.error(`Failed to place ship: ${error.message}`);
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
        console.error(`Failed to place ship: ${error.message}`);
      }
    });
  }

  receiveAttack(board, coordinates) {
    const coordUpper = coordinates.toUpperCase();
    if (!board.coordinateMap[coordUpper]) {
      throw new Error(`Invalid coordinate: ${coordinates}`);
    }

    const [row, col] = board.coordinateMap[coordUpper];
    const cell = board.board[row][col];
    if (!cell) {
      throw new Error(`Invalid cell: [${row}, ${col}]`);
    }

    const [_, isOccupied] = cell;
    if (!isOccupied) {
      board.board[row][col] = [coordinates, false, true]; // Set the 'isHit' flag to true for a miss
      board.missedHits.push(coordinates);
      return 'miss';
    } else {
      const coordinate = board.board[row][col];
      let parentShip;
      for (const ship of board.ships) {
        if (ship.occupiedCells.includes(coordinate)) {
          parentShip = ship;
          break;
        }
      }

      if (!parentShip) {
        throw new Error('Parent ship not found');
      }

      parentShip.hit();
      this.isGameOver(board, this.playerBoard);
      board.board[row][col][2] = true; // Set the 'isHit' flag to true for a hit

      if (parentShip.isSunk()) {
        parentShip.removeOccupiedCell(coordinate);
        if (parentShip.occupiedCells.length === 0) {
          board.ships = board.ships.filter((ship) => ship !== parentShip);
          this.isGameOver(board, this.playerBoard);
        }
        return 'sunk';
      }

      parentShip.removeOccupiedCell(coordinate);
      return 'hit';
    }
  }
  isGameOver(computerBoard, playerBoard) {
    if (computerBoard.ships.length === 0) {
      console.log('player wins');
    } else if (playerBoard.ships.length === 0) {
      console.log('computer wins');
    } else console.log('not over');
  }
}

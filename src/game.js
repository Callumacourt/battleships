import { handleAttackError } from './validate';
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
    const shipsToPlaceComputer = [
      { coordinates: 'A1', size: 5, orientation: 'X' },
      { coordinates: 'B1', size: 4, orientation: 'X' },
      { coordinates: 'C1', size: 3, orientation: 'X' },
      { coordinates: 'D1', size: 3, orientation: 'X' },
      { coordinates: 'E1', size: 2, orientation: 'X' },
    ];

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
    const { row, col, cell } = handleAttackError(board, coordinates);

    if (!cell[1]) {
      return this.handleMiss(board, coordinates, row, col);
    } else {
      const coordinate = board.board[row][col];
      const parentShip = this.findParentShip(board, coordinate);

      this.handleHit(parentShip, board, coordinate, row, col);
      board.hitCells.push(coordinates);

      return parentShip.isSunk() ? this.handleSunk(parentShip, board) : 'hit';
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
  }

  handleSunk(parentShip, board) {
    parentShip.occupiedCells.forEach((coordinate) => {
      parentShip.removeOccupiedCell(coordinate);
    });

    board.ships = board.ships.filter((ship) => ship !== parentShip);
    this.isGameOver();
    return 'sunk';
  }

  isGameOver() {
    if (this.computerBoard.ships.length === 0) {
      this.ui.showWinner('player');
    } else if (this.playerBoard.ships.length === 0) {
      this.ui.showWinner('computer');
    }
  }
}

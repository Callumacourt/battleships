import { gameboard } from './gameboard';
import { UI } from './ui';

const playerGridContainer = document.querySelector('.playerGridContainer');
const computerGridContainer = document.querySelector('.computerGridContainer');

export class Game {
  constructor() {
    this.playerBoard = new gameboard();
    this.computerBoard = new gameboard();
    this.turn = 'player';

    this.ui = new UI(
      this.computerBoard,
      playerGridContainer,
      computerGridContainer
    );

    this.placeShips();
    this.ui.bindEventListeners(this.turn === 'player');
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
        console.log(this.computerBoard);
      } catch (error) {
        console.error(`Failed to place ship: ${error.message}`);
      }
    });
  }
}

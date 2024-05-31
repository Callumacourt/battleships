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
      this.playerBoard,
      playerGridContainer,
      computerGridContainer
    );

    this.placeShips();
  }

  placeShips() {
    // Example ships with coordinates, sizes, and orientations
    const shipsToPlace = [
      { coordinates: 'A1', size: 5, orientation: 'X' }, // Example: Aircraft carrier
      { coordinates: 'B1', size: 4, orientation: 'X' }, // Example: Battleship
      { coordinates: 'C1', size: 3, orientation: 'X' }, // Example: Cruiser
      { coordinates: 'D1', size: 3, orientation: 'X' }, // Example: Submarine
      { coordinates: 'E1', size: 2, orientation: 'X' }, // Example: Destroyer
    ];

    shipsToPlace.forEach((ship) => {
      const { coordinates, size, orientation } = ship;
      try {
        this.playerBoard.placeShip(
          coordinates.toUpperCase(),
          size,
          orientation.toUpperCase()
        );
        this.ui.updateShipOnUI(coordinates, size, orientation);
      } catch (error) {
        console.error(`Failed to place ship: ${error.message}`);
      }
    });
    console.log(this.playerBoard);
  }
}

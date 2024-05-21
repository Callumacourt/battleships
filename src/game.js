import { gameboard } from './gameboard';
import { UI } from './ui';

export class Game {
  constructor() {
    this.playerBoard = new gameboard();
    this.computerBoard = new gameboard();

    this.playerBoard.placeShip('a1', 5, 'x');
    this.playerBoard.placeShip('c4', 4, 'y');

    this.ui = new UI(
      this.playerBoard,
      document.querySelector('.playerGridContainer'),
      document.querySelector('.computerGridContainer')
    );
  }

  start() {}
}

import Player from './player';
import { gameboard } from './gameboard';

export class Game {
  constructor() {
    this.humanPlayer = new Player('human');
    this.computerPlayer = new Player('computer');
  }
  startGame() {
    this.humanPlayerPlayer.gameboard.placeShip('a1', 4, 'x');
    this.humanPlayer.gameboard.placeShip('b1', 5, 'y');
    this.humanPlayer.gameboard.placeShip('c2', 3, 'x');
    this.humanPlayer.gameboard.placeShip('d2', 3, 'x');
    this.humanPlayer.gameboard.placeShip('f4,', 2, 'x');

    this.computerPlayer.gameboard.placeShip('e3', 4, 'x');
    this.computerPlayer.gameboard.placeShip('c2', 3, 'x');
    this.computerPlayer.gameboard.placeShip('f2', 4, 'x');
    this.computerPlayer.gameboard.placeShip('a1', 4, 'x');
    this.computerPlayer.gameboard.placeShip('b1', 5, 'y');
  }
  handleMove() {}
}

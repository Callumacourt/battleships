import { gameboard } from './gameboard';

const gameBoard = new gameboard();
console.log(gameBoard.board);
gameBoard.placeShip('a5', 4, 'y');

import { gameboard } from './gameboard';

const gameBoard = new gameboard();
console.log(gameBoard.board);
gameBoard.placeShip('a4', 4, 'x');

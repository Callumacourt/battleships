import { gameboard } from './gameboard';

const gameBoard = new gameboard();
console.log(gameBoard.board);
gameBoard.placeShip('a1', 4, 'x');
gameBoard.receiveAttack('a1')



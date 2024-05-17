import { gameboard } from './gameboard';

export default class Player {
  constructor(type) {
    this.type = type; // 'human' or 'computer'
    this.gameboard = new gameboard();
    this.wins = 0;
  }
}

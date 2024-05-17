import { gameboard } from './gameboard';

class Player {
  constructor(type) {
    this.type = type; // 'human' or 'computer'
    this.gameboard = new gameboard();
    this.wins = 0;
  }
}

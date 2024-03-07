import Ship from './ship';

export class gameboard {
  constructor() {
    this.rows = 10;
    this.columns = 10;
    this.board = [];
    this.createGameboard();
  }

  createGameboard() {
    const letters = 'abcdefghij';
    const createCell = (coordinates, occupied = null) => {};

    for (let i = 0; i < this.rows; i++) {
      this.board[i] = new Array(this.columns);

      for (let j = 0; j < this.columns; j++) {
        {
          this.board[i][j] = [`${letters[i]}${j + 1}`, (this.occupied = false)];
        }
      }
    }

    console.log(this.board);
  }

  placeShip(coordinates, shipSize, orientation) {
    const cordCopy = new Array(coordinates);

    // are cords occupied?
    // if not, occupy cords according to ship size and orientation
    // record cords as occupied
  }
}

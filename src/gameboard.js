export class gameboard {
  constructor() {
    this.rows = 10;
    this.columns = 10;
    this.board = [];
    this.createGameboard();
  }

  createGameboard() {
    const letters = 'abcdefghij';

    for (let i = 0; i < this.rows; i++) {
      this.board[i] = new Array(this.columns);

      for (let j = 0; j < this.columns; j++) {
        this.board[i][j] = `${letters[i]}${j + 1}`;
      }
    }

    console.log(this.board);
  }
}

import { Game } from './game';

const gridContainer = document.querySelector('.gridContainer');

export function createGrid() {
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.classList.add(`cell-${col}-${row}`); // Add coordinate as a class
      gridContainer.appendChild(cell);
    }
  }
}

export class UI {
  constructor() {
    this.game = new Game();
    this.bindEventListeners();
  }

  bindEventListeners() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
      cell.addEventListener('click', () => {
        const move = cell.dataset.index;
        this.game.handleMove(this.game.humanPlayer, move);
      });
    });
  }
}

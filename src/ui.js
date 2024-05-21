export class UI {
  constructor(gameboard) {
    this.gameboard = gameboard;
    this.createGameboard();
    this.bindEventListeners();
  }

  createGameboard() {
    const playerGridContainer = document.querySelector('.playerGridContainer');
    const computerGridContainer = document.querySelector(
      '.computerGridContainer'
    );

    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        // Create cell for player grid
        const cell = document.createElement('div');
        cell.classList.add('cell');
        const coordinate = `${String.fromCharCode(65 + row)}${col + 1}`;
        cell.dataset.coordinate = coordinate;
        playerGridContainer.appendChild(cell);
      }
    }

    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        // Create cell for computer grid
        const cell2 = document.createElement('div');
        cell2.classList.add('cell');
        const coordinate2 = `${String.fromCharCode(65 + row)}${col + 1}`;
        cell2.dataset.coordinate = coordinate2;
        computerGridContainer.appendChild(cell2);
      }
    }
  }

  bindEventListeners() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
      cell.addEventListener('click', () => {
        const coordinate = cell.dataset.coordinate;
        const result = this.gameboard.receiveAttack(coordinate);
        this.updateUI(coordinate, result);
      });
    });
  }

  updateUI(coordinate, result) {
    const cell = document.querySelector(
      `.cell[data-coordinate="${coordinate}"]`
    );
    if (result === 'miss') {
      cell.classList.add('missed');
    } else if (result === 'sunk') {
      cell.classList.add('sunk');
    } else {
      cell.classList.add('hit');
    }
  }
}

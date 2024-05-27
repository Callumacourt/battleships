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
        const cell = document.createElement('div');
        cell.classList.add('cell');
        const coordinate = `${String.fromCharCode(65 + row)}${col + 1}`;
        cell.dataset.coordinate = coordinate;
        computerGridContainer.appendChild(cell);
      }
    }
  }

  bindEventListeners() {
    console.log(this.gameboard);
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
      cell.addEventListener('click', () => {
        const coordinate = cell.dataset.coordinate;
        const result = this.gameboard.receiveAttack(coordinate);
        this.updateUI(coordinate, result);
      });
    });
  }

  updateShipOnUI(coordinate, size, orientation) {
    const startRow = coordinate.charCodeAt(0) - 65; // Convert A-J to 0-9
    const startCol = parseInt(coordinate.slice(1)) - 1; // Convert 1-10 to 0-9

    for (let i = 0; i < size; i++) {
      let cellCoordinate;
      if (orientation.toLowerCase() === 'x') {
        cellCoordinate = `${String.fromCharCode(65 + startRow)}${startCol + i + 1}`;
      } else if (orientation.toLowerCase() === 'y') {
        cellCoordinate = `${String.fromCharCode(65 + startRow + i)}${startCol + 1}`;
      }

      const cell = document.querySelector(
        `.cell[data-coordinate="${cellCoordinate}"]`
      );
      if (cell) {
        cell.classList.add('ship'); // Add a class to indicate a ship is present
      }
    }
  }

  updateUI(coordinate, result) {
    const cell = document.querySelector(
      `.cell[data-coordinate="${coordinate}"]`
    );
    if (result === 'miss') {
      cell.classList.add('missed');
      cell.textContent = 'x';
    } else if (result === 'sunk') {
      cell.classList.add('sunk');
    } else {
      cell.classList.add('hit');
    }
  }
}

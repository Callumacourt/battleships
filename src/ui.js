export class UI {
  constructor(gameboard) {
    this.gameboard = gameboard;
    this.createGameboard();
  }

  createGameboard() {
    const playerGridContainer = document.querySelector('.playerGridContainer');
    const computerGridContainer = document.querySelector(
      '.computerGridContainer'
    );

    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        // Create cell for player grid
        const playerCell = document.createElement('div');
        playerCell.classList.add('playerCell');
        const coordinate = `${String.fromCharCode(65 + row)}${col + 1}`;
        playerCell.dataset.coordinate = coordinate;
        playerCell.dataset.clicked = false;
        playerGridContainer.appendChild(playerCell);

        // Create cell for computer grid
        const computerCell = document.createElement('div');
        computerCell.classList.add('compCell');
        computerCell.dataset.coordinate = coordinate;
        computerCell.dataset.clicked = false;
        computerGridContainer.appendChild(computerCell);
      }
    }
  }

  bindEventListeners(isPlayerTurn, receiveAttackFn) {
    const cells = document.querySelectorAll('.compCell');
    cells.forEach((cell) => {
      cell.addEventListener('click', () => {
        if (
          cell.classList.contains('hit') ||
          cell.classList.contains('missed') ||
          !isPlayerTurn
        ) {
          return;
        }
        const coordinate = cell.dataset.coordinate;
        receiveAttackFn(coordinate); // Pass the coordinate argument
        cell.dataset.clicked = 'true';
      });
    });
  }

  updateShipOnUI(coordinate, size, orientation, isPlayerBoard = false) {
    const startRow = coordinate.charCodeAt(0) - 65; // Convert A-J to 0-9
    const startCol = parseInt(coordinate.slice(1)) - 1; // Convert 1-10 to 0-9

    for (let i = 0; i < size; i++) {
      let cellCoordinate;
      if (orientation.toLowerCase() === 'x') {
        cellCoordinate = `${String.fromCharCode(65 + startRow)}${startCol + i + 1}`;
      } else if (orientation.toLowerCase() === 'y') {
        cellCoordinate = `${String.fromCharCode(65 + startRow + i)}${startCol + 1}`;
      }

      const cellSelector = isPlayerBoard ? '.playerCell' : '.compCell';
      const cell = document.querySelector(
        `${cellSelector}[data-coordinate="${cellCoordinate}"]`
      );

      if (cell) {
        cell.classList.add('ship');
      }
    }
  }

  updateUI(coordinate, result, isPlayerBoard) {
    const cellSelector = isPlayerBoard ? '.playerCell' : '.compCell';
    const cell = document.querySelector(
      `${cellSelector}[data-coordinate="${coordinate}"]`
    );

    if (cell) {
      if (result === 'miss') {
        cell.classList.add('missed');
        cell.textContent = 'x';
      } else if (result === 'sunk') {
        cell.classList.add('sunk');
        cell.classList.add('hit');
      } else {
        cell.classList.add('hit');
      }
    }
  }

  showWinner(winner) {
    const body = document.querySelector('.body');
    const gameOverDiv = document.createElement('div');
    gameOverDiv.classList.add('gameOverContainer');
    gameOverDiv.innerHTML = 'Game over, ' + `${winner}` + ' wins';
    body.appendChild(gameOverDiv);
  }
}

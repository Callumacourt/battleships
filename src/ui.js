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
        const cell = document.createElement('div');
        cell.classList.add('playerCell');
        const coordinate = `${String.fromCharCode(65 + row)}${col + 1}`;
        cell.dataset.coordinate = coordinate;
        cell.dataset.clicked = false;
        playerGridContainer.appendChild(cell);
      }
    }

    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        // Create cell for computer grid
        const cell = document.createElement('div');
        cell.classList.add('compCell');
        const coordinate = `${String.fromCharCode(65 + row)}${col + 1}`;
        cell.dataset.coordinate = coordinate;
        computerGridContainer.appendChild(cell);
      }
    }
  }

  bindEventListeners(isPlayerTurn, receiveAttackFn) {
    const cells = document.querySelectorAll('.compCell');
    cells.forEach((cell) => {
      cell.addEventListener('click', () => {
        if (cell.dataset.clicked === 'true' || !isPlayerTurn) {
          return;
        }
        const coordinate = cell.dataset.coordinate;
        const result = receiveAttackFn(coordinate); // Pass the coordinate argument
        this.updateUI(coordinate, result);
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

      const compCell = document.querySelector(
        `.compCell[data-coordinate="${cellCoordinate}"]`
      );
      const playerCell = document.querySelector(
        `.playerCell[data-coordinate="${cellCoordinate}"]`
      );

      if (isPlayerBoard) {
        if (playerCell) {
          playerCell.classList.add('ship');
        }
      } else {
        if (compCell) {
          compCell.classList.add('ship');
        }
      }
    }
  }

  updateUI(coordinate, result) {
    const cell = document.querySelector(
      `.compCell[data-coordinate="${coordinate}"]`
    );
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

  showWinner(winner) {
    const body = document.querySelector('.body');
    const gameOverDiv = document.createElement('div');
    gameOverDiv.classList.add('gameOverContainer');
    gameOverDiv.innerHTML = 'Game over, ' + `${winner}` + ' wins';
    body.appendChild(gameOverDiv);
  }
}

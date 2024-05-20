const playerGridContainer = document.querySelector('.playerGridContainer');
const computerGridContainer = document.querySelector('.computerGridContainer');

export function createGrid() {
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.classList.add(`cell-${col}-${row}`); // Add coordinate as a class
      playerGridContainer.appendChild(cell);

      const computerCell = document.createElement('div');
      computerCell.classList.add('cell');
      computerCell.classList.add(`cell-${col}-${row}`);
      computerGridContainer.appendChild(computerCell);
    }
  }
}

export function bindEventListeners() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      console.log('test');
    });
  });
}

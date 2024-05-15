
export function validateShipPlacement(coordinates, shipSize, orientation) {
    // Validation
    if (!/^([a-j])(10|[1-9])$/.test(coordinates)) {
      throw new Error('Invalid coordinates');
    }
    const validSizes = [1, 2, 3, 4, 5];
    if (!validSizes.includes(shipSize)) {
      throw new Error('Invalid ship size');
    }
    const validOrientations = ['X', 'Y'];
    if (!validOrientations.includes(orientation.toUpperCase())) {
      throw new Error('Invalid orientation');
    }
  }

  export function validateCell(board, row, col, isOccupied) {
    if (!isOccupied) {
      board[row][col][1] = true;
      return true; // Cell was successfully occupied
    } else {
      // Reject if the cell is already occupied
      throw new Error('Existing ship within coordinates');
    }
  }

  export function validateYBoundary(rows, row){
  if (row >= rows) {
    throw new Error('Out of boundaries');
  }}
  export function validateXBoundary(cols, col) {
    if (col >= cols) {
      throw new Error('Out of boundaries');
    }
  }
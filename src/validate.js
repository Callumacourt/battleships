
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

  
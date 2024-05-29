class Ship {
  constructor(shipSize, coordinates) {
    this.shipSize = shipSize;
    this.coordinates = coordinates;
    this.occupiedCells = [];
    this.hits = 0;
    this.identity = generateUniqueId(); // Generate a unique ID for the ship
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    return this.hits >= this.shipSize;
  }

  removeOccupiedCell(coordinate) {
    const index = this.occupiedCells.indexOf(coordinate);
    if (index !== -1) {
      this.occupiedCells.splice(index, 1);
    }
  }
}

// Helper function to generate a unique ID
function generateUniqueId() {
  return Math.random().toString(36).substring(2, 9);
}

module.exports = Ship;

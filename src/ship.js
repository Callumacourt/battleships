class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.beenSunk = false;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    if (this.hits >= this.length) {
      this.beenSunk = true;
      return true;
    }
  }
}

module.exports = Ship;

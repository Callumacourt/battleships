export class ship {
  constructor(length) {
    this.length = length;
    (this.hits = 0), (this.beenSunk = false);
  }
}

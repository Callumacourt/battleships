const Ship = require('./ship');

test('Ship increments hits correctly', () => {
  const ship = new Ship(8);
  ship.hit();
  expect(ship.hits).toBeGreaterThan(0);
});

test('Ship sinks when hits reach length', () => {
  const ship = new Ship(1);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

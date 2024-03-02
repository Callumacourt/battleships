const { ship } = require('./ship');

test('increments hit by correct amount', () => {
  const ship1 = new ship(8);
  ship1.hit();
  expect(ship1.hits).toBe(1);
});

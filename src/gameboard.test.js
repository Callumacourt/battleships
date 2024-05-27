// gameboard.test.js
import { gameboard } from './gameboard';

let gameBoard;
describe('Gameboard', () => {
  let gameBoard;

  beforeEach(() => {
    gameBoard = new gameboard();
  });

  test('creates a 10x10 board with labeled cells', () => {
    const expectedBoard = [
      ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10'],
      ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10'],
      ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10'],
      ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'],
      ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10'],
      ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10'],
      ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10'],
      ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10'],
      ['I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I10'],
      ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'],
    ].map((row) => row.map((cell) => [cell, false]));

    expect(gameBoard.board).toEqual(expectedBoard);
  });

  test('rejects invalid coordinates', () => {
    expect(() => gameBoard.placeShip('S4', 1, 'y')).toThrowError(
      'Invalid coordinates'
    );
  });

  test('rejects invalid ship size', () => {
    expect(() => gameBoard.placeShip('A4', 0, 'y')).toThrowError(
      'Invalid ship size'
    );
  });

  test('rejects invalid orientation', () => {
    expect(() => gameBoard.placeShip('A4', 1, 'd')).toThrowError(
      'Invalid orientation'
    );
  });

  test('Correctly places ship horizontally', () => {
    gameBoard.placeShip('A4', 4, 'x');
    const shipIdentity = gameBoard.ships[0].identity;

    const expectedBoard = [
      [
        ['A1', false],
        ['A2', false],
        ['A3', false],
        ['A4', true, shipIdentity],
        ['A5', true, shipIdentity],
        ['A6', true, shipIdentity],
        ['A7', true, shipIdentity],
        ['A8', false],
        ['A9', false],
        ['A10', false],
      ],
      [
        ['B1', false],
        ['B2', false],
        ['B3', false],
        ['B4', false],
        ['B5', false],
        ['B6', false],
        ['B7', false],
        ['B8', false],
        ['B9', false],
        ['B10', false],
      ],
      [
        ['C1', false],
        ['C2', false],
        ['C3', false],
        ['C4', false],
        ['C5', false],
        ['C6', false],
        ['C7', false],
        ['C8', false],
        ['C9', false],
        ['C10', false],
      ],
      [
        ['D1', false],
        ['D2', false],
        ['D3', false],
        ['D4', false],
        ['D5', false],
        ['D6', false],
        ['D7', false],
        ['D8', false],
        ['D9', false],
        ['D10', false],
      ],
      [
        ['E1', false],
        ['E2', false],
        ['E3', false],
        ['E4', false],
        ['E5', false],
        ['E6', false],
        ['E7', false],
        ['E8', false],
        ['E9', false],
        ['E10', false],
      ],
      [
        ['F1', false],
        ['F2', false],
        ['F3', false],
        ['F4', false],
        ['F5', false],
        ['F6', false],
        ['F7', false],
        ['F8', false],
        ['F9', false],
        ['F10', false],
      ],
      [
        ['G1', false],
        ['G2', false],
        ['G3', false],
        ['G4', false],
        ['G5', false],
        ['G6', false],
        ['G7', false],
        ['G8', false],
        ['G9', false],
        ['G10', false],
      ],
      [
        ['H1', false],
        ['H2', false],
        ['H3', false],
        ['H4', false],
        ['H5', false],
        ['H6', false],
        ['H7', false],
        ['H8', false],
        ['H9', false],
        ['H10', false],
      ],
      [
        ['I1', false],
        ['I2', false],
        ['I3', false],
        ['I4', false],
        ['I5', false],
        ['I6', false],
        ['I7', false],
        ['I8', false],
        ['I9', false],
        ['I10', false],
      ],
      [
        ['J1', false],
        ['J2', false],
        ['J3', false],
        ['J4', false],
        ['J5', false],
        ['J6', false],
        ['J7', false],
        ['J8', false],
        ['J9', false],
        ['J10', false],
      ],
    ];

    expect(gameBoard.board).toEqual(expectedBoard);
  });
  test('correctly places ship vertically', () => {
    gameBoard.placeShip('A1', 4, 'y');
    const shipIdentity = gameBoard.ships[0].identity;
    const expectedBoard = [
      [
        ['A1', true, shipIdentity],
        ['A2', false],
        ['A3', false],
        ['A4', false],
        ['A5', false],
        ['A6', false],
        ['A7', false],
        ['A8', false],
        ['A9', false],
        ['A10', false],
      ],
      [
        ['B1', true, shipIdentity],
        ['B2', false],
        ['B3', false],
        ['B4', false],
        ['B5', false],
        ['B6', false],
        ['B7', false],
        ['B8', false],
        ['B9', false],
        ['B10', false],
      ],
      [
        ['C1', true, shipIdentity],
        ['C2', false],
        ['C3', false],
        ['C4', false],
        ['C5', false],
        ['C6', false],
        ['C7', false],
        ['C8', false],
        ['C9', false],
        ['C10', false],
      ],
      [
        ['D1', true, shipIdentity],
        ['D2', false],
        ['D3', false],
        ['D4', false],
        ['D5', false],
        ['D6', false],
        ['D7', false],
        ['D8', false],
        ['D9', false],
        ['D10', false],
      ],
      [
        ['E1', false],
        ['E2', false],
        ['E3', false],
        ['E4', false],
        ['E5', false],
        ['E6', false],
        ['E7', false],
        ['E8', false],
        ['E9', false],
        ['E10', false],
      ],
      [
        ['F1', false],
        ['F2', false],
        ['F3', false],
        ['F4', false],
        ['F5', false],
        ['F6', false],
        ['F7', false],
        ['F8', false],
        ['F9', false],
        ['F10', false],
      ],
      [
        ['G1', false],
        ['G2', false],
        ['G3', false],
        ['G4', false],
        ['G5', false],
        ['G6', false],
        ['G7', false],
        ['G8', false],
        ['G9', false],
        ['G10', false],
      ],
      [
        ['H1', false],
        ['H2', false],
        ['H3', false],
        ['H4', false],
        ['H5', false],
        ['H6', false],
        ['H7', false],
        ['H8', false],
        ['H9', false],
        ['H10', false],
      ],
      [
        ['I1', false],
        ['I2', false],
        ['I3', false],
        ['I4', false],
        ['I5', false],
        ['I6', false],
        ['I7', false],
        ['I8', false],
        ['I9', false],
        ['I10', false],
      ],
      [
        ['J1', false],
        ['J2', false],
        ['J3', false],
        ['J4', false],
        ['J5', false],
        ['J6', false],
        ['J7', false],
        ['J8', false],
        ['J9', false],
        ['J10', false],
      ],
    ];
    expect(gameBoard.board).toEqual(expectedBoard);
  });

  test('rejects ships out of boundaries for Y coords', () => {
    expect(() => gameBoard.placeShip('I3', 4, 'y')).toThrowError(
      'Out of boundaries'
    );
  });

  test('rejects ships out of boundaries for X coords', () => {
    expect(() => gameBoard.placeShip('I8', 4, 'x')).toThrowError(
      'Out of boundaries'
    );
  });

  test('rejects duplicate ship placement', () => {
    gameBoard.placeShip('A1', 4, 'x');
    expect(() => gameBoard.placeShip('A1', 4, 'x')).toThrowError(
      'Existing ship within coordinates'
    );
  });

  test('correctly records attacks on squares', () => {
    const gameBoard = new gameboard();
    gameBoard.placeShip('A1', 4, 'x');

    const ship = gameBoard.ships.find((ship) =>
      ship.occupiedCells.includes('A1')
    );

    expect(ship.hits).toBe(0);

    gameBoard.receiveAttack('A1');

    // Check if the hitCount is updated
    expect(ship.hits).toBe(1);
  });

  test('correctly records ship sinkage', () => {
    const gameBoard = new gameboard();
    gameBoard.placeShip('A1', 4, 'x');

    const ship = gameBoard.ships.find((ship) =>
      ship.occupiedCells.includes('A1')
    );
    expect(ship.hits).toBe(0);
    gameBoard.receiveAttack('A2');
    gameBoard.receiveAttack('A2');
    gameBoard.receiveAttack('A2');
    expect(
      gameBoard.ships.find((ship) => ship.occupiedCells.includes('a1'))
    ).toBe(undefined);
    expect(gameBoard.receiveAttack('A2')).toBe('sunk');
    expect(gameBoard.isGameOver() === true);
  });

  test('correctly handles missed hits', () => {
    const gameBoard = new gameboard();
    gameBoard.placeShip('A2', 4, 'y');

    gameBoard.receiveAttack('E3');
    expect(gameBoard.missedHits).toContain('E3');
  });
});

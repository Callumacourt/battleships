// gameboard.test.js
import { gameboard } from './gameboard';
import Ship from './ship';

let gameBoard;
describe('Gameboard', () => {
  let gameBoard;

  beforeEach(() => {
    gameBoard = new gameboard();
  });

  test('creates a 10x10 board with labeled cells', () => {
    const expectedBoard = [
      ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10'],
      ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10'],
      ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10'],
      ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10'],
      ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'e10'],
      ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10'],
      ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9', 'g10'],
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10'],
      ['i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8', 'i9', 'i10'],
      ['j1', 'j2', 'j3', 'j4', 'j5', 'j6', 'j7', 'j8', 'j9', 'j10'],
    ].map((row) => row.map((cell) => [cell, false]));

    expect(gameBoard.board).toEqual(expectedBoard);
  });

  test('rejects invalid coordinates', () => {
    expect(() => gameBoard.placeShip('s4', 1, 'y')).toThrowError(
      'Invalid coordinates'
    );
  });

  test('rejects invalid ship size', () => {
    expect(() => gameBoard.placeShip('a4', 0, 'y')).toThrowError(
      'Invalid ship size'
    );
  });

  test('rejects invalid orientation', () => {
    expect(() => gameBoard.placeShip('a4', 1, 'd')).toThrowError(
      'Invalid orientation'
    );
  });

  test('Correctly places ship horizontally', () => {
    gameBoard.placeShip('a4', 4, 'x');
    const shipIdentity = gameBoard.ships[0].identity;

    const expectedBoard = [
      [
        ['a1', false],
        ['a2', false],
        ['a3', false],
        ['a4', true, shipIdentity],
        ['a5', true, shipIdentity],
        ['a6', true, shipIdentity],
        ['a7', true, shipIdentity],
        ['a8', false],
        ['a9', false],
        ['a10', false],
      ],
      [
        ['b1', false],
        ['b2', false],
        ['b3', false],
        ['b4', false],
        ['b5', false],
        ['b6', false],
        ['b7', false],
        ['b8', false],
        ['b9', false],
        ['b10', false],
      ],
      [
        ['c1', false],
        ['c2', false],
        ['c3', false],
        ['c4', false],
        ['c5', false],
        ['c6', false],
        ['c7', false],
        ['c8', false],
        ['c9', false],
        ['c10', false],
      ],
      [
        ['d1', false],
        ['d2', false],
        ['d3', false],
        ['d4', false],
        ['d5', false],
        ['d6', false],
        ['d7', false],
        ['d8', false],
        ['d9', false],
        ['d10', false],
      ],
      [
        ['e1', false],
        ['e2', false],
        ['e3', false],
        ['e4', false],
        ['e5', false],
        ['e6', false],
        ['e7', false],
        ['e8', false],
        ['e9', false],
        ['e10', false],
      ],
      [
        ['f1', false],
        ['f2', false],
        ['f3', false],
        ['f4', false],
        ['f5', false],
        ['f6', false],
        ['f7', false],
        ['f8', false],
        ['f9', false],
        ['f10', false],
      ],
      [
        ['g1', false],
        ['g2', false],
        ['g3', false],
        ['g4', false],
        ['g5', false],
        ['g6', false],
        ['g7', false],
        ['g8', false],
        ['g9', false],
        ['g10', false],
      ],
      [
        ['h1', false],
        ['h2', false],
        ['h3', false],
        ['h4', false],
        ['h5', false],
        ['h6', false],
        ['h7', false],
        ['h8', false],
        ['h9', false],
        ['h10', false],
      ],
      [
        ['i1', false],
        ['i2', false],
        ['i3', false],
        ['i4', false],
        ['i5', false],
        ['i6', false],
        ['i7', false],
        ['i8', false],
        ['i9', false],
        ['i10', false],
      ],
      [
        ['j1', false],
        ['j2', false],
        ['j3', false],
        ['j4', false],
        ['j5', false],
        ['j6', false],
        ['j7', false],
        ['j8', false],
        ['j9', false],
        ['j10', false],
      ],
    ];

    expect(gameBoard.board).toEqual(expectedBoard);
  });
  test('correctly places ship vertically', () => {
    gameBoard.placeShip('a1', 4, 'y');
    const shipIdentity = gameBoard.ships[0].identity;
    const expectedBoard = [
      [
        ['a1', true, shipIdentity],
        ['a2', false],
        ['a3', false],
        ['a4', false],
        ['a5', false],
        ['a6', false],
        ['a7', false],
        ['a8', false],
        ['a9', false],
        ['a10', false],
      ],
      [
        ['b1', true, shipIdentity],
        ['b2', false],
        ['b3', false],
        ['b4', false],
        ['b5', false],
        ['b6', false],
        ['b7', false],
        ['b8', false],
        ['b9', false],
        ['b10', false],
      ],
      [
        ['c1', true, shipIdentity],
        ['c2', false],
        ['c3', false],
        ['c4', false],
        ['c5', false],
        ['c6', false],
        ['c7', false],
        ['c8', false],
        ['c9', false],
        ['c10', false],
      ],
      [
        ['d1', true, shipIdentity],
        ['d2', false],
        ['d3', false],
        ['d4', false],
        ['d5', false],
        ['d6', false],
        ['d7', false],
        ['d8', false],
        ['d9', false],
        ['d10', false],
      ],
      [
        ['e1', false],
        ['e2', false],
        ['e3', false],
        ['e4', false],
        ['e5', false],
        ['e6', false],
        ['e7', false],
        ['e8', false],
        ['e9', false],
        ['e10', false],
      ],
      [
        ['f1', false],
        ['f2', false],
        ['f3', false],
        ['f4', false],
        ['f5', false],
        ['f6', false],
        ['f7', false],
        ['f8', false],
        ['f9', false],
        ['f10', false],
      ],
      [
        ['g1', false],
        ['g2', false],
        ['g3', false],
        ['g4', false],
        ['g5', false],
        ['g6', false],
        ['g7', false],
        ['g8', false],
        ['g9', false],
        ['g10', false],
      ],
      [
        ['h1', false],
        ['h2', false],
        ['h3', false],
        ['h4', false],
        ['h5', false],
        ['h6', false],
        ['h7', false],
        ['h8', false],
        ['h9', false],
        ['h10', false],
      ],
      [
        ['i1', false],
        ['i2', false],
        ['i3', false],
        ['i4', false],
        ['i5', false],
        ['i6', false],
        ['i7', false],
        ['i8', false],
        ['i9', false],
        ['i10', false],
      ],
      [
        ['j1', false],
        ['j2', false],
        ['j3', false],
        ['j4', false],
        ['j5', false],
        ['j6', false],
        ['j7', false],
        ['j8', false],
        ['j9', false],
        ['j10', false],
      ],
    ];
    expect(gameBoard.board).toEqual(expectedBoard);
  });

  test('rejects ships out of boundaries for Y coords', () => {
    expect(() => gameBoard.placeShip('i3', 4, 'y')).toThrowError(
      'Out of boundaries'
    );
  });

  test('rejects ships out of boundaries for X coords', () => {
    expect(() => gameBoard.placeShip('i8', 4, 'x')).toThrowError(
      'Out of boundaries'
    );
  });

  test('rejects duplicate ship placement', () => {
    gameBoard.placeShip('a1', 4, 'x');
    expect(() => gameBoard.placeShip('a1', 4, 'x')).toThrowError(
      'Existing ship within coordinates'
    );
  });

  test('correctly records attacks on squares', () => {
    const gameBoard = new gameboard();
    gameBoard.placeShip('a1', 4, 'x');

    const ship = gameBoard.ships.find((ship) =>
      ship.occupiedCells.includes('a1')
    );

    expect(ship.hits).toBe(0);

    gameBoard.receiveAttack('a1');

    // Check if the hitCount is updated
    expect(ship.hits).toBe(1);
  });

  test('correctly records ship sinkage', () => {
    const gameBoard = new gameboard();
    gameBoard.placeShip('a1', 4, 'x');

    const ship = gameBoard.ships.find((ship) =>
      ship.occupiedCells.includes('a1')
    );
    expect(ship.hits).toBe(0);
    gameBoard.receiveAttack('a1');
    gameBoard.receiveAttack('a1');
    gameBoard.receiveAttack('a1');
    expect(
      gameBoard.ships.find((ship) => ship.occupiedCells.includes('a1'))
    ).toBe(undefined);
    expect(gameBoard.receiveAttack('a1')).toBe('sunk');
    expect(gameBoard.isGameOver() === true);
  });

  test('correctly handles missed hits', () => {
    const gameBoard = new gameboard();
    gameBoard.placeShip('a2', 4, 'y');

    gameBoard.receiveAttack('e3');
    expect(gameBoard.missedHits).toContain('e3');
  });
});

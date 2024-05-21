import { Game } from './game.js';
import { UI } from './ui.js';

const game = new Game();

const ui = new UI(
  game.playerBoard,
  document.querySelector('.playerGridContainer'),
  document.querySelector('.computerGridContainer')
);

game.start();

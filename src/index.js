import { bindEventListeners, createGrid } from './ui';
import * as css from './style.css';
document.addEventListener('DOMContentLoaded', () => {
  createGrid();
  bindEventListeners();
});

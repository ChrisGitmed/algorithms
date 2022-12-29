/**
 * In the popular Minesweeper game you have a board with some mines and those
 * cells that don't contain a mine have a number in it that indicates the
 * total number of mines in the neighboring cells. Starting off with some
 * arrangement of mines we want to create a Minesweeper game setup.
 */
const directions = [
  [ 1,-1], [ 1, 0], [ 1, 1],
  [ 0,-1],          [ 0, 1],
  [-1,-1], [-1, 0], [-1, 1]
];

const solution = (input) => input.map((row, y) => row.map((_, x) => directions.reduce((count, i) => count += !!(input[y + i[0]] && input[y + i[0]][x + i[1]]), 0)));

module.exports = { solution };

/**
 * Check if all digits of the given integer are even.
 */
const solution = (input) => input
  .toString()
  .split('')
  .every((num) => num % 2 === 0);

module.exports = { solution };

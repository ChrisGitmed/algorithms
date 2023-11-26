/**
 * Given a non-negative integer x, return the square root of x rounded
 * down to the nearest integer. The returned integer should be
 * non-negative as well.
 *
 * You must not use any built-in exponent function or operator.
 *
 * @param {number} x
 * @return {number}
 */
const solution = (x) => {
  let square = 0;
  while (true) {
    if (square * square > x) return square - 1;
    square++;
  }
};

export { solution };

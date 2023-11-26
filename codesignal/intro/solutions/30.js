/**
 * Consider integer numbers from 0 to n - 1 written down along the circle in such a
 * way that the distance between any two neighboring numbers is equal (note that 0
 * and n - 1 are neighboring, too).
 *
 * Given n and firstNumber, find the number which is written in the radially
 * opposite position to firstNumber.
 *
 * @param {number} n A positive even integer
 * @param {number} firstNumber
 * @returns {number}
 */
const solution = (n, firstNumber) => {
  const halfNumber = n / 2;
  return (firstNumber >= halfNumber)
    ? firstNumber - halfNumber
    : firstNumber + halfNumber;
};

export { solution };

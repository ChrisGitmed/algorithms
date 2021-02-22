/**
 * Given a non-negative integer num, return the number of steps to reduce it to
 * zero. If the current number is even, you have to divide it by 2, otherwise,
 * you have to subtract 1 from it.
 */

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let counter = 0;
  while (num) {
    counter++;
    num % 2 === 0 ? num = num / 2 : num -= 1;
  }
  return counter;
};

/**
 * Initialize the counter for number of steps
 * While number is not 0:
 *    Increment the counter
 *    If number is even:
 *      assign num divided by 2 back into num
 *    else:
 *      assign num - 1 back into num
 */

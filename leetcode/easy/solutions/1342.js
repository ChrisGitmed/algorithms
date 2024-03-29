/**
 * Given an integer num, return the number of steps to reduce it to zero.
 *
 * In one step, if the current number is even, you have to divide it by 2,
 * otherwise, you have to subtract 1 from it.
 *
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = (num) =>{
  let stepCounter = 0;
  while (num) {
    num % 2 === 0 ? num /= 2 : num -= 1;
    stepCounter += 1;
  }
  return stepCounter;
};

export { numberOfSteps };

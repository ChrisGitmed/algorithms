/**
 * You are given an array of integers. On each move you are allowed to increase
 * exactly one of its element by one. Find the minimal number of moves required
 * to obtain a strictly increasing sequence from the input.
 */
const solution = (inputArray)  => {
  let counter = 0;
  for (let idx = 1; idx < inputArray.length; idx += 1) {
    while (inputArray[idx] <= inputArray[idx - 1]) {
      counter += 1;
      inputArray[idx] += 1;
    }
  }
  return counter;
}

module.exports = { solution };

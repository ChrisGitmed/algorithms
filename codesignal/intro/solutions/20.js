/**
 * Given an array of integers, find the maximal absolute difference between
 * any two of its adjacent elements.
 */
const solution = (input) => {
  let maxDiff = 0;
  for (let idx = 1; idx < input.length; idx += 1) {
    const diff = Math.abs(input[idx] - input[idx - 1]);
    if (diff > maxDiff) maxDiff = diff;
  }
  return maxDiff;
}

export { solution };

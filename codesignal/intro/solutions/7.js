/**
 * Given a sequence of integers as an array, determine whether
 * it is possible to obtain a strictly increasing sequence by
 * removing no more than one element from the array.

 * Note: sequence a0, a1, ..., an is considered to be strictly
 * increasing if a0 < a1 < ... < an. A sequence containing
 * only one element is also considered to be strictly increasing
 */
function almostIncreasingSequence(sequence) {
  let counter = 0;
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) counter += 1;
    if (counter > 1) return false;
    if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) return false;
  };
  return true;
};

export { almostIncreasingSequence };

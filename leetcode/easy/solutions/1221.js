/**
 * Balanced strings are those that have an equal quantity 
 * of 'L' and 'R' characters.
 * 
 * Given a balanced string s, split it in the maximum 
 * amount of balanced strings.
 * 
 * Return the maximum amount of split balanced strings.
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = (s) => {
  let matches = 0;
  let balance = 0;
  for (const char of s) {
    char === 'R' ? balance -= 1 : balance += 1;
    if (!balance) matches += 1;
  }
  return matches;
};

export { balancedStringSplit };
/**
 * Given a string s and an integer array indices of the same length. 
 * 
 * The string s will be shuffled such that the character at the ith 
 * position moves to indices[i] in the shuffled string.
 * 
 * Return the shuffled string.
 * 
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = (s, indices) => {
  const returnedArr = [];
  for (let i = 0; i < indices.length; i++) returnedArr[indices[i]] = s[i];
  return returnedArr.join('');
};

module.exports = { restoreString };
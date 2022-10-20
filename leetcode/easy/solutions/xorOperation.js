/**
 * Given an integer n and an integer start. 
 * 
 * Define an array nums where:
 * nums[i] = start + 2*i (0-indexed) and n == nums.length
 *  
 * Return the bitwise XOR of all elements of nums.
 * 
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = function(n, start) {
  let expString = '';
  for (let i = 0; i < n; i++) {
    expString += start + 2 * i;
    if (i !== n - 1) expString+= '^'
  }
  return eval(expString);
};

module.exports = { xorOperation };
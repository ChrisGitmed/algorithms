/**
 * Given an integer n and an integer start. 
 * 
 * Define an array nums where:
 * nums[i] = start + 2*i (0-indexed) and n == nums.length
 *  
 * Return the bitwise XOR of all elements of nums.
 */

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let expString = '';
    for (let i = 0; i < n; i++) {
        expString += start + 2 * i;
        if (i !== n - 1) expString+= '^'
    }
    return eval(expString);
};

// initialize a variable for the expression string
// loop n times
//      concat the proper value to the string (start + 2 * i)
//      if not on the last iteration, add '^'
// use the eval function to calculate the answer and return

module.exports = xorOperation;
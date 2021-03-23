/**
 * Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit 
 * integer range [-231, 231 - 1], then return 0.
 * 
 * Assume the environment does not allow you to store 64-bit integers 
 * (signed or unsigned).
 */

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    const reversedArr = x.toString().split('').reverse();
    if (reversedArr[reversedArr.length - 1] === '-') {
        reversedArr.unshift(reversedArr.pop())
    } 
    const newNum = reversedArr.join('') 
    if (newNum < Math.pow(-2, 31) || newNum > Math.pow(2, 31) - 1) {
        return 0;
    }
    return newNum;
};

module.exports = reverse;
/**
 * A self-dividing number is a number that is divisible by 
 * every digit it contains. 
 * 
 * For example, 128 is a self-dividing number because 
 * 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0. 
 * 
 * Also, a self-dividing number is not allowed to contain 
 * the digit zero.
 * 
 * Given a lower and upper number bound, output a list of 
 * every possible self dividing number, including the 
 * bounds if possible.
 * 
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
  const numArray = [];
  for (let i = left; i <= right; i++) {
    const numStr = i.toString();
    for (let x = 0; x < numStr.length; x++) {
      if (i % Number(numStr[x]) !== 0) break;
      if (x === numStr.length - 1 && !numStr.includes('0')) numArray.push(Number(numStr));
    }
  }
  return numArray;
};

module.exports = { selfDividingNumbers };
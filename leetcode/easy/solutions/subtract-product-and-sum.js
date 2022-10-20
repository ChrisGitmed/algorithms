/**
 * Given an integer number n, return the difference 
 * between the product of its digits and the sum of 
 * its digits.
 * 
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = (n) => {
  const numString = n.toString();
  let sum = 0;
  let product = 1;
  for (let i = 0; i < numString.length; i++) {
    let num = Number(numString[i]);
    sum += num;
    product *= num;
  }
  return product - sum;
};

module.exports = { subtractProductAndSum };
/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = (accounts) => {
  let max = -Infinity;
  for (const account of accounts) {
    const sum = account.reduce((total, current) => total + current);
    if (sum > max) max = sum;
  }
  return max;
};

module.exports = { maximumWealth };
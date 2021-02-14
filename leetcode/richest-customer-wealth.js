/**
 * You are given an m x n integer grid accounts where accounts[i][j] is the
 * amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that
 * the richest customer has.
 *
 * A customer's wealth is the amount of money they have in all their bank
 * accounts. The richest customer is the customer that has the maximum wealth.
 */

 /**
 * @param {number[][]} accounts
 * @return {number}
 */

function maximumWealth(accounts) {
  let max = -Infinity;
  for (let i = 0; i < accounts.length; i++) {
    let subarrayTotal = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      subarrayTotal += accounts[i][j];
    }
    if (subarrayTotal > max) {
      max = subarrayTotal;
    }
  }
  return max;
}

// create max variable and set it to lowest possible number.
// Iterate over accounts
//    create variable for subarray total
//    for loop over subarray indexes
//          add the value of each index to subarray total
//    if the subarray total is greater than the max,
//          assign the total to max
// return max

module.exports = maximumWealth;

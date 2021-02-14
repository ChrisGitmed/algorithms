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

// create max variable
// For loop over accounts
//    create variable for subarray total
//    for loop over subarray components
//        add each component to subarray total
//    compare subarray total to max (if total > max)
//          if yes: max = total
// return max

module.exports = maximumWealth;

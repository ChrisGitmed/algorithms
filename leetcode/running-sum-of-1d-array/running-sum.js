/**
 * Given an array nums. We define a running sum of an array as
 * runningSum[i] = sum(nums[0]…nums[i]).
 *
 * Return the running sum of nums.
 *
 *
 * @param {number[]} nums
 * @return {number[]}
 */

function runningSum(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    nums[i] = sum;
  }
  return nums;
}

// Create variable to hold sum
// for each number in the Array
//      add nums[i] to sum
//      assign the new sum to nums[i]
// return the nums Array

module.exports = runningSum;

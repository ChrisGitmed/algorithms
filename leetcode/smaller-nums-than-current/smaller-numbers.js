/**
 * Given the array nums, for each nums[i] find out how many numbers in the
 * array are smaller than it. That is, for each nums[i] you have to count the
 * number of valid j's such that j != i and nums[j] < nums[i].
 *
 * Return the answer in an array.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent (nums) {
  return nums.map(currentNum => {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < currentNum) count++;
    }
    return count;
  });
}

/**
 * Return the result of the map method being called on the nums array
 *    Initialize a counter for smaller numbers
 *    Iterate over the entire nums array
 *        If nums[i] is less than the currentNum, increment the counter
 *    return the counter
 */

module.exports = smallerNumbersThanCurrent;

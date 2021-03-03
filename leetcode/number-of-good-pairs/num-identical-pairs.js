/**
 * Given an array of integers nums.
 * 
 * A pair (i,j) is called good if nums[i] == nums[j] and i < j.
 * 
 * Return the number of good pairs. 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = (nums) => {
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
    }
    return count;
};
/**
 * initialize variable for counter
 * loop through entire nums array except for the last number
 *      from nums[i + 1], loop through the rest of nums
 *          if nums[i] equals nums[j]
 *              increment the counter
 * return the counter
 */
module.exports = numIdenticalPairs;
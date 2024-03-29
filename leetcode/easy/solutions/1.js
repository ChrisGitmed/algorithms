/** 
 * Given an array of integers nums and an integer target, return indices
 * of the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and
 * you may not use the same element twice.
 * 
 * You can return the answer in any order.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let x = i + 1; x < nums.length; x++) {
      if (nums[i] + nums[x] === target) return [i, x];
    }
  }
};

export { twoSum };
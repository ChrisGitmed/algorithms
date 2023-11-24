/**
 * Given a sorted array of distinct integers and a target value, return the
 * index if the target is found. If not, return the index where it would be
 * if it were inserted in order.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const solution = (nums, target) => {
  if (target < nums[0]) return 0;
  else for (let idx = 0; idx < nums.length; idx += 1) {
    if (nums[idx] === target) return idx;
    else if (nums[idx - 1] < target && nums[idx] > target) return idx;
  }
  return nums.length;
};

export { solution };
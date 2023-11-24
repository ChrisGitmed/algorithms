/**
 * Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
 * Return the array in the form [x1,y1,x2,y2,...,xn,yn].
 * 
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]} returnedArr
 */
const shuffle = (nums, n) => {
  const returnedArr = [];
  for (let i = 0; i < n; i++) {
    returnedArr.push(nums[i]);
    returnedArr.push(nums[i + n])
  }
  return returnedArr;
};

export { shuffle };

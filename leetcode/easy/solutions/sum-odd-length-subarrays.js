/**
 * Given an array of positive integers arr, calculate 
 * the sum of all possible odd-length subarrays.
 * 
 * A subarray is a contiguous subsequence of the array. 
 * 
 * Return the sum of all odd-length subarrays of arr.
 * 
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const subArr = [];
    for (let x = i; x < arr.length; x++) {
      subArr.push(arr[x]);
      if (subArr.length % 2 !== 0) count += eval(subArr.join('+'));
    }
  }
  return count;
};

module.exports = { sumOddLengthSubarrays };
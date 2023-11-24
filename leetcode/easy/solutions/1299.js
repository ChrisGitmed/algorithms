/**
 * Given an array arr, replace every element in that array with the greatest element among 
 * the elements to its right, and replace the last element with -1. 
 * 
 * After doing so, return the array.
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
const replaceElements = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const copiedArray = arr.slice(i + 1);
    arr[i] = copiedArray.reduce((accum, item) => Math.max(accum, item));
  }
  arr[arr.length - 1] = -1
  return arr;
};

export { replaceElements };
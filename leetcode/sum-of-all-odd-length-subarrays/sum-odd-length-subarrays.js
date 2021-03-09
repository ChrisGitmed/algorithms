/**
 * Given an array of positive integers arr, calculate 
 * the sum of all possible odd-length subarrays.
 * 
 * A subarray is a contiguous subsequence of the array. 
 * 
 * Return the sum of all odd-length subarrays of arr.
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const subArr = [];
        for (let x = i; x < arr.length; x++) {
            subArr.push(arr[x]);
            if (subArr.length % 2 !== 0) {
                count += eval(subArr.join('+'));
            }
        }
    }
    return count;
};


/**
 * Initialize variable for sum
 * For loop over array
 *      Initialize variable for subarrays
 *      Loop through the rest of the array starting from the current index
 *          Push the element to the subarray
 *          If the length of the subarray is odd
 *              Evaluate the value and add to sum
 */
module.exports = sumOddLengthSubarrays;
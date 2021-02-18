/**
 * There is a hidden integer array arr that consists of n non-negative integers.
 *
 * It was encoded into another integer array encoded of length n - 1, such that
 * encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then
 * encoded = [1,2,3].
 *
 * You are given the encoded array. You are also given an integer first, that
 * is the first element of arr, i.e. arr[0].
 *
 * Return the original array arr. It can be proved that the answer exists and
 * is unique.
 */

/**
 * Example:
 * Input: encoded = [1,2,3], first = 1
 * Output: [1,0,2,1]
 * Explanation: If arr = [1,0,2,1], then first = 1 and
 *              encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]
 */

/**
* @param {number[]} encoded
* @param {number} first
* @return {number[]}
*/

function decode(encoded, first) {
  encoded.unshift(first);
  for (let i = 1; i < encoded.length; i++) {
    encoded[i] = encoded[i] ^ encoded[i - 1];
  }
  return encoded;
}

// Insert first into the first index of array
// iterate over every element in the array except first
//      reassign array[i] with array[i] ^ array[i - 1]
// return the array

module.exports = decode;

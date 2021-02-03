/**
 * Given an array of integers, find the pair of adjacent elements
 * that has the largest product and return that product.
 *
 * @param: { number[] } inputArray
 * @return { number } largestProduct
 */
function adjacentElementsProduct(inputArray) {
  let max = -Infinity;
  for (let i = 0; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];
    if (product > max) { max = product }
  }
  return max;
}
/**
 * Create a variable (max) to hold the largest product
 * for loop to iterate over each number except for the last
 *    check if array[i] times array[i + 1] is greater than max
 *        if yes, max = previous expression
 * return max
 */

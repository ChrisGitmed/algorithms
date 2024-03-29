/**
 * Given an array of integers, find the pair of adjacent elements that has the
 * largest product and return that product.
 */
const adjacentElementsProduct = inputArray => {
  let max = -Infinity;
  for (let i = 0; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];
    if (product > max) max = product;
  };
  return max;
};

 export { adjacentElementsProduct };

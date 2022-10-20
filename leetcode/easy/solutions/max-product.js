/**
 * Given the array of integers nums, you will choose two 
 * different indices i and j of that array. Return the 
 * maximum value of (nums[i]-1)*(nums[j]-1).
 * 
 * @param {number[]} nums
 * @return {number}
 */
 const maxProduct = (nums) => {
  let product = -Infinity;
  for (let i = 0, j = 1; i < nums.length - 1; j++) {
    const newProduct = (nums[i] - 1) * (nums[j] - 1);
    if (newProduct > product) {
      product = newProduct;
    }
    if (j === nums.length - 1) {
      i++;
      j = i;
    }        
  }
  return product;
};

module.exports = { maxProduct };
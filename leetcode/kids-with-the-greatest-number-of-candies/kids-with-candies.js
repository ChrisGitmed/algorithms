/**
 * Kids With the Greatest Number of Candies
 *
 * Given the array candies and the integer extraCandies, where
 * candies[i] represents the number of candies that the ith kid has.
 *
 * For each kid check if there is a way to distribute extraCandies
 * among the kids such that he or she can have the greatest number
 * of candies among them. Notice that multiple kids can have the
 * greatest number of candies.
 *
 * @param: {number[]} candies
 * @param: {number} extraCandies
 * @return: {boolean[]}
 */
function kidsWithCandies(candies, extraCandies) {
  let max = -Infinity;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > max) { max = candies[i] }
  }
  const boolArray = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) { boolArray.push(true) }
    else { boolArray.push(false) }
  }
  return boolArray;
}

/**
 * Create a max variable
 * for loop through entire array
 *     check if array[i] is greater than max
 *         if yes, max = array[i]
 *
 * Create new array for booleans
 * for loop through array again
 *     check if array[i] PLUS extraCandies is greater than or equal to max.
 *         if yes, push true to the array
 *         if false: push false to the array.
 *
 * return the array
 */

module.exports = kidsWithCandies;

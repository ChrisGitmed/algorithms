/**
 * You're given strings jewels representing the types of stones that are jewels,
 * and stones representing the stones you have. Each character in stones is a
 * type of stone you have. You want to know how many of the stones you have are
 * also jewels.
 *
 * Letters are case sensitive, so "a" is considered a different type of stone
 * from "A".
 */

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

function numJewelsInStones(jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      count++;
    }
  }
  return count;
}

// initialize count var
// for loop through second string
//   check if string1 includes string2[i]
//     increment count
// return

module.exports = numJewelsInStones;

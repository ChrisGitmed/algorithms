/**
 * Given a string, find out if its characters can be rearranged to form a
 * palindrome.
 */
const solution = (inputString) => {
  const counts = {};
  for (const char of inputString) counts[char] = (counts[char] || 0) + 1;   
  let oddCounter = 0;
  for (const key in counts) if (counts[key] % 2 !== 0) oddCounter += 1;
  return oddCounter <= 1;
}

module.exports = { solution };

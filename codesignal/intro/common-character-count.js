/**
 * Given two strings, find the number of common characters between them.
 *
 * @param: {string} s1
 * @param: {string} s2
 * @return: {number} count
 */

function commonCharacterCount(s1, s2) {
  const compareArray = s2.split('');
  let counter = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let x = 0; x < compareArray.length; x++) {
      if (s1[i] === compareArray[x]) {
        compareArray[x] = '!';
        counter++;
        break;
      }
    }
  }
  return counter;
}

/**
 *  Split the string into an array. (So it is mutable)
 *  initialize counter to zero
 *  loop over first string
 *    loop over the created array.
 *      if s1[i] is equal to array[x]
 *        array[x] = '!' (So that no char in s1 will match)
 *        counter plus one
 *        break out of inner loop
 *  return counter;
 */

module.exports = commonCharacterCount;

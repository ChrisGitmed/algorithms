/**
 * Given the string, check if it is a palindrome.
 *
 * @param: {string} inputString
 * @return: {boolean}
 */

function checkPalindrome(inputString) {
  for (let i = 0; i < Math.floor(inputString.length / 2); i++) {
    if (inputString[i] !== inputString[inputString.length - (i + 1)]) {
      return false;
    }
  }
  return true;
}

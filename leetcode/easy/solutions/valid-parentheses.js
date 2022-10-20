/**
 * Given a string s containing just the characters '(',
 * ')', '{', '}', '[' and ']', determine if the input
 * string is valid.
 *
 * An input string is valid if:
 *  - Open brackets must be closed by the same type of brackets.
 *  - Open brackets must be closed in the correct order.
 *  - Every close bracket has a corresponding open bracket of the same type.
 * 
 * @param {string} s
 * @return {number}
 */
const isValid = (s) => {
  const stack = [];
  const hash = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  for (const char of s) {
    if (char in hash) stack.push(char);
    else if (hash[stack.pop()] !== char) return false;
  }
  return !stack.length;
};

module.exports = { isValid };
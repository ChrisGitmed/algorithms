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
  // Iterate over the string
  for (const char of s) {
    switch (char) {
      case '(':
      case '[':
      case '{':
        stack.push(char);
        break;
      case ')':
        if (stack.slice(-1) === '(') {
          stack.pop();
        } else return false;
        break;
      case ']':
        if (stack.slice(-1) == '[') {
          stack.pop();
        } else return false;
        break;
      case '}':
        if (stack.slice(-1) === '{') {
          stack.pop();
        } else return false;
        break;
    }
  }
  return true;
};

module.exports = { isValid };
/**
 * Given a string of lowercase English characters, your task is
 * to replace each of its characters by the next one in the
 * English alphabet; i.e. replace a with b, replace b with c,
 * etc (z would be replaced by a).
 * 
 * @param {string} inputString 
 * @returns {string}
 */
const solution = (inputString) => inputString
  .split('')
  .map((char) => char === 'z'
      ? 'a'
      : String.fromCharCode(char.charCodeAt() + 1)
  ).join('');

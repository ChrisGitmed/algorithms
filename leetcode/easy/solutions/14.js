/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 * 
 * @param {string[]} strs
 * @return {string}
 */
 const longestCommonPrefix = (strs) => {
  if (!strs.length) return '';

  for (let i = 0; i <= strs[0].length; i++) {
    if (!strs.every((string) => string[i] === strs[0][i])) return strs[0].slice(0, i);
  }

  return strs[0];
};

export { longestCommonPrefix };
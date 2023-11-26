/**
 * Correct variable names consist only of English letters, digits
 * and underscores and they can't start with a digit.
 *
 * Check if the given string is a correct variable name.
 *
 * @param {*} name
 * @returns {Boolean}
 */
const solution = (name) => /^[a-z_]\w*$/i.test(name);

export { solution };

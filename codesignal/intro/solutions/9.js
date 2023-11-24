/**
 * Given an array of strings, return another array containing all of its longest
 * strings.
 */
const solution = (input) => {
  let maxStringSize = 0;
  for (const str of input) {
    if (str.length > maxStringSize) maxStringSize = str.length;
  }
  return input.filter((str) => str.length === maxStringSize);
}

export { solution };

/**
 * Given an array of integers, replace all the occurrences of elemToReplace
 * with substitutionElem.
 */
const solution = (inputArray, elemToReplace, substitutionElem) =>
  inputArray.map((elem) => elem === elemToReplace ? substitutionElem : elem);

export { solution };

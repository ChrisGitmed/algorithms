/**
 * Two arrays are called similar if one can be obtained from another by swapping
 * at most one pair of elements in one of the arrays.
 * 
 * Given two arrays a and b, check whether they are similar.
 */
const solution = (arrOne, arrTwo) => {
  const diff = [];
  for (const idx in arrOne) if (arrOne[idx] !== arrTwo[idx]) diff.push(idx);
  if(diff.length === 0) return true;
  if(
    diff.length === 2 &&
    arrOne[diff[0]] === arrTwo[diff[1]] &&
    arrOne[diff[1]] === arrTwo[diff[0]]
  ) return true;

  return false;
}

export { solution };

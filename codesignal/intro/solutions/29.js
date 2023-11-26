/**
 * Given two cells on the standard chess board, determine whether they have the same
 * color or not.
 *
 * @param {string} cell1
 * @param {string} cell2
 * @returns {boolean}
 */
const solution = (cell1, cell2) => {
  const oddBlackLetters = [
    'A', 'C', 'E', 'G',
  ];

  const parseCell = (cell) => {
    const [letter, integer] = cell.split('');
    const numberIsEven = integer % 2 === 0;
    if (oddBlackLetters.includes(letter)) {
      return numberIsEven ? 'white' : 'black';
    }
    return numberIsEven ? 'black' : 'white';
  };

  const colorOne = parseCell(cell1);
  const colorTwo = parseCell(cell2);

  return colorOne === colorTwo;
};

export { solution };

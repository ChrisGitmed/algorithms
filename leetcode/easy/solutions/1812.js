/**
 * You are given coordinates, a string that represents the 
 * coordinates of a square of the chessboard.
 * 
 * Return true if the square is white, and false if the 
 * square is black.
 * 
 * The coordinate will always represent a valid chessboard 
 * square. The coordinate will always have the letter first, 
 * and the number second.
 * 
 * @param {string} coordinates
 * @return {boolean}
 */
const squareIsWhite = (coordinates) => {
  const arr = ['a','b','c','d','e','f','g','h'];
  let i = 0;
  while (coordinates[0] !== arr[i]) {
    i++;
  };
  return (i + Number(coordinates[1])) % 2 === 0;
};

export { squareIsWhite };
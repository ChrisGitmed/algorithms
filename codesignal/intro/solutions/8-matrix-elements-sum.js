/**
 * After becoming famous, the CodeBots decided to move into a new building
 * together. Each of the rooms has a different cost, and some of them are free,
 * but there's a rumour that all the free rooms are haunted! Since the CodeBots
 * are quite superstitious, they refuse to stay in any of the free rooms, or
 * any of the rooms below any of the free rooms.
 *
 * Given matrix, a rectangular matrix of integers, where each value represents
 * the cost of the room, your task is to return the total sum of all rooms that
 * are suitable for the CodeBots (ie: add up all the values that don't appear
 * below a 0).
 *
 * @param { Number[][] } matrix
 * @return { Number }
 */
const matrixElementsSum = matrix => {
  let sum = 0;
  const hauntedRooms = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let x = 0; x < matrix[i].length; x++) {
      for (let y = 0; y < hauntedRooms.length; y++) matrix[i][hauntedRooms[y]] = 0;
      sum += matrix[i][x];
      if (matrix[i][x] === 0) hauntedRooms.push(x);
    };
  };
  return sum;
};

module.exports = matrixElementsSum;

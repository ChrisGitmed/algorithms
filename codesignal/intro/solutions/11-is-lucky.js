/**
 * Ticket numbers consist of an even number of digits. A ticket number
 * is considered lucky if the sum of the first half of the digits is equal to
 * the sum of the second half. 
 * 
 * Given a ticket number, determine if it's lucky or not.
 */
const solution = (input) => {
  const numArr = input.toString().split('').map((char) => Number(char));
  const sumOne = numArr.slice(0, numArr.length / 2).reduce((a, b) => a + b, 0);
  const sumTwo = numArr.slice(numArr.length / 2).reduce((a, b) => a + b, 0);
  return sumOne === sumTwo;
}

module.exports = { solution };

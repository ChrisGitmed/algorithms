/**
 * Given a year, return the century it is in.
 * The first century spans from the year 1 up to and
 * including the year 100, the second - from the year
 * 101 up to and including the year 200, etc.
 *
 * @param { Number } year 
 * @returns { Number }
 */
// function centuryFromYear(year) {
//   return Math.ceil(year / 100);
// }
const centuryFromYear = year => Math.ceil(year / 100);

module.exports = centuryFromYear;

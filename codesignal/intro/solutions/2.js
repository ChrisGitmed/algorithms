/**
 * Given a year, return the century it is in. The first century spans from the
 * year 1 up to and including the year 100, the second - from the year 101 up
 * to and including the year 200, etc.
 */
const centuryFromYear = (year) => Math.ceil(year / 100);

export { centuryFromYear };

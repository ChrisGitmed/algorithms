/**
 * Given a rectangular matrix of characters, add a border of asterisks(*) to it.
 * 
 * Example:
 * picture = ["abc",
 *            "ded"]
 * 
 * solution(picture) = ["*****",
 *                      "*abc*",
 *                      "*ded*",
 *                      "*****"]
 */
const solution = picture => {
  const width = picture[0].length + 2;

  return [
      '*'.repeat(width),
      ...picture.map( row => `*${row}*`),
      '*'.repeat(width)
  ];
};
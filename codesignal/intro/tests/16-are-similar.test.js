const { test, expect} = require('@jest/globals');
const { solution } = require('../solutions/16-are-similar.js');

test('Should find whether two arrays are similar.', () => {
  const inputOne = [1, 2, 3];
  const inputTwo = [1, 2, 3];
  const result = true;
  expect(solution(inputOne, inputTwo)).toBe(result);
});

test('Should find whether two arrays are similar.', () => {
  const inputOne = [1, 2, 3];
  const inputTwo = [2, 1, 3];
  const result = true;
  expect(solution(inputOne, inputTwo)).toBe(result);
});

test('Should find whether two arrays are similar.', () => {
  const inputOne = [1, 2, 2];
  const inputTwo = [2, 1, 1];
  const result = false;
  expect(solution(inputOne, inputTwo)).toBe(result);
});

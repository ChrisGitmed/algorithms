const { test, expect} = require('@jest/globals');
const { solution } = require('../solutions/solutions/20-array-maximal-difference.js');

test('Should return the maximal absolute difference between two adjacent elements', () => {
  const input = [2, 4, 1, 0];
  expect(solution(input)).toBe(3);
});

test('Should return the maximal absolute difference between two adjacent elements', () => {
  const input = [1, 1, 1, 1];
  expect(solution(input)).toBe(0);
});

test('Should return the maximal absolute difference between two adjacent elements', () => {
  const input = [-1, 4, 10, 3, -2];
  expect(solution(input)).toBe(7);
});

const { test, expect} = require('@jest/globals');
const { solution } = require('../solutions/12-sort-by-height.js');

test('Should return the sorted array with trees in place.', () => {
  const input = [-1, 150, 190, 170, -1, -1, 160, 180];
  const result = [-1, 150, 160, 170, -1, -1, 180, 190];
  expect(solution(input)).toEqual(result);
});

test('Should return the sorted array with trees in place.', () => {
  const input = [-1, -1, -1, -1, -1];
  const result = [-1, -1, -1, -1, -1];
  expect(solution(input)).toEqual(result);
});

test('Should return the sorted array with trees in place.', () => {
  const input = [-1];
  const result = [-1];
  expect(solution(input)).toEqual(result);
});

test('Should return the sorted array with trees in place.', () => {
  const input = [4, 2, 9, 11, 2, 16];
  const result = [2, 2, 4, 9, 11, 16];
  expect(solution(input)).toEqual(result);
});

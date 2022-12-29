const { test, expect} = require('@jest/globals');
const { solution } = require('../solutions/22-avoid-obstacles.js');

test('Should ', () => {
  const input = [5, 3, 6, 7, 9];
  const result = 4;
  expect(solution(input)).toEqual(result);
});

test('Should ', () => {
  const input = [2, 3];
  const result = 4;
  expect(solution(input)).toEqual(result);
});

test('Should ', () => {
  const input = [1, 4, 10, 6, 2];
  const result = 7;
  expect(solution(input)).toEqual(result);
});

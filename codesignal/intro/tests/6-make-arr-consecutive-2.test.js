const { test, expect} = require('@jest/globals');
const { solution } = require('../solutions/6-make-arr-consecutive-2.js');

test('Should return the minimum number of statues needed', () => {
  const input = [6, 2, 3, 8];
  expect(solution(input)).toBe(3);
});

test('Should return the minimum number of statues needed', () => {
  const input = [6, 3];
  expect(solution(input)).toBe(2);
});

test('Should return the minimum number of statues needed', () => {
  const input = [1];
  expect(solution(input)).toBe(0);
});


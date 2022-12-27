const { test, expect } = require('@jest/globals');
const { runningSum } = require('../solutions/1480-running-sum');

test('Should return the running sum of a 1D Array.', () => {
  const nums = [1, 2, 3, 4];
  expect(runningSum(nums)).toStrictEqual([1, 3, 6, 10]);
});

test('Should return the running sum of a 1D Array.', () => {
  const nums = [1, 1, 1, 1, 1];
  expect(runningSum(nums)).toStrictEqual([1, 2, 3, 4, 5]);
});

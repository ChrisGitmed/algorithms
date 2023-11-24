import { test, expect } from '@jest/globals';
import { runningSum } from'../solutions/1480.js';

test('Should return the running sum of a 1D Array.', () => {
  const nums = [1, 2, 3, 4];
  expect(runningSum(nums)).toStrictEqual([1, 3, 6, 10]);
});

test('Should return the running sum of a 1D Array.', () => {
  const nums = [1, 1, 1, 1, 1];
  expect(runningSum(nums)).toStrictEqual([1, 2, 3, 4, 5]);
});

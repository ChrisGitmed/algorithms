import { test, expect } from '@jest/globals';
import { kidsWithCandies } from'../solutions/1431.js';

test('Return of kidsWithCandies([2, 3, 5, 1, 3], 3) should be [true, true, true, false, true]', () => {
  expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([true, true, true, false, true]);
});

test('Return of kidsWithCandies([4, 2, 1, 1, 2], 1) should be [true, false, false, false, false]', () => {
  expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toEqual([true, false, false, false, false]);
});

test('Return of kidsWithCandies([12, 1, 12], 10) should be [true, false, true]', () => {
  expect(kidsWithCandies([12, 1, 12], 10)).toEqual([true, false, true]);
});

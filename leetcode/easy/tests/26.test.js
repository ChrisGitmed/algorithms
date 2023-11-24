import { test, expect } from '@jest/globals';
import { removeDuplicates } from'../solutions/26.js';

test('Should remove the duplicates in-place.', () => {
  const nums = [1, 1, 2];
  expect(removeDuplicates(nums)).toEqual(2);
});

test('Should remove the duplicates in-place.', () => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  expect(removeDuplicates(nums)).toEqual(5);
});

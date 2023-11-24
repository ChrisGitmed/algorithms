import { test, expect } from '@jest/globals';
import { removeElement } from'../solutions/27.js';

test('Should remove the duplicates in-place.', () => {
  const nums = [3, 2, 2, 3];
  const val = 3;
  expect(removeElement(nums, val)).toEqual(2);
});

test('Should remove the duplicates in-place.', () => {
  const nums = [0, 1, 2, 2, 3, 0, 4, 2];
  const val = 2;
  expect(removeElement(nums, val)).toEqual(5);
});

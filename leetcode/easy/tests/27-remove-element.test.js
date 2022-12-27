const { test, expect } = require('@jest/globals');
const { removeElement } = require('../solutions/27-remove-element');

test('Should remove the duplicates in-place.', () => {
  const nums = [3, 2, 2, 3];
  const val = 3;
  expect(removeElement(nums, val)).toStrictEqual([2, 2, _, _]);
});

test('Should remove the duplicates in-place.', () => {
  const nums = [0, 1, 2, 2, 3, 0, 4, 2];
  const val = 2;
  expect(removeElement(nums, val)).toStrictEqual([0, 1, 4, 0, 3, _, _, _]);
});

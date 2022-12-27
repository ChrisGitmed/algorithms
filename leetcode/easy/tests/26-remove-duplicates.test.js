const { test, expect } = require('@jest/globals');
const { removeDuplicates } = require('../solutions/26-remove-duplicates');

test('Should remove the duplicates in-place.', () => {
  const nums = [1, 1, 2];
  expect(removeDuplicates(nums)).toStrictEqual([1, 2, _]);
});

test('Should remove the duplicates in-place.', () => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  expect(removeDuplicates(nums)).toStrictEqual([0, 1, 2, 3, 4, _, _, _, _, _]);
});

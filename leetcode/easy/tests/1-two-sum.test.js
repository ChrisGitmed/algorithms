const { test, expect } = require('@jest/globals');
const { twoSum } = require('../solutions/1-two-sum');

test('Should return indices of the two numbers such that they add up to target.', () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  expect(twoSum(nums, target)).toStrictEqual([0, 1]);
});

test('Should return indices of the two numbers such that they add up to target.', () => {
  const nums = [3,2,4];
  const target = 6;
  expect(twoSum(nums, target)).toStrictEqual([1, 2]);
});

test('Should return indices of the two numbers such that they add up to target.', () => {
  const nums = [3,3];
  const target = 6;
  expect(twoSum(nums, target)).toStrictEqual([0, 1]);
});

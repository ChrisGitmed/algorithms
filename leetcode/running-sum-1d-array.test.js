const { test, expect } = require('@jest/globals');
const runningSum = require('./running-sum-1d-array');

test('Expect output of runningSum([1, 2, 3, 4]) to equal [1, 3, 6, 10].', () => {
  expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
});

test('Expect output of runningSum([1 ,1 ,1 ,1 ,1]) to equal [1 ,2 ,3 ,4 ,5].', () => {
  expect(runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
});

test('Expect output of runningSum([3, 1, 2, 10, 1]) to equal [3, 4, 6, 16, 17].', () => {
  expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
});

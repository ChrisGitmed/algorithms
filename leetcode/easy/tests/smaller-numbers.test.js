const { test, expect } = require('@jest/globals');
const { smallerNumbersThanCurrent } = require('../solutions/smaller-numbers');

test('Test 1 for smallerNumbersThanCurrent', () => {
  const input = [8, 1, 2, 2, 3];
  const output = [4, 0, 1, 1, 3];
  expect(smallerNumbersThanCurrent(input)).toEqual(output);
});

test('Test 2 for smallerNumbersThanCurrent', () => {
  const input = [6, 5, 4, 8];
  const output = [2, 1, 0, 3];
  expect(smallerNumbersThanCurrent(input)).toEqual(output);
});

test('Test for smallerNumbersThanCurrent', () => {
  const input = [7, 7, 7];
  const output = [0, 0, 0];
  expect(smallerNumbersThanCurrent(input)).toEqual(output);
});

const { test, expect } = require('@jest/globals');
const { maximumWealth } = require('../solutions/richest-customer');

test('Should find the largest sum of elements in an array.', () => {
  const accounts = [[1, 2, 3], [3, 2, 1]];
  expect(maximumWealth(accounts)).toBe(6);
});

test('Should find the largest sum of elements in an array.', () => {
  const accounts = [[1, 5], [7, 3], [3, 5]]
  expect(maximumWealth(accounts)).toBe(10);
});

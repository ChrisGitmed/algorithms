const { test, expect } = require('@jest/globals');
const { numIdenticalPairs } = require('../solutions/1512-num-identical-pairs');

test('Should find all the good pairs', () => {
  const input = [1, 2, 3, 1, 1, 3];
  const output = 4;
  expect(numIdenticalPairs(input)).toBe(output);
})

test('Should find all the good pairs', () => {
  const input = [1, 1, 1, 1];
  const output = 6;
  expect(numIdenticalPairs(input)).toBe(output);
})
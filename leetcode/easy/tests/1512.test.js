import { test, expect } from '@jest/globals';
import { numIdenticalPairs } from'../solutions/1512.js';

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
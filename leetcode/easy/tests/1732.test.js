import { test, expect } from '@jest/globals';
import { largestAltitude } from'../solutions/1732.js';

test('Should return the highest altitude.', () => {
  const gain = [-5, 1, 5, 0, -7];
  expect(largestAltitude(gain)).toBe(1);
});

test('Should return the highest altitude.', () => {
  const gain = [-4, -3, -2, -1, 4, 3, 2];
  expect(largestAltitude(gain)).toBe(0);
});

import { test, expect } from '@jest/globals';
import { maxProduct } from'../solutions/1464.js';

test('Should return the maximum product.', () => {
  const nums = [3, 4, 5, 2]
  expect(maxProduct(nums)).toBe(12);
});

test('Should return the maximum product.', () => {
  const nums = [1, 5, 4, 5]
  expect(maxProduct(nums)).toBe(16);
});

test('Should return the maximum product.', () => {
  const nums = [3, 7];
  expect(maxProduct(nums)).toBe(12);
});
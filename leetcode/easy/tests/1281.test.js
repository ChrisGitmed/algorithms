import { test, expect } from '@jest/globals';
import { subtractProductAndSum } from'../solutions/1281.js';

test('Should return the difference between the product and sum.', () => {
  const n = 234;
  expect(subtractProductAndSum(n)).toBe(15);
});

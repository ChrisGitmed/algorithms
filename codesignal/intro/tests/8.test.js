import { test, expect } from '@jest/globals';
import { matrixElementsSum } from'../solutions/8.js';

test(`Expect matrixElementsSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]) to be 9.`, () => {
  expect(matrixElementsSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]])).toBe(9);
});

const { test , expect } = require('@jest/globals');
const adjacentElementsProduct = require('./adjacentElementsProduct');

test('Output of adjacentElementsProduct([3, 6, -2, -5, 7, 3]) should be 21.', () => {
  expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).toBe(21);
});

test('Output of adjacentElementsProduct([3, 6, -2, -5, 7, 3]) should not be 0.', () => {
  expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).not.toBe(0);
});

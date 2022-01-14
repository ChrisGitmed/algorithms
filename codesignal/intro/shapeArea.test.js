const { test, expect } = require('@jest/globals');
const shapeArea = require('./shapeArea');

test('Expect shapeArea(1) to be 1.', () => {
  expect(shapeArea(1)).toBe(1);
});

test('Expect shapeArea(2) to be 5.', () => {
  expect(shapeArea(2)).toBe(5);
});

test('Expect shapeArea(3) to be 13.', () => {
  expect(shapeArea(3)).toBe(13);
});

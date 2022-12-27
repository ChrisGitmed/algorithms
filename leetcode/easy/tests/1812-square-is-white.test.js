const { test, expect } = require('@jest/globals');
const { squareIsWhite } = require('../solutions/1812-square-is-white');

test('Is the square white?', () => {
  const input = 'a1';
  expect(squareIsWhite(input)).toBe(false)
});

test('Is the square white?', () => {
  const input = 'h3';
  expect(squareIsWhite(input)).toBe(true)
});
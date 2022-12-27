const { test, expect } = require('@jest/globals');
const { isValid } = require('../solutions/20-valid-parentheses');

test('Should determine if the input string is valid.', () => {
  const s = '()';
  expect(isValid(s)).toBe(true);
});

test('Should determine if the input string is valid.', () => {
  const s = '()[]{}';
  expect(isValid(s)).toBe(true);
});

test('Should determine if the input string is valid.', () => {
  const s = '(]';
  expect(isValid(s)).toBe(false);
});

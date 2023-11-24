import { test, expect } from '@jest/globals';
import { isValid } from'../solutions/20.js';

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

import { test, expect } from '@jest/globals';
import { squareIsWhite } from'../solutions/1812.js';

test('Is the square white?', () => {
  const input = 'a1';
  expect(squareIsWhite(input)).toBe(false)
});

test('Is the square white?', () => {
  const input = 'h3';
  expect(squareIsWhite(input)).toBe(true)
});
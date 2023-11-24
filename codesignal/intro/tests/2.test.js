import { test , expect } from '@jest/globals';
import { centuryFromYear } from'../solutions/2.js';

test('Expect return of centuryFromYear(1905) to be 20.', () => {
  expect(centuryFromYear(1905)).toBe(20);
});

test('Expect return of centuryFromYear(1700) to be 17.', () => {
  expect(centuryFromYear(1700)).toBe(17);
});

test('Expect return of centuryFromYear(45) to be 1.', () => {
  expect(centuryFromYear(45)).toBe(1);
});

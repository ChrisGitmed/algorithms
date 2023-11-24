import { test, expect } from '@jest/globals';
import { numberOfSteps } from'../solutions/1342.js';

test('Should return the number of steps to reduce n to zero.', () => {
  const num = 14;
  expect(numberOfSteps(num)).toBe(6);
});

test('Should return the number of steps to reduce n to zero.', () => {
  const num = 8;
  expect(numberOfSteps(num)).toBe(4);
});

test('Should return the number of steps to reduce n to zero.', () => {
  const num = 123;
  expect(numberOfSteps(num)).toBe(12);
});

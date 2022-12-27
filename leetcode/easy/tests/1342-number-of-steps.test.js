const { test, expect } = require('@jest/globals');
const { numberOfSteps } = require('../solutions/1342-number-of-steps');

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

const { test, expect } = require('@jest/globals');
const numberOfSteps = require('../solutions/number-of-steps');

test('Gets the number of steps to 0', () => {
  const input = 14;
  const output = 6;
  expect(numberOfSteps(input)).toBe(output);
});

test('Gets the number of steps to 0', () => {
  const input = 8;
  const output = 4;
  expect(numberOfSteps(input)).toBe(output);
});

test('Gets the number of steps to 0', () => {
  const input = 123;
  const output = 12;
  expect(numberOfSteps(input)).toBe(output);
});

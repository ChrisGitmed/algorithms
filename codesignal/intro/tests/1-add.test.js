const { test, expect } = require('@jest/globals');
const { add } = require('../solutions/1-add');

test('Adds 1 and 2 to equal 3.', () => {
  expect(add(1,2)).toBe(3);
});

test('Adds 100 and 300 to equal 400.', () => {
  expect(add(100,300)).toBe(400);
});
const { test, expect } = require('@jest/globals');
const { xorOperation } = require('../solutions/xorOperation');

test('Should return the bitwise XOR of all elements of nums', () => {
  const n = 5;
  const start = 0;
  expect(xorOperation(n, start)).toBe(8);
})

test('Should return the bitwise XOR of all elements of nums', () => {
  const n = 4;
  const start = 3;
  expect(xorOperation(n, start)).toBe(8);
})

test('Should return the bitwise XOR of all elements of nums', () => {
  const n = 1;
  const start = 7;
  expect(xorOperation(n, start)).toBe(7);
})

test('Should return the bitwise XOR of all elements of nums', () => {
  const n = 10;
  const start = 5;
  expect(xorOperation(n, start)).toBe(2);
})
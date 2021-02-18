const { test, expect } = require('@jest/globals');
const decode = require('./decode-xor-array');

test('Expect return of decode([1, 2, 3], 1) to equal [1, 0, 2, 1]', () => {
  expect(decode([1, 2, 3], 1)).toEqual([1, 0, 2, 1]);
});

test('Expect return of decode([6, 2, 7, 3], 4) to equal [4, 2, 0, 7, 4]', () => {
  expect(decode([6, 2, 7, 3], 4)).toEqual([4, 2, 0, 7, 4]);
});

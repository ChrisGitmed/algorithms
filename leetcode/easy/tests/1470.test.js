import { test, expect } from '@jest/globals';
import { shuffle } from'../solutions/1470.js';

test('Return of shuffle([2, 5, 1, 3, 4, 7], 3) should equal [2, 3, 5, 4, 1, 7].', () => {
  expect(shuffle([2, 5, 1, 3, 4, 7], 3)).toEqual([2, 3, 5, 4, 1, 7]);
});

test('Return of shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4) should equal [1, 4, 2, 3, 3, 2, 4, 1].', () => {
  expect(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)).toEqual([1, 4, 2, 3, 3, 2, 4, 1]);
});

test('Return of shuffle([1, 1, 2, 2], 2) should equal [1, 2, 1, 2].', () => {
  expect(shuffle([1, 1, 2, 2], 2)).toEqual([1, 2, 1, 2]);
});

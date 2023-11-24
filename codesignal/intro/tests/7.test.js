import { test, expect} from '@jest/globals';
import { almostIncreasingSequence } from'../solutions/7.js';

test('Expect output for [1, 3, 2, 1] should be false.', () => {
  expect(almostIncreasingSequence([1, 3, 2, 1])).toBe(false);
});

test('Expect output for [1, 3, 2] to be true.', () => {
  expect(almostIncreasingSequence([1, 3, 2])).toBe(true);
});

test('Expect output for [1, 2, 1, 2] to be false.', () => {
  expect(almostIncreasingSequence([1, 2, 1, 2])).toBe(false);
});

import { test, expect } from '@jest/globals';
import { checkPalindrome } from'../solutions/3.js';

test('Return of checkPalindrome("aabaa") should be true.', () => {
  expect(checkPalindrome('aabaa')).toBe(true);
});

test('Return of checkPalindrome("abcca") should be false.', () => {
  expect(checkPalindrome('abcca')).toBe(false);
});

test('Return of checkPalindrome("a") should be true.', () => {
  expect(checkPalindrome('a')).toBe(true);
});

const { test, expect } = require('@jest/globals');
const checkPalindrome = require('../solutions/checkPalindrome');

test('Return of checkPalindrome("aabaa") should be true.', () => {
  expect(checkPalindrome('aabaa')).toBe(true);
});

test('Return of checkPalindrome("abcca") should be false.', () => {
  expect(checkPalindrome('abcca')).toBe(false);
});

test('Return of checkPalindrome("a") should be true.', () => {
  expect(checkPalindrome('a')).toBe(true);
});

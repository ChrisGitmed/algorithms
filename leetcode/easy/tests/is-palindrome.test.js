const { test, expect } = require('@jest/globals');
const { isPalindrome } = require('../solutions/is-palindrome');

test('Should return true if x is a palindrome', () => {
  const x = 121;
  expect(isPalindrome(x)).toBe(true);
});

test('Should return true if x is a palindrome', () => {
  const x = -121;
  expect(isPalindrome(x)).toBe(false);
});

test('Should return true if x is a palindrome', () => {
  const x = 10;
  expect(isPalindrome(x)).toBe(false);
});

test('Should return true if x is a palindrome', () => {
  const x = -10;
  expect(isPalindrome(x)).toBe(false);
});

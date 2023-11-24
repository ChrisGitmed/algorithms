import { test, expect } from '@jest/globals';
import { isPalindrome } from'../solutions/9.js';

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

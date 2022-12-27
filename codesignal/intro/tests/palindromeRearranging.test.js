const { test, expect} = require('@jest/globals');
const { solution } = require('../solutions/palindromeRearranging');

test('Should tell if a given string can be rearranged to a palindrome', () => {
  expect(solution('aabb')).toBe(true);
});

test('Should tell if a given string can be rearranged to a palindrome', () => {
  expect(solution('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc')).toBe(false);
});

test('Should tell if a given string can be rearranged to a palindrome', () => {
  expect(solution('abbcabb')).toBe(true);
});

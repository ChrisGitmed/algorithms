import { test, expect } from '@jest/globals';
import { commonCharacterCount } from'../solutions/10.js';

test(`Return of commonCharacterCount('aabcc', 'adcaa') should be 3.`, () => {
  expect(commonCharacterCount('aabcc', 'adcaa')).toBe(3);
});

test(`Return of commonCharacterCount('zzzz', 'zzzzzzz') should be 4.`, () => {
  expect(commonCharacterCount('zzzz', 'zzzzzzz')).toBe(4);
});

test(`Return of commonCharacterCount('a', 'b') should be 0.`, () => {
  expect(commonCharacterCount('a', 'b')).toBe(0);
});

const { test, expect } = require('@jest/globals');
const { commonCharacterCount } = require('../solutions/10-common-character-count');

test(`Return of commonCharacterCount('aabcc', 'adcaa') should be 3.`, () => {
  expect(commonCharacterCount('aabcc', 'adcaa')).toBe(3);
});

test(`Return of commonCharacterCount('zzzz', 'zzzzzzz') should be 4.`, () => {
  expect(commonCharacterCount('zzzz', 'zzzzzzz')).toBe(4);
});

test(`Return of commonCharacterCount('a', 'b') should be 0.`, () => {
  expect(commonCharacterCount('a', 'b')).toBe(0);
});

const { test, expect } = require('@jest/globals');
const { longestCommonPrefix } = require('../solutions/14-longest-common-prefix');

test('Should return the longest common prefix.', () => {
  const strs = ['flower', 'flow', 'flight']
  expect(longestCommonPrefix(strs)).toBe('fl');
});

test('Should return the longest common prefix.', () => {
  const strs = ['dog', 'racecar', 'car']
  expect(longestCommonPrefix(strs)).toBe('');
});
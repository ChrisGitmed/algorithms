import { test, expect } from '@jest/globals';
import { longestCommonPrefix } from'../solutions/14.js';

test('Should return the longest common prefix.', () => {
  const strs = ['flower', 'flow', 'flight']
  expect(longestCommonPrefix(strs)).toBe('fl');
});

test('Should return the longest common prefix.', () => {
  const strs = ['dog', 'racecar', 'car']
  expect(longestCommonPrefix(strs)).toBe('');
});
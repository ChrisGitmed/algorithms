import { test, expect } from '@jest/globals';
import { mergeAlternately } from'../solutions/1768.js';

test('Should return the merged string', () => {
  const word1 = 'abc';
  const word2 = 'pqr';
  const output = 'apbqcr';
  expect(mergeAlternately(word1, word2)).toBe(output);
});

test('Should return the merged string', () => {
  const word1 = 'ab';
  const word2 = 'pqrs';
  const output = 'apbqrs';
  expect(mergeAlternately(word1, word2)).toBe(output);
});

test('Should return the merged string', () => {
  const word1 = 'abcd';
  const word2 = 'pq';
  const output = 'apbqcd';
  expect(mergeAlternately(word1, word2)).toBe(output);
});
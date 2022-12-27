const { test, expect } = require('@jest/globals');
const { mergeAlternately } = require('../solutions/1768-merge-alternately');

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
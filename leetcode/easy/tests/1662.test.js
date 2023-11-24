import { test, expect } from '@jest/globals';
import { arrayStringsAreEqual } from'../solutions/1662.js';

test('Should return true if the string arrays are equal.', () => {
    const word1 = ['ab', 'c'];
    const word2 = ['a', 'bc'];
    expect(arrayStringsAreEqual(word1, word2)).toBe(true);
});

test('Should return false if the string arrays are not equal.', () => {
    const word1 = ['a', 'cb'];
    const word2 = ['ab', 'c'];
    expect(arrayStringsAreEqual(word1, word2)).toBe(false);
});

test('Should return true if the string arrays are equal.', () => {
    const word1 = ['abc', 'd', 'defg'];
    const word2 = ['abcddefg'];
    expect(arrayStringsAreEqual(word1, word2)).toBe(true);
});
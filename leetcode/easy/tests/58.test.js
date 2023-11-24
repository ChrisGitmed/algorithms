import { test, expect } from '@jest/globals';
import { lengthOfLastWord } from'../solutions/58.js';

test('Should return the length of the last word in the string.', () => {
  const s = 'Hello World';
  expect(lengthOfLastWord(s)).toBe(5);
});

test('Should return the length of the last word in the string.', () => {
  const s = '   fly me   to   the moon  ';
  expect(lengthOfLastWord(s)).toBe(4);
});

test('Should return the length of the last word in the string.', () => {
  const s = 'luffy is still joyboy';
  expect(lengthOfLastWord(s)).toBe(6);
});

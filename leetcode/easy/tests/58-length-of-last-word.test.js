const { test, expect } = require('@jest/globals');
const { lengthOfLastWord } = require('../solutions/58-length-of-last-word');

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

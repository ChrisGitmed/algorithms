const { test, expect } = require('@jest/globals');
const { romanToInt } = require('../solutions/13-roman-to-int');

test('Should convert a roman numeral to an integer.', () => {
  const s = 'III';
  expect(romanToInt(s)).toBe(3);
});

test('Should convert a roman numeral to an integer.', () => {
  const s = 'LVIII';
  expect(romanToInt(s)).toBe(58);
});

test('Should convert a roman numeral to an integer.', () => {
  const s = 'MCMXCIV';
  expect(romanToInt(s)).toBe(1994);
});

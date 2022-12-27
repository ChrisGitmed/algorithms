const { test, expect} = require('@jest/globals');
const { solution } = require('../solutions/19-are-equally-strong');

test('Should find if two people are equally strong.', () => {
  expect(solution(10, 15, 15, 10)).toBe(true);
});

test('Should find if two people are equally strong.', () => {
  expect(solution(10, 15, 5, 20)).toBe(false);
});

test('Should find if two people are equally strong.', () => {
  expect(solution(10, 20, 10, 20)).toBe(true);
});


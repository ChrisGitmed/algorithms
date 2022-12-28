const { test, expect} = require('@jest/globals');
const { solution } = require('../solutions/11-is-lucky.js');

test('Should ', () => {
  const input = 1230;
  expect(solution(input)).toBe(true);
});

test('Should ', () => {
  const input = 10;
  expect(solution(input)).toBe(false);
});

test('Should ', () => {
  const input = 11;
  expect(solution(input)).toBe(true);
});


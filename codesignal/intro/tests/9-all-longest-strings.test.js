const { test, expect} = require('@jest/globals');
const { solution } = require('../solutions/9-all-longest-strings.js');

test('Should return an array of the longest strings', () => {
  const input = [
    'aba', 
    'aa', 
    'ad', 
    'vcd', 
    'aba'
  ];
  expect(solution(input)).toEqual([
    'aba', 
    'vcd', 
    'aba'
  ]);
});

test('Should return an array of the longest strings', () => {
  const input = [
    'abc', 
    'eeee', 
    'abcd', 
    'dcd'
  ];
  expect(solution(input)).toEqual([
    'eeee', 
    'abcd'
  ]);
});

test('Should return an array of the longest strings', () => {
  const input = [
    'enyky', 
    'benyky', 
    'yely', 
    'varennyky'
  ];
  expect(solution(input)).toEqual(['varennyky']);
});


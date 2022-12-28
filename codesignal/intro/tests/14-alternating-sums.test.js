const { test, expect} = require('@jest/globals');
const { solution } = require('../solutions/14-alternating-sums');

test('Should return the string in the proper format.', () => {
  const input = [50, 60, 60, 45, 70];
  const result = [180, 105];
  expect(solution(input)).toEqual(result);
});

test('Should return the string in the proper format.', () => {
  const input = [100, 50];
  const result = [100, 50];
  expect(solution(input)).toEqual(result);
});

test('Should return the string in the proper format.', () => {
  const input = [100, 50, 50, 100];
  const result = [150, 150];
  expect(solution(input)).toEqual(result);
});

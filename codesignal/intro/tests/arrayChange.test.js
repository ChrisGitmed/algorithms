const { test, expect} = require('@jest/globals');
const { solution } = require('../solutions/arrayChange');

test('Should return the minimal number of moves required to obtain a strictly increasing sequence from the input.', () => {
  expect(solution([1, 1, 1])).toBe(3);
});

test('Should return the minimal number of moves required to obtain a strictly increasing sequence from the input.', () => {
  expect(solution([-1000, 0, -2, 0])).toBe(5);
});

test('Should return the minimal number of moves required to obtain a strictly increasing sequence from the input.', () => {
  expect(solution([2, 1, 10, 1])).toBe(12);
});

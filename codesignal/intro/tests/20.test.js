import { test, expect} from '@jest/globals';
import { solution } from'../solutions/20.js';

test('Should return the maximal absolute difference between two adjacent elements', () => {
  const input = [2, 4, 1, 0];
  expect(solution(input)).toBe(3);
});

test('Should return the maximal absolute difference between two adjacent elements', () => {
  const input = [1, 1, 1, 1];
  expect(solution(input)).toBe(0);
});

test('Should return the maximal absolute difference between two adjacent elements', () => {
  const input = [-1, 4, 10, 3, -2];
  expect(solution(input)).toBe(7);
});

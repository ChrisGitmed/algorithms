import { test, expect} from '@jest/globals';
import { solution } from'../solutions/6.js';

test('Should return the minimum number of statues needed', () => {
  const input = [6, 2, 3, 8];
  expect(solution(input)).toBe(3);
});

test('Should return the minimum number of statues needed', () => {
  const input = [6, 3];
  expect(solution(input)).toBe(2);
});

test('Should return the minimum number of statues needed', () => {
  const input = [1];
  expect(solution(input)).toBe(0);
});


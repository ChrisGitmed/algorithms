import { test, expect} from '@jest/globals';
import { solution } from'../solutions/22.js';

test('Should find the minimal length jump to avoid obstacles.', () => {
  const input = [5, 3, 6, 7, 9];
  const result = 4;
  expect(solution(input)).toEqual(result);
});

test('Should find the minimal length jump to avoid obstacles.', () => {
  const input = [2, 3];
  const result = 4;
  expect(solution(input)).toEqual(result);
});

test('Should find the minimal length jump to avoid obstacles.', () => {
  const input = [1, 4, 10, 6, 2];
  const result = 7;
  expect(solution(input)).toEqual(result);
});

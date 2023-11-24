import { test, expect} from '@jest/globals';
import { solution } from'../solutions/26.js';

test('Should check if all digits are even.', () => {
  const input = 248622;
  const result = true;
  expect(solution(input)).toBe(result);
});

test('Should check if all digits are even.', () => {
  const input = 642386;
  const result = false;
  expect(solution(input)).toBe(result);
});

test('Should check if all digits are even.', () => {
  const input = 248842;
  const result = true;
  expect(solution(input)).toBe(result);
});

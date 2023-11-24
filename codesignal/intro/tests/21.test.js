import { test, expect} from '@jest/globals';
import { solution } from'../solutions/21.js';

test('Should find if the entered string is a valid IPv4 address', () => {
  const input = '172.16.254.1';
  expect(solution(input)).toBe(true);
});

test('Should find if the entered string is a valid IPv4 address', () => {
  const input = '.254.255.0';
  expect(solution(input)).toBe(false);
});

test('Should find if the entered string is a valid IPv4 address', () => {
  const input = '1.1.1.1a';
  expect(solution(input)).toBe(false);
});

test('Should find if the entered string is a valid IPv4 address', () => {
  const input = '64.00.161.131';
  expect(solution(input)).toBe(false);
});

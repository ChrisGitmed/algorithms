import { test, expect } from '@jest/globals';
import { solution } from'../solutions/35.js';

test('Should find the index to insert.', () => {
  const nums = [1,3,5,6];
  const target = 5;
  expect(solution(nums, target)).toEqual(2);
});

test('Should find the index to insert.', () => {
  const nums = [1,3,5,6];
  const target = 2;
  expect(solution(nums, target)).toEqual(1);
});

test('Should find the index to insert.', () => {
  const nums = [1,3,5,6];
  const target = 7;
  expect(solution(nums, target)).toEqual(4);
});


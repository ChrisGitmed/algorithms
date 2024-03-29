import { test, expect } from '@jest/globals';
import { replaceElements } from'../solutions/1299.js';

test('Should replace the proper elements.', () => {
  const input = [17, 18, 5, 4, 6, 1];
  const output = [18, 6, 6, 6, 1, -1];
  expect(replaceElements(input)).toEqual(output);
});

test('Should replace the proper elements.', () => {
  const input = [400];
  const output = [-1];
  expect(replaceElements(input)).toEqual(output);
});
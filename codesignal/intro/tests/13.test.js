import { test, expect} from '@jest/globals';
import { solution } from'../solutions/13.js';

test('Should return the string in the proper format.', () => {
  const input = '(bar)';
  const result = "rab";
  expect(solution(input)).toBe(result);
});

test('Should return the string in the proper format.', () => {
  const input = "foo(bar)baz";
  const result = "foorabbaz";
  expect(solution(input)).toBe(result);
});

test('Should return the string in the proper format.', () => {
  const input = "foo(bar)baz(blim)";
  const result = "foorabbazmilb";
  expect(solution(input)).toBe(result);
});

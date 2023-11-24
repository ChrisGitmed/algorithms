import { test, expect} from '@jest/globals';
import { solution } from'../solutions/15.js';

test('Should return the string in the proper format.', () => {
  const input = [
    "abc", 
    "ded"
  ];
  const result = [
    "*****", 
    "*abc*", 
    "*ded*", 
    "*****"
  ];
  expect(solution(input)).toEqual(result);
});

test('Should return the string in the proper format.', () => {
  const input = ["a"];
  const result = [
    "***",
    "*a*",
    "***"
  ];
  expect(solution(input)).toEqual(result);
});

test('Should return the string in the proper format.', () => {
  const input = [
    "aa", 
    "**", 
    "zz"
  ];
  const result = [
    "****", 
    "*aa*", 
    "****", 
    "*zz*", 
    "****"
  ];
  expect(solution(input)).toEqual(result);
});

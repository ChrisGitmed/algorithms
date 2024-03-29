import { test, expect} from '@jest/globals';
import { solution } from'../solutions/24.js';

test('Should setup a game of minesweeper.', () => {
  const input = [
    [true,false,false], 
    [false,true,false], 
    [false,false,false]
  ];
  const result = [
    [1,2,1], 
    [2,1,1], 
    [1,1,1]
  ];
  expect(solution(input)).toEqual(result);
});

test('Should setup a game of minesweeper.', () => {
  const input = [
    [false,false,false], 
    [false,false,false]
  ];
  const result = [
    [0,0,0], 
    [0,0,0]
  ];
  expect(solution(input)).toEqual(result);
});

test('Should setup a game of minesweeper.', () => {
  const input = [
    [true,false,false,true], 
    [false,false,true,false], 
    [true,true,false,true]
  ];
  const result = [
    [0,2,2,1], 
    [3,4,3,3], 
    [1,2,3,1]
  ];
  expect(solution(input)).toEqual(result);
});

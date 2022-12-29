const { test, expect} = require('@jest/globals');
const { solution } = require('../solutions/23-box-blur.js');

test('Should return the blurred box.', () => {
  const input = [
    [1,1,1], 
    [1,7,1], 
    [1,1,1]
  ];
  const result = [[1]];
  expect(solution(input)).toEqual(result);
});

test('Should return the blurred box.', () => {
  const input = [
    [36,0,18,9], 
    [27,54,9,0], 
    [81,63,72,45]
  ];
  const result = [[40,30]];
  expect(solution(input)).toEqual(result);
});

test('Should return the blurred box.', () => {
  const input = [
    [7,4,0,1], 
    [5,6,2,2], 
    [6,10,7,8], 
    [1,4,2,0]
  ];
  const result = [
    [5,4],
    [4,4]
  ];
  expect(solution(input)).toEqual(result);
});

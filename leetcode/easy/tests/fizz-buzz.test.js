const { test, expect } = require('@jest/globals');
const { fizzBuzz } = require('../solutions/fizz-buzz');

test('It\'s Fizzbuzz. You know the rules.', () => {
  const n = 3;
  expect(fizzBuzz(n)).toStrictEqual(['1','2','Fizz']);
});

test('It\'s Fizzbuzz. You know the rules.', () => {
  const n = 5;
  expect(fizzBuzz(n)).toStrictEqual(['1','2','Fizz','4','Buzz']);
});

test('It\'s Fizzbuzz. You know the rules.', () => {
  const n = 15;
  expect(fizzBuzz(n)).toStrictEqual(['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz']);
});

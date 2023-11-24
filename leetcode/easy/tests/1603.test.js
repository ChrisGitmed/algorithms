import { test, expect } from '@jest/globals';
import { ParkingSystem } from'../solutions/1603.js';

test('Should keep track of the parked cars.', () => {
  const ps = new ParkingSystem(1, 1, 0);
  expect(ps.addCar(1)).toBe(true);
  expect(ps.addCar(2)).toBe(true);
  expect(ps.addCar(3)).toBe(false);
  expect(ps.addCar(1)).toBe(false);
})
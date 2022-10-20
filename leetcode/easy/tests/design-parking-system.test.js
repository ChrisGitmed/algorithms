const { test, expect } = require('@jest/globals');
const { ParkingSystem } = require('../solutions/design-parking-system');

test('Should keep track of the parked cars.', () => {
  const ps = new ParkingSystem(1, 1, 0);
  expect(ps.addCar(1)).toBe(true);
  expect(ps.addCar(2)).toBe(true);
  expect(ps.addCar(3)).toBe(false);
  expect(ps.addCar(1)).toBe(false);
})
const { test, expect } = require('@jest/globals');
const largestAltitude = require('../solutions/largest-altitude');

test('Should return the highest altitude.', () => {
    const gain = [-5, 1, 5, 0, -7];
    expect(largestAltitude(gain)).toBe(1);
});

test('Should return the highest altitude.', () => {
    const gain = [-4, -3, -2, -1, 4, 3, 2];
    expect(largestAltitude(gain)).toBe(0);
});

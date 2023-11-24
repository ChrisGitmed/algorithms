import { test, expect } from '@jest/globals';
import { flipAndInvertImage } from'../solutions/832.js';

test('Should reverse and invert the image.', () => {
    const image = [[1,1,0],[1,0,1],[0,0,0]];
    const output = [[1,0,0],[0,1,0],[1,1,1]];
    expect(flipAndInvertImage(image)).toEqual(output);
});

test('Should reverse and invert the image.', () => {
    const image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];
    const output = [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]];
    expect(flipAndInvertImage(image)).toEqual(output);
});

/**
 * Given an n x n binary matrix image, flip the image horizontally, 
 * then invert it, and return the resulting image. 
 * 
 * To flip an image horizontally means that each row of the image 
 * is reversed.
 * 
 * For example, flipping [1,1,0] horizontally results in [0,1,1]. 
 * 
 * To invert an image means that each 0 is replaced by 1, and 
 * each 1 is replaced by 0.
 * 
 * For example, inverting [0,1,1] results in [1,0,0].
 */

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
    const returnedMatrix = [];
    for (let i = 0; i < image.length * 2; i++) {
        if (i < image.length) {
            const subarray = [];
            for (let x = image[i].length - 1; x >= 0; x--) {
                subarray.push(image[i][x]);
            }
            returnedMatrix.push(subarray);
        }
        else {
            const workingIndex = i - image.length;
            for (let x = 0; x < returnedMatrix.length; x++) {
                returnedMatrix[workingIndex][x] = returnedMatrix[workingIndex][x] === 1 ? 0 : 1
            }
        }
    }
    return returnedMatrix;
};
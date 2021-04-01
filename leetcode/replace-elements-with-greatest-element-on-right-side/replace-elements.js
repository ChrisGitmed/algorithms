/**
 * Given an array arr, replace every element in that array with the greatest element among 
 * the elements to its right, and replace the last element with -1. 
 * 
 * After doing so, return the array.
 */

/**
 * @param {number[]} arr 
 * @returns {number[]}
 */
const replaceElements = function(arr) {
    const returnedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            returnedArr.push(-1);
            break;
        }
        const copiedArray = arr.slice(i + 1);
        //returnedArr.push(Math.max.apply(null, copiedArray));
        returnedArr.push(copiedArray.reduce( (accum, item) => Math.max(accum, item)))
        
    }
    return returnedArr;
};

module.exports = replaceElements;
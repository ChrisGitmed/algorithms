/**
 * Given a positive integer num consisting only of digits 6 and 9. 
 * 
 * Return the maximum number you can get by changing at most one 
 * digit (6 becomes 9, and 9 becomes 6).
 */

/**
 * @param {number} num
 * @return {number}
 */
 var maximum69Number  = function(num) {
    const numArray = num.toString().split('');
    for (let i = 0; i < numArray.length; i++) {       
        if (numArray[i] === '6') {
            numArray[i] = '9';
            return arrToNum(numArray)
        } 
    }
    return num;
    
    function arrToNum(arr) {
        return Number(arr.join(''))
    }
};

module.exports = maximum69Number;
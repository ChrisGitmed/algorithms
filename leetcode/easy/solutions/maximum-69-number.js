/**
 * Given a positive integer num consisting only of digits 6 and 9. 
 * 
 * Return the maximum number you can get by changing at most one 
 * digit (6 becomes 9, and 9 becomes 6).
 * 
 * @param {number} num
 * @return {number}
 */
const maximum69Number = num => {
  const arr = num.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '6') {
      arr[i] = '9';
      return Number(arr.join(''));
    }
  }
  return num;
}

module.exports = { maximum69Number };


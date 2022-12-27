/**
 * Given two strings, find the number of common characters between them.
 *
 * @param { String } s1 
 * @param { String } s2 
 * @returns { Number }
 */

const commonCharacterCount = (s1, s2) => {
  const compareArray = s2.split('');
  let counter = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let x = 0; x < compareArray.length; x++) {
      if (s1[i] === compareArray[x]) {
        compareArray[x] = '!';
        counter++;
        break;
      };
    };
  };
  return counter;
};

module.exports = { commonCharacterCount };

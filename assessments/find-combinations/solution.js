/**
 * @param {string} phoneNumber 
 * @param {string} word
 * @return {string[]} 
 */
export function findCombinations(phoneNumber, word) {
  const digitToLetterHash = {
    0: [''],
    1: [''],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  console.log(`phoneNumber: ${phoneNumber}, word: ${word}`);
  // Find the word, mark the starting and ending indexes
  let startIndex, endIndex;
  for (let i = 0; i < phoneNumber.length && !endIndex; i++) {
    let hash = digitToLetterHash[phoneNumber[i]];
    if (hash.includes(word[0]) && !startIndex){
      startIndex = i;
      for (let x = 0; x < word.length; x++) {
        hash = digitToLetterHash[phoneNumber[x + i]];
        if (hash.includes(word[word.length - 1]) && x === word.length - 1) {
          endIndex = i + x;
        }
      }
    }
  }
  console.log(`startIndex: ${startIndex}, endIndex: ${endIndex}`);

  //Get the values into two matrixes.
  const preWordArray = [];
  const postWordArray = [];
  for (let i = 0; i < phoneNumber.length; i++) {
    let hash = digitToLetterHash[phoneNumber[i]];
    if (i < startIndex) {
      preWordArray.push(hash);
    } else if (i > endIndex) {
      postWordArray.push(hash);
    }
  }
  console.log(`preWordArray: ${preWordArray}, postWordArray: ${postWordArray}`);

  // Create an array of every possible permutation.
  const returnedArr = [];
  //Loop through preword array first,
  //    concatenate every possible string
  //Add the word to EVERY string in the array
  //Loop through postword array
  //    concatenate EVERY possible string
	return []
}

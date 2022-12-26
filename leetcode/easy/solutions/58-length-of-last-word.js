const lengthOfLastWord = (s) => s.split(' ')
  .filter((word) => word !== '')
  .at(-1)
  .length;

module.exports = { lengthOfLastWord };

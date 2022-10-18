/**
 * Given a roman numeral, convert it to an integer.
 * 
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const hash = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const current = hash[s[i]];
    const next = hash[s[i + 1]];

    if (current < next) {
      total += next - current;
      i++;
    } else total += current;
  }

  return total;
};

module.exports = { romanToInt };
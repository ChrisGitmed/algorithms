/**
 * Write a function that reverses characters in (possibly nested) parentheses
 * in the input string.
 * 
 * Input strings will always be well-formed with matching ()s.
 */
const solution = (input) => {
  while (true) {
    const c = input.indexOf(")");
    if (c === -1) break;
    const o = input.substring(0, c).lastIndexOf("(");  
    const start = input.substring(0, o);
    const middle = input.substring(o + 1, c).split("").reverse().join("");
    const end = input.substring(c + 1, input.length);
    input = start + middle + end;
  }
  return input;
};

module.exports = { solution };

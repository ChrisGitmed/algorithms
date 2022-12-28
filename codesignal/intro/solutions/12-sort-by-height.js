/**
 * Some people are standing in a row in a park. There are trees between them
 * which cannot be moved. Your task is to rearrange the people by their
 * heights in a non-descending order without moving the trees. People can be
 * very tall!
 */
const solution = (input) => {
  const sortedPeople = input
    .filter((item) => item > 0)
    .sort((a, b) => a - b);

  return input.map((num) => num > 0 ? sortedPeople.shift() : num);
}

module.exports = { solution };

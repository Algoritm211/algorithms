const { lines } = require('./read-input');
const { mapInput } = require('./utils/constants');
const {score} = require('./utils/count-score');

const firstPartOfSolution = (lines) => {
  const outcomes = lines.map((line) => {
    const opponentMove = mapInput[line[0]];
    const ourMove = mapInput[line[1]];
    return score(opponentMove, ourMove);
  });

  const result = outcomes.reduce((prev, curr) => prev + curr, 0);
  return result;
}

console.log(firstPartOfSolution(lines));

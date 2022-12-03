const {score} = require('./utils/count-score');
const {lines} = require('./read-input');
const {mapInput, moves} = require('./utils/constants');

const solution = {
  A: {
    // rock
    X: moves.scissors,
    Y: moves.rock,
    Z: moves.paper,
  },
  B: {
    // paper
    X: moves.rock,
    Y: moves.paper,
    Z: moves.scissors,
  },
  C: {
    // scissors
    X: moves.paper,
    Y: moves.scissors,
    Z: moves.rock,
  },
};

const secondPartOfSolution = () => {
  const outcomes = lines.map((line) => {
    const opponentMove = mapInput[line[0]];
    const ourMove = solution[line[0]][line[1]];
    return score(opponentMove, ourMove);
  });

  const result = outcomes.reduce((prev, curr) => prev + curr, 0);
  return result;
}

console.log(secondPartOfSolution(lines));

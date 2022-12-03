const { moves } = require('./constants');

const score = (opponentMove, ourMove) => {
  if (opponentMove === ourMove) {
    return ourMove + 3;
  }

  if (
    (opponentMove === moves.rock && ourMove === moves.paper) ||
    (opponentMove === moves.paper && ourMove === moves.scissors) ||
    (opponentMove === moves.scissors && ourMove === moves.rock)
  ) {
    return ourMove + 6;
  }

  return ourMove;
};

module.exports = { score };

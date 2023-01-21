// Time - 74ms, Memory - 42.9MB
/**
 * @param {string[][]} board
 * @return {number}
 */
const countBattleships = (board) => {
  let result = 0;

  const checkPartOfShip = (i, j) => {
    if (!board[i]?.[j] || board[i][j] === '.') {
      return;
    }
    board[i][j] = '.';
    checkPartOfShip(i + 1, j);
    checkPartOfShip(i - 1, j);
    checkPartOfShip(i, j + 1);
    checkPartOfShip(i, j - 1);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'X') {
        result += 1;
        checkPartOfShip(i, j)
      }
    }
  }

  return result;
};

// 2
console.log(countBattleships([
  ['X', '.', '.', 'X'],
  ['.', '.', '.', 'X'],
  ['.', '.', '.', 'X'],
]));

// 0
console.log(countBattleships([['.']]));

/**
 * @param {string[]} rawRow
 * @return {boolean}
 */
const checkIsValidRow = (rawRow) => {
  const row = rawRow.filter((elem) => elem !== '.');
  return row.length === new Set(row).size;
};

/**
 * @param {string[][]} board
 * @return {boolean}
 */
const checkIsValidBySquares = (board) => {
  // Making array of strings from square for valid checking
  for (let i = 0; i < board.length; i+=3) {
    for (let j = 0; j < 9; j += 3) {
      let square = [];
      for (let k = 0; k < 3; k++) {
        square.push(...board[i + k].slice(j, j + 3))
      }
      if (!checkIsValidRow(square)) {
        return false
      }
    }
  }

  return true
};

/**
 * @param {string[][]} board
 * @return {boolean}
 */
const checkIsValidByCols = (board) => {

  // Collecting col in a row and check col array like row
  for (let i = 0; i < board[0].length; i++) {
    let col = [];
    for (let j = 0; j < board.length; j++) {
      col.push(board[j][i])
    }
    if (!checkIsValidRow(col)) {
      return false
    }
  }

  return true
}

/**
 * @param {string[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  for (let i = 0; i < board.length; i++) {
    let row = []
    for (let j = 0; j < board[i].length; j++) {
      row.push(board[i][j])
    }
    if (!checkIsValidRow(row)) {
      return false
    }
  }

  if (!checkIsValidBySquares(board)) {
    return false;
  }

  if (!checkIsValidByCols(board)) {
    return false
  }

  return true;
};

// true
console.log(isValidSudoku(
  [['5', '3', '.', '.', '7', '.', '.', '.', '.']
    , ['6', '.', '.', '1', '9', '5', '.', '.', '.']
    , ['.', '9', '8', '.', '.', '.', '.', '6', '.']
    , ['8', '.', '.', '.', '6', '.', '.', '.', '3']
    , ['4', '.', '.', '8', '.', '3', '.', '.', '1']
    , ['7', '.', '.', '.', '2', '.', '.', '.', '6']
    , ['.', '6', '.', '.', '.', '.', '2', '8', '.']
    , ['.', '.', '.', '4', '1', '9', '.', '.', '5']
    , ['.', '.', '.', '.', '8', '.', '.', '7', '9']],
));

// false
console.log(isValidSudoku(
  [['8', '3', '.', '.', '7', '.', '.', '.', '.']
    , ['6', '.', '.', '1', '9', '5', '.', '.', '.']
    , ['.', '9', '8', '.', '.', '.', '.', '6', '.']
    , ['8', '.', '.', '.', '6', '.', '.', '.', '3']
    , ['4', '.', '.', '8', '.', '3', '.', '.', '1']
    , ['7', '.', '.', '.', '2', '.', '.', '.', '6']
    , ['.', '6', '.', '.', '.', '.', '2', '8', '.']
    , ['.', '.', '.', '4', '1', '9', '.', '.', '5']
    , ['.', '.', '.', '.', '8', '.', '.', '7', '9']],
));

// Time - 87ms, Memory - 44.8MB
/**
 * @param {string[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {

  const checkIslandGroup = (row, col) => {
    while (grid[row] && grid[row][col] && +grid[row][col] !== 0) {
      grid[row][col] = '0';
      checkIslandGroup(row + 1, col);
      checkIslandGroup(row - 1, col);
      checkIslandGroup(row, col + 1);
      checkIslandGroup(row, col - 1);
    }
  };

  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        result += 1;
      }
      checkIslandGroup(i, j);
    }
  }

  return result;
};


// 1
console.log(numIslands([['1', '1', '1'], ['0', '1', '0'], ['1', '1', '1']]));

// 1
console.log(numIslands([['1', '1', '1', '1', '0'], ['1', '1', '0', '1', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '0', '0', '0']]));

// 3
console.log(numIslands([['1', '1', '0', '0', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '1', '0', '0'], ['0', '0', '0', '1', '1']]));

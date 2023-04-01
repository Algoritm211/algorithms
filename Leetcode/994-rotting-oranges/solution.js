// Time - 65ms, Memory - 44.5MB
/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = (grid) => {
  if (!new Set(grid.flat()).has(1)) {
    return 0;
  }

  let freshNum = 0;
  let rottenQueue = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) {
        rottenQueue.push([i, j]);
      } else if (grid[i][j] === 1) {
        freshNum += 1;
      }
    }
  }

  let minutesToRotten = 0;

  while (rottenQueue.length) {
    const queueLength = rottenQueue.length;

    for (let i = 0; i < queueLength; i++) {
      const [x, y] = rottenQueue.shift();
      if (grid[x + 1] && grid[x + 1][y] === 1) {
        freshNum -= 1;
        grid[x + 1][y] = 2;
        rottenQueue.push([x + 1, y]);
      }

      if (grid[x - 1] && grid[x - 1][y] === 1) {
        freshNum -= 1;
        grid[x - 1][y] = 2;
        rottenQueue.push([x - 1, y]);
      }

      if (grid[x] && grid[x][y + 1] === 1) {
        freshNum -= 1;
        grid[x][y + 1] = 2;
        rottenQueue.push([x, y + 1]);
      }

      if (grid[x] && grid[x][y - 1] === 1) {
        freshNum -= 1;
        grid[x][y - 1] = 2;
        rottenQueue.push([x, y - 1]);
      }
    }

    if (rottenQueue.length > 0) {
      minutesToRotten += 1;
    }
  }

  return freshNum === 0 ? minutesToRotten : -1;
};

// 2
console.log(orangesRotting([[2, 1, 1], [1, 1, 1], [0, 1, 2]]));

// 4
console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]));

// -1
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]));

// 0
console.log(orangesRotting([[0, 2]]));

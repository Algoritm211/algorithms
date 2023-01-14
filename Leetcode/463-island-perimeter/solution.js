// Time - 171ms, Memory - 49.8MB
/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = (grid) => {
  let perimeter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        perimeter += 4

        if (grid[i + 1] && grid[i + 1][j] === 1) {
          perimeter -= 1
        }

        if (grid[i - 1] && grid[i - 1][j] === 1) {
          perimeter -= 1
        }

        if (grid[i][j + 1] && grid[i][j + 1] === 1) {
          perimeter -= 1
        }

        if (grid[i][j - 1] && grid[i][j - 1] === 1) {
          perimeter -= 1
        }
      }
    }
  }

  return perimeter;
};

// 16
console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]));

// 4
console.log(islandPerimeter([[1]]));

// 4
console.log(islandPerimeter([[1,0]]));

// Time - 93ms, Memory - 45.5MB
/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = (grid) => {

  const islandAreas = [];
  let area = 0;

  const countIslandArea = (i, j) => {
    while (grid[i] && grid[i][j] !== undefined && grid[i][j] !== 0) {
      area += 1;
      grid[i][j] = 0;
      countIslandArea(i + 1, j);
      countIslandArea(i - 1, j);
      countIslandArea(i, j + 1);
      countIslandArea(i, j - 1);
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== 0) {
        area = 0;
        countIslandArea(i, j);
        islandAreas.push(area);
      }
    }
  }

  return islandAreas.length !== 0
    ? Math.max(...islandAreas)
    : 0;
};

// 6
console.log(maxAreaOfIsland([
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]],
));

// 0
console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]));

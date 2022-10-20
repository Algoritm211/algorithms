// Time - 135ms, Memory 48.4MB
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const shiftGrid = (grid, k) => {
  const flatGrid = grid.flat();
  if (flatGrid.length === k) {
    return grid;
  }
  const rowLength = grid[0].length
  for (let i = 0; i < k; i++) {
    shiftArr(flatGrid)
  }
  const result = []
  let idx = 0;
  for (let i = 0; i < grid.length; i++) {
    const tempArr = [];
    for (let j = idx; j < idx + rowLength; j++) {
      tempArr.push(flatGrid[j])
    }
    result.push(tempArr)
    idx += rowLength
  }
  return result;
};

/**
 * @param {number[]} arr
 */
const shiftArr = (arr) => {
  const endElem = arr.pop()
  arr.unshift(endElem);
  return arr;
}

// [[9,1,2],[3,4,5],[6,7,8]]
console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1));

// [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
console.log(shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4));

// [[1,2,3],[4,5,6],[7,8,9]]
console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 9));


// 21, 22, 23, 24 //
// 24, 21, 22, 23 //
// 23, 24, 21, 22 //

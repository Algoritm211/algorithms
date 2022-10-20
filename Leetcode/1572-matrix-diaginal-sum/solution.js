// Time - 89ms, Memory 43.5MB
/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = (mat) => {
  if (!mat.length) {
    return 0;
  }
  let result = 0;

  for (let i = 0; i < mat.length; i++) {
    const row = mat[i]
    const numFromFront = row[i];
    const numFromEnd = row.at((i * -1) - 1)

    result += numFromFront + numFromEnd
  }

  if (mat.length % 2 !== 0) {
    const middleIndex = Math.floor(mat.length / 2)
    result -= mat[middleIndex][middleIndex]
  }

  return result;
};

// 25
console.log(diagonalSum([[1,2,3],
  [4,5,6],
  [7,8,9]]));

//8
console.log(diagonalSum([[1,1,1,1],
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1]]));

//5
console.log(diagonalSum([[5]]));

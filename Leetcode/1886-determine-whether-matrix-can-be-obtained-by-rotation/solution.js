// Time - 60ms, Memory - 44.5MB
/**
 * @param {number[][]} matrix
 * @returns {number[][]}
 */
const rotate90 = (matrix) => {
  const rotatedMatrix = Array
    .from({length: matrix.length })
    .fill(null)
    .map(() => []);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      rotatedMatrix[i][j] = matrix[j][matrix.length - i - 1]
    }
  }

  return rotatedMatrix
}

/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
const findRotation = (mat, target) => {
  const JSONTarget = JSON.stringify(target);
  let matrixToRotate = JSON.parse(JSON.stringify(mat));

  for (let i = 0; i < 4; i++) {
    if (JSONTarget === JSON.stringify(matrixToRotate)) {
      return true
    }
    matrixToRotate = rotate90(matrixToRotate)
  }

  return false
};

// true
console.log(findRotation([[0, 1], [1, 0]], [[1, 0], [0, 1]]));

// false
console.log(findRotation([[0, 1], [1, 1]], [[1, 0], [0, 1]]));

// true
console.log(findRotation([[0, 0, 0], [0, 1, 0], [1, 1, 1]], [[1, 1, 1], [0, 1, 0], [0, 0, 0]]));

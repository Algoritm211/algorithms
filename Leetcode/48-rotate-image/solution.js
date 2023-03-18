// Time - 52ms, Memory - 41.9MB
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  for (let i = 0; i < Math.ceil(matrix.length / 2); i++) {
    for (let j = i; j < matrix[i].length - 1 - i; j++) {
      let firstElem = matrix[i][j];
      let secondElem = matrix[j][matrix.length - 1 - i];
      let thirdElem = matrix[matrix.length - 1 - i][matrix.length - 1 - j];
      let fourthElem = matrix[matrix.length - 1 - j][i];
      matrix[j][matrix.length - 1 - i] = firstElem;
      matrix[matrix.length - 1 - i][matrix.length - 1 - j] = secondElem
      matrix[matrix.length - 1 - j][i] = thirdElem
      matrix[i][j] = fourthElem
    }
  }
};

// [[7,4,1],[8,5,2],[9,6,3]]
rotate([[1,2,3],[4,5,6],[7,8,9]]);

// [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])

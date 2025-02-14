// Time - 1ms, Memory - 48.73MB
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  const result = [];

  let left = 0;
  let right = matrix[0].length - 1;

  let top = 0;
  let bottom = matrix.length - 1;  

  while (left <= right && top <= bottom) {
    // console.log({left, right, top, bottom});
    // left to right
    for (let index = left; index <= right; index++) {
      const element = matrix[top][index];
      result.push(element)
    }
    top++;

    // top to bottom
    for (let index = top; index <= bottom; index++) {
      const element = matrix[index][right];
      result.push(element)
    }
    right--;
    
    if ((left > right) || (top > bottom)) {
      break;
    }
    
    // right to left
    for (let index = right; index >= left; index--) { 
      const element = matrix[bottom][index];
      result.push(element)
    }
    bottom--;

    // bottom to top
    for (let index = bottom; index >= top; index--) {      
      const element = matrix[index][left];
      result.push(element)
    }
    left++;
  
    
  }

  return result;
};

// [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));

// [1,2,3,4,8,12,11,10,9,5,6,7]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));

// [6,9,7]
console.log(spiralOrder([[6,9,7]]));


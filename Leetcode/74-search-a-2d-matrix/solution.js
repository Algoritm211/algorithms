// Time - 73ms, Memory - 42MB
/**
 * @param {number[]} numsArr
 * @param {number} target
 * @return {boolean}
 */
const binarySearch = (numsArr, target) => {
  let left = 0;
  let right = numsArr.length - 1;
  let middle = 0;

  while (left <= right) {
    middle = Math.round((right - left) / 2) + left;

    if (numsArr[middle] === target) {
      return true
    } else if (target > numsArr[middle]) {
      left = middle + 1
    } else if (target < numsArr[middle]) {
      right = middle - 1;
    }
  }

  return false;
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  const maxMatrixElem = matrix.at(-1).at(-1);
  const minMatrixElem = matrix[0][0];

  if (target < minMatrixElem || target > maxMatrixElem) {
    return false;
  }

  let arrToSearch;

  for (let i = 0; i < matrix.length; i++) {
    const lastRowElem = matrix[i].at(-1);

    if (target < lastRowElem) {
      arrToSearch = matrix[i];
      break;
    } else if (target > lastRowElem) {
      continue;
    }

    if (target === lastRowElem) {
      return true
    }
  }

  const result = binarySearch(arrToSearch, target);
  return result;
};

// true
console.log(searchMatrix([[1,3,5]], 1));

// true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));

// false
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));

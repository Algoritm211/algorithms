/**
 * Returns index of searched element
 * If no matches - returns -1
 *
 * @note Array must be sorted
 *
 * @param {Array<number>} numsArr
 * @param {number} searchNum
 */
export const binarySearch = (numsArr: Array<number>, searchNum: number) => {
  let left = 0;
  // Index of last element
  let right = numsArr.length - 1;
  let mid = 0;

  while (left <= right) {
    mid = Math.round((right - left) / 2) + left;

    if (numsArr[mid] === searchNum) {
      return mid;
    } else if (searchNum > numsArr[mid]) {
      left = mid + 1
    } else if (searchNum < numsArr[mid]) {
      right = mid - 1;
    }
  }

  return -1;
}


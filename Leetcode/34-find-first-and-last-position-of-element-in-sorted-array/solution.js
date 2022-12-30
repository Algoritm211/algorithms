// Time - 77ms, Memory - 44.2MB

const binarySearch = (numsArr, searchNum) => {
  let left = 0;
  // Index of last element
  let right = numsArr.length - 1;
  let mid = 0;

  while (left <= right) {
    mid = Math.round((right - left) / 2) + left;

    if (numsArr[mid] === searchNum) {
      // modified for array output
      return [mid, mid];
    } else if (searchNum > numsArr[mid]) {
      left = mid + 1
    } else if (searchNum < numsArr[mid]) {
      right = mid - 1;
    }
  }

  // modified for array output
  return [-1, -1];
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  if (nums.length === 0) {
    return [-1, -1]
  }

  if (nums.length === new Set(nums).size) {
    return binarySearch(nums, target)
  }

  const result = [];

  let startPointer = 0;
  let endPointer = nums.length - 1;

  while (startPointer <= endPointer) {
    if (nums[startPointer] === target) {
      result.push(startPointer)
    }

    if (nums[endPointer] === target) {
      result.push(endPointer);
    }

    startPointer += 1;
    endPointer -= 1;
  }

  result.sort((a, b) => a - b)

  if (result.length > 2) {
    return [result[0], result.at(-1)]
  }

  if (result.length === 1) {
    return [result[0], result[0]]
  }

  return result.length > 1 ? result : [-1, -1];
};

// [9, 10]
console.log(searchRange([0,0,1,1,1,1,2,2,2,3,3,4,5,6,6,6,6,7,8], 3));

// [4, 6]
console.log(searchRange([1,2,2,3,4,4,4], 4));

// [0, 2]
console.log(searchRange([3,3,3], 3));

// [0, 0]
console.log(searchRange([1,2,2], 1));

// [1,2]
console.log(searchRange([1, 2, 2], 2));

// [0, 1]
console.log(searchRange([2, 2], 2));

// [3,4]
console.log(searchRange([5,7,7,8,8,10], 8));

// [-1, -1]
console.log(searchRange([5,7,7,8,8,10], 6));

// [-1, -1]
console.log(searchRange([], 0));

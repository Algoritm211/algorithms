// Time - 65ms, Memory - 41.6MB, O(log(n)) time, O(1) space
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  // We have to use binary search here

  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (rightPointer >= leftPointer) {
    const middlePointer = Math.round((rightPointer - leftPointer) / 2) + leftPointer;

    if (nums[middlePointer] === target) {
      return middlePointer;
    }

    if (nums[leftPointer] <= nums[middlePointer]) {
      if (target < nums[leftPointer] || target > nums[middlePointer]) {
        leftPointer = middlePointer + 1;
      } else {
        rightPointer = middlePointer - 1;
      }
    } else {
      if (target > nums[rightPointer] || target < nums[middlePointer]) {
        rightPointer = middlePointer - 1;
      } else {
        leftPointer = middlePointer + 1;
      }
    }
  }

  return -1;
};

// 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

// -1
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));

// -1
console.log(search([0], 1));

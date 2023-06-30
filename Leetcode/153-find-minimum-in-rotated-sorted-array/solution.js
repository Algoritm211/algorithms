// Time - 59ms, Memory - 41.8MB, O(log(n)) time, O(1) space
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
  // We have to use binary search here
  // So, if we will have middle pointer greater than left pointer
  // - now we in left part of the rotated array
  // (every element greater that in right part). In this case we will need to update
  // left pointer to be in right part (there will be a min number)
  // If we will have left pointer lower than right - we have found the answer

  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  let minNumber = Infinity;
  while (rightPointer >= leftPointer) {

    if (nums[leftPointer] < nums[rightPointer]) {
      minNumber = Math.min(minNumber, nums[leftPointer]);
      break;
    }

    const middlePointer = Math.round((rightPointer - leftPointer) / 2) + leftPointer;

    minNumber = Math.min(minNumber, nums[middlePointer]);

    if (nums[middlePointer] >= nums[leftPointer]) {
      leftPointer = middlePointer + 1;
    } else {
      rightPointer = middlePointer - 1;
    }
  }

  return minNumber;
};

// 1
console.log(findMin([5, 1, 2, 3, 4]));

// 1
console.log(findMin([3, 4, 5, 1, 2]));

// 0
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));

// 11
console.log(findMin([11, 13, 15, 17]));

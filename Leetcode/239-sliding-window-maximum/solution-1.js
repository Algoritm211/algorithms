// Time - 926ms, Memory - 92.4MB, O(n) time, O(n) memory
/**
 * @param {number[]} nums
 * @param {number} windowLength
 * @return {number[]}
 */
const maxSlidingWindow = (nums, windowLength) => {
  // Here we have to use sliding window approach
  // Also we have to use queue (Monotonically decreasing queue)

  // i  Window position             Monotonic queue  max
  // 0                              [1]              -
  // 1                              [3]              -
  // 2  [1  3  -1] -3  5  3  6  7   [3, -1]          3
  // 3   1 [3  -1  -3] 5  3  6  7   [3, -1, -3]      3
  // 4   1  3 [-1  -3  5] 3  6  7   [5]              5
  // 5   1  3  -1 [-3  5  3] 6  7   [5, 3]           5
  // 6   1  3  -1  -3 [5  3  6] 7   [6]              6
  // 7   1  3  -1  -3  5 [3  6  7]  [7]              7

  let leftPointer = 0;
  let rightPointer = 0;
  const queue = []; // Here we will store indices of numbers
  const result = [];

  while (rightPointer < nums.length) {
    // remove from right all elements which are lower
    while (queue.length > 0 && nums[queue.at(-1)] < nums[rightPointer]) {
      queue.pop();
    }

    queue.push(rightPointer);

    // remove from left if window is moving
    if (leftPointer > queue[0]) {
      queue.shift();
    }

    // sliding window
    if (rightPointer - leftPointer + 1 >= windowLength) {
      result.push(nums[queue.at(0)]);
      leftPointer += 1;
    }

    rightPointer += 1;
  }

  return result;
};

// [5, 3, 4]
console.log(maxSlidingWindow([5, 3, 4], 1));

// [1, -1]
console.log(maxSlidingWindow([1, -1], 1));

// [3,3,5,5,6,7]
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

// [1]
console.log(maxSlidingWindow([1], 1));

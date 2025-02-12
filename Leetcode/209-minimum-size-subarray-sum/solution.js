// Time - 5ms, Memory - 54.57MB
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
  // Here I'm using sliding window approach

  let leftPointer = 0;
  let rightPointer = 0;

  let sum = 0;
  let resultLength = Infinity;

  while (leftPointer < nums.length) {
    if (leftPointer === rightPointer) {
      sum = nums[leftPointer];
      if (nums[leftPointer] >= target) {
        return 1
      } else {
        rightPointer++;
        if (nums[rightPointer] === undefined) break;
        sum += nums[rightPointer];
      }
    }

    if (sum >= target) {
      resultLength = Math.min(resultLength, rightPointer - leftPointer + 1);
      sum -= nums[leftPointer];
      leftPointer++
      continue;
    }

    if (sum < target) {
      rightPointer++
      if (nums[rightPointer] === undefined) break;
      sum += nums[rightPointer];
      continue;
    }
  }

  return resultLength === Infinity ? 0 : resultLength;
};

// 2
console.log(minSubArrayLen(7, [2,3,1,2,4,3]));

// 1
console.log(minSubArrayLen(4, [1,4,4]));

// 0
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]));

// 3
console.log(minSubArrayLen(11, [1,2,3,4,5]));

// 2
console.log(minSubArrayLen(15,[5,1,3,5,10,7,4,9,2,8]));


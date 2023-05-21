// Time - 66ms, Memory - 43.1MB, O(n) time, O(1) memory
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
  let leftMax = 0;
  let rightMax = 0;

  let leftPointer = 0;
  let rightPointer = height.length - 1;

  let result = 0;

  /*
   We don't need to know max right pointer for left side and max left for the right side

           0  0  1  0  1  2  1  0  0  1  0  0 => 6
           L  L  L  L  L  L  L  L  R  R  R  R
   Input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
   Answer: 6
   */

  while (leftPointer < rightPointer) {
    if (height[leftPointer] < height[rightPointer]) {
      leftMax = Math.max(leftMax, height[leftPointer]);
      result += leftMax - height[leftPointer];
      leftPointer += 1
    } else {
      rightMax = Math.max(rightMax, height[rightPointer]);
      result += rightMax - height[rightPointer];
      rightPointer -= 1
    }
  }

  return result;
};

// 6
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// 9
console.log(trap([4, 2, 0, 3, 2, 5]));

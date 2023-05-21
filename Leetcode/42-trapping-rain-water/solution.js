// Time - 141ms, Memory - 46.7MB, O(n) time, O(n) memory
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
  let leftMax = 0;
  let rightMax = 0;
  const rightMaxArr = [];
  const leftMaxArr = [];
  let result = 0;

  // Formula for trapping water - Math.min(leftMax, rightMax) - height[i]

  for (let i = 0; i < height.length; i++) {
    rightMax = Math.max(rightMax, height[height.length - i - 1])
    rightMaxArr.unshift(rightMax);

    leftMax = Math.max(leftMax, height[i])
    leftMaxArr.push(leftMax)
  }

  for (let i = 0; i < height.length; i++) {
    const trappingWaterFromBlock =
      Math.min(rightMaxArr[i], leftMaxArr[i]) - height[i];
    result += trappingWaterFromBlock;
  }

  return result;
};

// 6
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// 9
console.log(trap([4, 2, 0, 3, 2, 5]));

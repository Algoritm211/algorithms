// Time - 115ms, Memory - 56.4MB
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  const startIndex = k % nums.length;
  const startPart = nums.slice(0, nums.length - startIndex)
  const endPart = nums.slice(nums.length - startIndex)

  nums.length = 0;
  nums.push(...endPart)
  nums.push(...startPart)

  console.log(nums);
};

// [5,6,7,1,2,3,4]
rotate([1, 2, 3, 4, 5, 6, 7], 3);

// [3,99,-1,-100]
rotate([-1, -100, 3, 99], 2);

// Time - 140ms, Memory - 48.8MB
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  const str = nums.join();
  const zeros = str.match(/0/g).map(Number);
  nums = nums.filter((val) => val !== 0).concat(zeros)
};

// log - [1,3,12,0,0]
moveZeroes([0,1,0,3,12]);

// log - [0]
moveZeroes([0])

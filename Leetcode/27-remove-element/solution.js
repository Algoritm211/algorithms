// Time - 59ms, Memory - 41.8MB
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i -= 1;
    }
  }

  return nums.length;
};

// [2, 2]
console.log(removeElement([3,2,2,3], 3));

// [0, 1, 4, 0, 3]
console.log(removeElement([0,1,2,2,3,0,4,2], 2));

// Time - 58ms, Memory - 43.6MB
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  const numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (numsMap.hasOwnProperty(nums[i])) {
      numsMap[nums[i]] += 1;
    } else {
      numsMap[nums[i]] = 1;
    }

    if (numsMap[nums[i]] > Math.floor(nums.length / 2)) {
      return nums[i]
    }
  }
};

// 3
console.log(majorityElement([3,2,3]));

// 2
console.log(majorityElement([2,2,1,1,1,2,2]));

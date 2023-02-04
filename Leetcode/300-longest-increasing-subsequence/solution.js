// Time - 204ms, Time - 43.1MB
/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {

  const results = Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        results[i] = Math.max(results[j] + 1, results[i])
      }
    }
  }
  return Math.max(...results)
};

// 4
console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));

// 4
console.log(lengthOfLIS([0,1,0,3,2,3]));

// 1
console.log(lengthOfLIS([7,7,7,7,7,7,7]));

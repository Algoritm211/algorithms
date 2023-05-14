// Time - 586ms, Memory - 57.9MB
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  const numsSet = new Set(nums);

  if (numsSet.size === 0) {
    return 0;
  }

  let result = 1;
  let counter = 0;
  while (counter <= nums.length) {
    let current = nums[counter];

    if (numsSet.has(current - 1)) {
      counter += 1;
      continue;
    }

    let tempRes = 1;

    while (numsSet.has(current + 1)) {
      tempRes += 1;
      current += 1;
    }

    result = Math.max(result, tempRes);
    counter += 1;
  }

  return result;
};

// 4
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

// 9
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

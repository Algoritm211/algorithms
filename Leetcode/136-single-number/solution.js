// Time - 92ms, Memory - 50MB
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  const duplicateCounter = {};

  for (let i = 0; i < nums.length; i++) {
    if (Object.hasOwn(duplicateCounter, nums[i])) {
      duplicateCounter[nums[i]] += 1;
      continue;
    }
    duplicateCounter[nums[i]] = 1;
  }


  const result = Object
    .entries(duplicateCounter)
    .sort((a, b) => a[1] - b[1])
    .at(0)
    .at(0);

  return Number(result);
};

// 1
console.log(singleNumber([2, 2, 1]));

// 4
console.log(singleNumber([4, 1, 2, 1, 2]));

// 1
console.log(singleNumber([1]));

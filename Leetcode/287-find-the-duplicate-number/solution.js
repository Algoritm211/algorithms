// Time - 250ms, Memory - 53.9MB
/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {
  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length; i++) {
    const curr = sortedNums[i];
    const next = sortedNums[i + 1];
    if (curr === next) {
      return curr;
    }
  }

  return -1;
};

// 2
console.log(findDuplicate([1,3,4,2,2]));

// 3
console.log(findDuplicate([3,1,3,4,2]));

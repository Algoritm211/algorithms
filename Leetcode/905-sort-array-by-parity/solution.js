// Time - 142ms, Memory = 44.8MB
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = (nums) => {
  const result = [];
  while(nums.length) {
    const borderNums = [nums.shift(), nums.pop()];

    for (let i = 0; i < borderNums.length; i++) {
      if (borderNums[i] === undefined) {
        continue
      }
      if (borderNums[i] % 2 === 0) {
        result.unshift(borderNums[i])
      } else {
        result.push(borderNums[i])
      }
    }
  }

  return result;
};

// [4,2,3,1] or [2,4,1,3] or [4,2,1,3] or [2,4,3,1]
console.log(sortArrayByParity([3,1,2,4]));

// [0]
console.log(sortArrayByParity([0]));

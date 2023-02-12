// Time - 51ms, Memory - 43.9MB
/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = (nums) => {
  const sortLargest = nums.sort((a, b) => {
    return `${b}${a}` - `${a}${b}`;
  });
  if (nums[0] === 0) {
    return '0'
  }
  const result = sortLargest.join('');

  return result;
};

// 0
console.log(largestNumber([0, 0, 0]));

// 0
console.log(largestNumber([0, 0]));

// 210
console.log(largestNumber([10, 2]));

// 9534330
console.log(largestNumber([3, 30, 34, 5, 9]));

/**
 * @param {number[]} nums
 * @return {number}
 */
const sumAll = (nums) => {
  return nums.reduce((acc, elem, index) => {
    return acc + elem * index;
  }, 0);
};


/**
 * @param {number[]} nums
 * @return {number}
 */
const maxRotateFunction = (nums) => {

  const sumAllElems = nums
    .reduce((acc, elem) => acc + elem, 0);

  let currentSum = sumAll(nums);

  let max = currentSum;

  for (let i = 0; i < nums.length - 1; i++) {
    currentSum = currentSum + nums.length * nums[i] - sumAllElems;
    max = Math.max(max, currentSum);
  }
  return max
};


// 26
console.log(maxRotateFunction([4, 3, 2, 6]));

// Time - 192ms, Memory - 51.9MB
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  const sortedNums = nums.sort((a, b) => b - a)
  return sortedNums.at(k - 1);
};

// 10
console.log(findKthLargest([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6], 2));

// 5
console.log(findKthLargest([3,2,1,5,6,4], 2));

// 4
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));

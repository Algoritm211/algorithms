// Time - 130ms, Memory - 50.9MB
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  return nums.length !== new Set(nums).size
};

// true
console.log(containsDuplicate([1,2,3,1]));

// false
console.log(containsDuplicate([1,2,3,4]));

// true
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

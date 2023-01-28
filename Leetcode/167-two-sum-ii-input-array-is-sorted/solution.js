// Time - 88ms, Memory - 43.2MB
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  let right = numbers.length - 1;
  let left = 0;

  while (right !== left) {
    if (numbers[right] + numbers[left] > target) {
      right -= 1;
      continue;
    } else if (numbers[right] + numbers[left] < target) {
      left += 1;
      continue;
    }

    if (numbers[right] + numbers[left] === target) {
      return [left + 1, right + 1];
    }
  }
};

// [1, 2]
console.log(twoSum([2, 7, 11, 15], 9));

// [1, 3]
console.log(twoSum([2, 3, 4], 6));

// [1, 2]
console.log(twoSum([-1, 0], -1));

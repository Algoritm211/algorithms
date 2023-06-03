// Time - 1999ms, Memory - 90.5MB, O(k * (n - k)) time, O(n) memory
/**
 * @param {number[]} nums
 * @param {number} windowLength
 * @return {number[]}
 */
const maxSlidingWindow = (nums, windowLength) => {
  // Here we have to use sliding window approach

  if (windowLength === 1) {
    return nums;
  }

  let window = [];
  const numbersMap = new Map();

  const setToMap = (map, value) => {
    map.has(value)
      ? map.set(value, map.get(value) + 1)
      : map.set(value, 1);
  }

  const removeFromMap = (map, value) => {
    map.get(value) === 1
      ? map.delete(value)
      : map.set(value, map.get(value) - 1);
  }

  for (let i = 0; i < windowLength; i++) {
    setToMap(numbersMap, nums[i])
    window.push(nums[i]);
  }

  let max = Math.max(...window);
  let result = [];

  result.push(max);
  for (let i = windowLength; i < nums.length; i++) {

    const newNum = nums[i];
    max = Math.max(max, newNum);
    window.push(newNum);
    setToMap(numbersMap, newNum);

    const shiftedNum = window.shift();
    removeFromMap(numbersMap, shiftedNum);

    if (shiftedNum === max) {
      while (!numbersMap.has(max)) {
        max -= 1;
      }
    }

    result.push(max);
  }

  return result;
};

// [5, 3, 4]
console.log(maxSlidingWindow([5,3,4], 1));

// [1, -1]
console.log(maxSlidingWindow([1, -1], 1));

// [3,3,5,5,6,7]
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

// [1]
console.log(maxSlidingWindow([1], 1));

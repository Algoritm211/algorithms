// Time - 110ms, Memory - 44.4mb
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer <= rightPointer) {
    const middleIndex = Math.ceil((leftPointer + rightPointer) / 2)
    if (nums[middleIndex] < target) {
      leftPointer = middleIndex + 1;
    } else if (nums[middleIndex] > target) {
      rightPointer = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }

  return -1;
};

// 4
console.log(search([-1,0,3,5,9,12], 9));

// -1
console.log(search([-1,0,3,5,9,12], 2));

// Time - 1ms, Memory - 50.08MB
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {

  if (numbers.length === 2 && numbers[0] + numbers[1] === target) {
    return [1, 2]
  }

  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (leftPointer < rightPointer) {
    if (numbers[leftPointer] + numbers[rightPointer] === target) {
      return [leftPointer + 1, rightPointer + 1];
    }

    if (numbers[leftPointer] + numbers[rightPointer] > target) {
      rightPointer--;
    } else if (numbers[leftPointer] + numbers[rightPointer] < target) {
      leftPointer++;
    }
  }

  return [];
}

// [1,2]
console.log(twoSum([2,7,11,15], 9));

// [1,3]
console.log(twoSum([2,3,4], 6));

// [1,2]
console.log(twoSum([-1,0], -1));

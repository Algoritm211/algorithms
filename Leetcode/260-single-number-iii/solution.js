// Time - 67ms, Memory - 45.5MB
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = (nums) => {
  const frequency = nums.reduce((acc, elem) => {
    if (acc.hasOwnProperty(elem)) {
      acc[elem] += 1;
    } else {
      acc[elem] = 1;
    }
    return acc
  }, {})

  const result = Object.entries(frequency)
    .filter((elem) => elem[1] < 2)
    .map(elem => Number(elem[0]))

  return result;
};

// [3, 5]
console.log(singleNumber([1,2,1,3,2,5]));

// [0, -1]
console.log(singleNumber([-1,0]));

// [0, 1]
console.log(singleNumber([0,1]));

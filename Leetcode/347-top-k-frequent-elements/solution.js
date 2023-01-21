// Time - 74ms, Memory - 45MB
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const frequency = nums.reduce((acc, elem) => {
    if (acc.hasOwnProperty(elem)) {
      acc[elem] += 1
    } else {
      acc[elem] = 1
    }
    return acc
  }, {})

  const result = Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(elem => Number(elem[0]))

  return result;
};

// [1,2]
console.log(topKFrequent([1,1,1,2,2,3], 2));

// [1]
console.log(topKFrequent([1], 1));

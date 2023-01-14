// Time - 139ms, Memory - 51.6MB
/**
 * @param {number[]} nums
 * @return {number}
 */
const mostFrequentEven = (nums) => {
  const frequencyMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      if (frequencyMap.hasOwnProperty(nums[i])) {
        frequencyMap[nums[i]] += 1
      } else {
        frequencyMap[nums[i]] = 1
      }
    }
  }

  const frequencyEntries = Object.entries(frequencyMap);

  if (frequencyEntries.length === 0) {
    return -1;
  }

  const sortedEntries = frequencyEntries.sort((a, b) => {
    return b[1] - a[1]
  })

  return Number(sortedEntries[0][0]);
};

// 2
console.log(mostFrequentEven([0,1,2,2,4,4,1]));

// 4
console.log(mostFrequentEven([4,4,4,9,2,4]));

// -1
console.log(mostFrequentEven([29,47,21,41,13,37,25,7]));

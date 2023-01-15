// Time - 73ms, Memory - 45.3MB
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {

  const freqObj = {};

  for (let i = 0; i < nums.length; i++) {
    if (freqObj[nums[i]] > 1) {
      continue;
    }

    if (freqObj.hasOwnProperty(nums[i])) {
      freqObj[nums[i]] += 1;
    } else {
      freqObj[nums[i]] = 1;
    }

  }

  const result = Object.entries(freqObj).find(elem => elem[1] === 1)

  return Number(result[0]);
};

// 500
console.log(singleNumber([30000,500,100,30000,100,30000,100]));

// 5
console.log(singleNumber([0,0,0,5]));

// 3
console.log(singleNumber([2,2,3,2]));

// 99
console.log(singleNumber([0,1,0,1,0,1,99]));

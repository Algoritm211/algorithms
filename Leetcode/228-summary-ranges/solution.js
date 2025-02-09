// Time - 1ms, Memory - 48.6MB
/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = (rawNums) => {
  const nums = rawNums.toSorted((a, b) => a - b);

  let resultArr = [];
  let i = 0;

  while (i < nums.length) {
    let currentNum = nums[i];
    let nextNum = nums[i + 1];

    let startNum = currentNum;

    if (nextNum === undefined) {
      resultArr.push(startNum.toString());
      break;
    }

    let endNum = undefined;

    while (nextNum - currentNum === 1) {
      currentNum = nums[i];
      nextNum = nums[i + 1];
      if (nextNum - currentNum === 1) {
        endNum = nextNum;
      } else {
        break;
      }
      i++;
    }

    if (endNum === undefined) {
      resultArr.push(startNum.toString());
    } else {
      resultArr.push(`${startNum}->${endNum}`);
    }

    i++;
  }

  return resultArr;
};

// ["0->2","4->5","7"]
console.log(summaryRanges([0,1,2,4,5,7]));

// ["0","2->4","6","8->9"]
console.log(summaryRanges([0,2,3,4,6,8,9]));


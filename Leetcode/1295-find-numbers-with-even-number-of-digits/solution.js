// Time - 55ms, Memory - 43.1MB
/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = (nums) => {
  return nums.reduce((acc, elem) => {
    if (elem.toString().length % 2 === 0) {
      return acc + 1
    }
    return acc;
  }, 0)
};

// 2
console.log(findNumbers([12,345,2,6,7896]));

// 1
console.log(findNumbers([555,901,482,1771]));

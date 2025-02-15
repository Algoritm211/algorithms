// Time - 1ms, Memory - 49.75MB, O(n) time, O(1) memory
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  /**
   * In this task we just have to add to the profit every single slice when 
   * the next element of the array will be bigger than previous
   */

  let result = 0;

  for (let index = 1; index < prices.length; index++) {
    const element = prices[index];
    const previousElement = prices[index - 1];
    
    if (element - previousElement > 0) {
      result += element - previousElement;
    }
  };

  return result;
};

// 7
console.log(maxProfit([7,1,5,3,6,4]));

// 4
console.log(maxProfit([1,2,3,4,5]));

// 0
console.log(maxProfit([7,6,4,3,1]));
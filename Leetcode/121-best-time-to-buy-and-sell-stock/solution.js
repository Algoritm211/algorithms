// Time - 77ms, Memory - 51.8MB, O(n) time, O(1) memory
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  // We need to use here sliding window principle
  let leftPointer = 0;
  let rightPointer = 1;

  let result = 0;

  while (rightPointer < prices.length) {
    if (prices[rightPointer] - prices[leftPointer] < 0) {
      rightPointer += 1;
      leftPointer = rightPointer - 1;
    } else {
      result = Math.max(result, prices[rightPointer] - prices[leftPointer]);
      rightPointer += 1;
    }
  }

  return result;
};

// 9
console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9]));

// 2
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));

// 1
console.log(maxProfit([1, 2]));

// 5
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// 0
console.log(maxProfit([7, 6, 4, 3, 1]));

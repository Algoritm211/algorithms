// Time - 4358ms, Memory - 61.3MB
const StockSpanner = function() {
  this.prices = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {

  this.prices.push(price)

  let spanCounter = 0;
  let spans = [];
  let max = -Infinity;

  let startIndex = 0;
  let counter = this.prices.length - 1;
  while (counter !== 0) {
    if (this.prices[counter] > price) {
      startIndex = counter;
      break;
    }
    counter -= 1;
  }

  for (let i = startIndex; i < this.prices.length; i++) {
    if (this.prices[i] > max) {
      max = this.prices[i];
      spans = [];
    }

    if (this.prices[i] <= price) {
      spanCounter += 1;
    } else {
      spanCounter = 0
    }
    spans.push(spanCounter)
  }

  // + 1 because span includes current value
  const maxSpan = Math.max(...spans);
  return maxSpan
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */


// -------------------------------- Alternative solution, faster

// const StockSpanner = function() {
//   this.values = [];
// };
//
// /**
//  * @param {number} price
//  * @return {number}
//  */
// StockSpanner.prototype.next = function(price) {
//   let resultCount = 1;
//   while (this.values.length > 0 && this.values[this.values.length - 1][0] <= price) {
//     const [_price, count] = this.values.pop()
//     resultCount += count;
//   }
//   this.values.push([price, resultCount]);
//   return resultCount;
// };

const stockSpanner = new StockSpanner();
console.log(stockSpanner.next(100)); // return 1
console.log(stockSpanner.next(80));  // return 1
console.log(stockSpanner.next(60));  // return 1
console.log(stockSpanner.next(70));  // return 2
console.log(stockSpanner.next(60));  // return 1
console.log(stockSpanner.next(75));  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
console.log(stockSpanner.next(85));  // return 6

// Time - 940ms, Memory - 73.1MB
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
  const result = new Array(temperatures.length).fill(0);
  const waitingObj = {};

  const maxTemp = Math.max(...temperatures);

  for (let i = 0; i < temperatures.length; i++) {

    if (temperatures[i] > temperatures[i - 1]) {
      for (const [key, value] of Object.entries(waitingObj)) {
        if (temperatures[i] > value) {
          result[key] = i - key;
          delete waitingObj[key];
        }
      }
    }

    if (temperatures[i] < maxTemp) {
      waitingObj[i] = temperatures[i];
    }

  }

  return result;
};

// [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

// [1,1,1,0]
console.log(dailyTemperatures([30, 40, 50, 60]));

// [1,1,0]
console.log(dailyTemperatures([30, 60, 90]));


// Another good variant - https://github.com/yantsishko/leetcode/blob/main/daily-temperatures/daily-temperatures.js

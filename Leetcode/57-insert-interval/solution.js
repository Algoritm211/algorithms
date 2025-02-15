// Time - 5ms, Memory - 54.38MB
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, rawNewInterval) => {
  let newInterval = [...rawNewInterval];
  const resultArr = [];

  for (let index = 0; index < intervals.length; index++) {
    if (newInterval[1] < intervals[index][0]) {
      return [...resultArr, newInterval, ...intervals.slice(index)];
    } else if (newInterval[0] > intervals[index][1]) {
      resultArr.push(intervals[index]);
    } else {
      newInterval = [
        Math.min(newInterval[0], intervals[index][0]),
        Math.max(newInterval[1], intervals[index][1])
      ];
    }
  }

  resultArr.push(newInterval);
  return resultArr;
};

// [[1,5],[6,9]]
console.log(insert([[1,3],[6,9]], [2,5]));

// [[1,2],[3,10],[12,16]]
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));


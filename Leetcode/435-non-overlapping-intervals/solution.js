// Time 265ms, Memory - 74.7MB
/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = (intervals) => {
  let sortedIntervals = intervals
    .sort((a, b) => a[1] - b[1]);

  let result = 0;
  let currentEnd = -Infinity;

  for (let i = 0; i < sortedIntervals.length; i++) {
    const interval = sortedIntervals[i];
    if (interval[0] >= currentEnd) {
      currentEnd = interval[1]
    } else {
      result += 1;
    }
  }

  return result
};

// 2
console.log(eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]]));

// 1
console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]));

// 2
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]]));

// 0
console.log(eraseOverlapIntervals([[1,2],[2,3]]));

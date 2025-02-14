// Time - 12ms, Memory - 58.71MB
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  const sortedIntervalsArr = intervals.toSorted((a, b) => a[0] - b[0]);
  const result = [sortedIntervalsArr[0]];

  for (const [startElement, endElement] of sortedIntervalsArr) {
    const lastInterval = result.at(-1);
    if (startElement <= lastInterval[1]) {
      result.at(-1)[1] = Math.max(result.at(-1)[1], endElement);
    } else {
      result.push([startElement, endElement])
    }
  }

  return result;
};

// [[1,6],[8,10],[15,18]]
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));

// [[1,5]]
console.log(merge([[1,4],[4,5]]));

// [[0,4]]
console.log(merge([[1,4],[0,4]]));



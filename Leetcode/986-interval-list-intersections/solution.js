// Time - 78ms, Memory - 47.9MB
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
const intervalIntersection = (firstList, secondList) => {
  let firstListElemPosition = 0;
  let secondListElemPosition = 0;

  const result = [];

  while (firstListElemPosition < firstList.length && secondListElemPosition < secondList.length) {
    const firstInterval = firstList[firstListElemPosition];
    const secondInterval = secondList[secondListElemPosition];

    const endpoint = Math.min(firstInterval[1], secondInterval[1]);
    const startpoint = Math.max(firstInterval[0], secondInterval[0]);
    if (startpoint <= endpoint) {
      result.push([startpoint, endpoint]);
    }

    if (firstInterval[1] < secondInterval[1]) {
      firstListElemPosition += 1;
    } else {
      secondListElemPosition += 1;
    }
  }

  return result;
};

// [[0,4],[7,8],[14,15],[18,19]]
console.log(intervalIntersection([[0,4],[7,8],[12,19]], [[0,10],[14,15],[18,20]]));

// [[8,10],[12,15]]
console.log(intervalIntersection([[8,15]], [[2,6],[8,10],[12,20]]));

// [[16,16]]
console.log(intervalIntersection([[14,16]], [[7,13],[16,20]]));

// [[3,7]]
console.log(intervalIntersection([[1,7]], [[3,10]]));

// [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
console.log(intervalIntersection([[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]]));

// []
console.log(intervalIntersection([[1,3],[5,9]], []));


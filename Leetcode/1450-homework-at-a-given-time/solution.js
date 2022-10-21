// Time - 77ms, Memory - 41.9MB
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
const busyStudent = (startTime, endTime, queryTime) => {
  let busyStudents = 0;
  if (startTime.length > endTime.length) {
    startTime = startTime.slice(0, endTime.length)
  }
  if (endTime.length > startTime.length) {
    endTime = endTime.slice(0, startTime.length)
  }

  while (startTime.length) {
    const fromBeginStart = startTime.shift();
    const fromBeginFinish = endTime.shift();
    if (fromBeginStart <= queryTime && queryTime <= fromBeginFinish) {
      busyStudents += 1;
    }

    const fromEndStart = startTime.pop()
    const fromEndFinish = endTime.pop()
    if (fromEndStart <= queryTime && queryTime <= fromEndFinish) {
      busyStudents += 1;
    }
  }

  return busyStudents;
};


// 1
console.log(busyStudent([1,2,3], [3,2,7], 4));

// 1
console.log(busyStudent([4], [4], 4));

// 5
console.log(busyStudent(
  [9,8,7,6,5,4,3,2,1],
  [10,10,10,10,10,10,10,10,10],
  5
));

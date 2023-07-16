// Time 61ms, Memory 48.2MB, O(n) time, O(2n) space
/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = (citations) => {
  // We have to use here sorting by counting
  // Sorting by counting effective when range of numbers in array
  // not so big (as we have in this task)

  const entranceCount = {};
  const citationsLength = citations.length

  for (let i = 0; i < citationsLength; i++) {
    if (citations[i] < citationsLength) {
      entranceCount[citations[i]] = entranceCount[citations[i]] + 1 || 1;
    } else {
      entranceCount[citationsLength] = entranceCount[citationsLength] + 1 || 1;
    }
  }

  let newCitations = [];
  for (const [citation, entrance] of Object.entries(entranceCount)) {
    const genArr = new Array(entrance).fill(Number(citation))
    newCitations = newCitations.concat(genArr)
  }

  let hIndex = 1 ;

  for (let i = citationsLength - 1; i >= 0; i--) {
    if (newCitations[i] < hIndex) {
      break;
    }
    hIndex += 1;
  }

  return hIndex - 1;
};

// 1
console.log(hIndex([1]));

// 3
console.log(hIndex([3, 0, 6, 1, 5]));

// 1
console.log(hIndex([1, 3, 1]));

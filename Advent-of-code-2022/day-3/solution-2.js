const { lines } = require('./read-input');
const { alphabet } = require('./utils/alphabet');

const secondPartOfSolution = (lines) => {
  const groups = lines.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 3);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []).sort((g1, g2) => g1.length - g2.length);

  const priority = groups.map(group => {
    for (let i = 0; i < group[0].length; i++) {
      const theLetter = group[0][i];
      if (group[1].includes(theLetter) && group[2].includes(theLetter)) {
        return alphabet.indexOf(theLetter) + 1;
      }
    }
  });

  const result = priority.reduce((prev, curr) => prev + curr, 0)
  return result;
}

console.log(secondPartOfSolution(lines));

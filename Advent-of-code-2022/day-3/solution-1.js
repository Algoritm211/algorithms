const {lines} = require('./read-input');
const {alphabet} = require('./utils/alphabet');

const firstPartOfSolution = (lines) => {
  const priority = lines.map(x => {
    const len = x.length;
    const half1 = x.substring(0, len / 2);
    const half2 = x.substring(len / 2);
    for (let i = 0; i < len / 2; i++) {
      if (half2.includes(half1[i])) {
        return alphabet.indexOf(half1[i]) + 1;
      }
    }
    return 0;
  });

  const result = priority.reduce((prev, curr) => prev + curr, 0)
  return result;
}


console.log(firstPartOfSolution(lines));
